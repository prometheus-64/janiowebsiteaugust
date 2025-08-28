import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { webhookService, sanitizeString } from "./webhook";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Auto-configure webhook on server start (only if environment variables are set)
  const webhookUrl = process.env.WEBHOOK_URL || 'https://janio.app.n8n.cloud/webhook/ddf4a9ce-40ef-462c-8264-c582a28e3ae2';
  const webhookUsername = process.env.WEBHOOK_USERNAME || 'janiowebsiteleadform';
  const webhookPassword = process.env.WEBHOOK_PASSWORD || 'kyNpen-wijmy0-cibhug';
  
  if (webhookUrl && webhookUsername && webhookPassword) {
    try {
      webhookService.configure({
        url: webhookUrl,
        username: webhookUsername,
        password: webhookPassword,
        timeout: parseInt(process.env.WEBHOOK_TIMEOUT || '10000'),
      });
      console.log('✅ Webhook configured successfully on server start');
      console.log(`   URL: ${webhookUrl}`);
    } catch (error) {
      console.error('❌ Failed to configure webhook on startup:', error);
    }
  } else {
    console.log('⚠️ Webhook not configured - missing environment variables');
  }

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Sanitize input data
      const sanitizedData = {
        ...req.body,
        name: sanitizeString(req.body.name),
        email: sanitizeString(req.body.email),
        company: sanitizeString(req.body.company),
        phone: req.body.phone ? sanitizeString(req.body.phone) : undefined,
        serviceInterest: req.body.serviceInterest ? sanitizeString(req.body.serviceInterest) : undefined,
        companySize: req.body.companySize ? sanitizeString(req.body.companySize) : undefined,
        message: req.body.message ? sanitizeString(req.body.message) : undefined,
        referrerPage: req.body.referrerPage ? sanitizeString(req.body.referrerPage) : undefined,
        referrerUrl: req.body.referrerUrl ? sanitizeString(req.body.referrerUrl) : undefined,
        ctaSourceUrl: req.body.ctaSourceUrl ? sanitizeString(req.body.ctaSourceUrl) : undefined,
        userAgent: req.body.userAgent ? sanitizeString(req.body.userAgent) : undefined,
        submissionTimestamp: req.body.submissionTimestamp ? sanitizeString(req.body.submissionTimestamp) : undefined,
      };
      
      const validatedData = insertContactSubmissionSchema.parse(sanitizedData);
      const submission = await storage.createContactSubmission(validatedData);
      
      // Always respond with success first, then handle webhook
      res.json({ success: true, data: submission });
      
      // Send to webhook if configured (completely non-blocking)
      if (webhookService.isConfigured() && !process.env.DISABLE_WEBHOOK) {
        // Fire and forget - webhook failures won't affect form submission
        webhookService.send({
          ...sanitizedData,
          submissionId: submission.id,
          serverTimestamp: new Date().toISOString(),
        }).catch(error => {
          console.error('Webhook delivery failed (non-blocking):', error);
          // Form submission already succeeded, this is just a notification failure
        });
      } else {
        console.log('⚠️ Webhook skipped - form submission saved successfully');
      }
    } catch (error) {
      console.error("Contact submission error:", error);
      
      // Provide more detailed error information for debugging
      let errorMessage = "Invalid submission data";
      if (error instanceof Error) {
        console.error("Detailed error:", error.message);
        errorMessage = error.message;
      }
      
      res.status(400).json({ 
        success: false, 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error : undefined
      });
    }
  });

  // Webhook configuration endpoint (protected - you might want to add authentication)
  app.post("/api/webhook/configure", async (req, res) => {
    try {
      const { url, username, password, timeout } = req.body;
      
      if (!url || !username || !password) {
        return res.status(400).json({ 
          success: false, 
          error: "URL, username, and password are required" 
        });
      }
      
      if (!url.startsWith('https://')) {
        return res.status(400).json({ 
          success: false, 
          error: "Webhook URL must use HTTPS" 
        });
      }
      
      webhookService.configure({
        url: sanitizeString(url),
        username: sanitizeString(username),
        password: sanitizeString(password),
        timeout: timeout || 10000,
      });
      
      res.json({ 
        success: true, 
        message: "Webhook configured successfully",
        url: url // Return URL for confirmation (but not credentials)
      });
    } catch (error) {
      console.error("Webhook configuration error:", error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Configuration failed" 
      });
    }
  });

  // Webhook status endpoint
  app.get("/api/webhook/status", async (req, res) => {
    res.json({
      success: true,
      configured: webhookService.isConfigured(),
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
