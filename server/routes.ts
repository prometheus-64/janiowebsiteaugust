import type { Express } from "express";
import { createServer, type Server } from "http";
import { webhookService, sanitizeString } from "./webhook";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Auto-configure webhook on server start (only if environment variables are set)
  const webhookUrl = process.env.WEBHOOK_URL || 'https://janio.app.n8n.cloud/webhook/ddf4a9ce-40ef-462c-8264-c582a28e3ae2';
  const webhookUsername = process.env.WEBHOOK_USERNAME || 'janiowebsiteleadform';
  const webhookPassword = process.env.WEBHOOK_PASSWORD;
  
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

  // Contact form submission endpoint - webhook-only (no database storage)
  app.post("/api/contact", async (req, res) => {
    try {
      // Sanitize input data
      const sanitizedData = {
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
      
      // Basic validation of required fields
      if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.company) {
        return res.status(400).json({ 
          success: false, 
          error: "Name, email, and company are required" 
        });
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedData.email)) {
        return res.status(400).json({ 
          success: false, 
          error: "Invalid email format" 
        });
      }
      
      // Debug webhook configuration
      console.log('🔍 Webhook Debug Info:');
      console.log('  - Is webhook configured?', webhookService.isConfigured());
      console.log('  - DISABLE_WEBHOOK env?', process.env.DISABLE_WEBHOOK);
      console.log('  - WEBHOOK_URL env?', process.env.WEBHOOK_URL ? 'SET' : 'NOT SET');
      console.log('  - WEBHOOK_USERNAME env?', process.env.WEBHOOK_USERNAME ? 'SET' : 'NOT SET');
      console.log('  - WEBHOOK_PASSWORD env?', process.env.WEBHOOK_PASSWORD ? 'SET' : 'NOT SET');
      
      // Send to webhook - REQUIRED for success
      const webhookDisabled = process.env.DISABLE_WEBHOOK === 'true';
      if (!webhookService.isConfigured()) {
        console.error('❌ Webhook not configured');
        return res.status(500).json({ 
          success: false, 
          error: "Lead capture system not configured. Please try again later." 
        });
      }
      
      if (webhookDisabled) {
        console.error('❌ Webhook disabled');
        return res.status(500).json({ 
          success: false, 
          error: "Lead capture system disabled. Please try again later." 
        });
      }
      
      console.log('📤 Attempting to send webhook...');
      try {
        // Generate proper UUID for submissionId
        const generateUUID = () => {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
        };
        
        const webhookResult = await webhookService.send({
          ...sanitizedData,
          submissionId: generateUUID(),
          serverTimestamp: new Date().toISOString(),
        });
        
        if (webhookResult.success) {
          console.log('✅ Webhook delivered successfully');
          res.json({ success: true, message: "Thank you! We'll be in touch within 24 hours." });
        } else {
          console.error('❌ Webhook failed:', webhookResult.error);
          res.status(500).json({ 
            success: false, 
            error: "Unable to submit your inquiry. Please try again or contact us directly." 
          });
        }
      } catch (error) {
        console.error('❌ Webhook delivery failed:', error);
        res.status(500).json({ 
          success: false, 
          error: "Unable to submit your inquiry. Please try again or contact us directly." 
        });
      }
    } catch (error) {
      console.error("Contact submission error:", error);
      
      // Provide more detailed error information for debugging
      let errorMessage = "Something went wrong processing your submission";
      if (error instanceof Error) {
        console.error("Detailed error:", error.message);
        errorMessage = process.env.NODE_ENV === 'development' ? error.message : errorMessage;
      }
      
      res.status(500).json({ 
        success: false, 
        error: errorMessage
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
      environment: {
        WEBHOOK_URL: process.env.WEBHOOK_URL ? 'SET' : 'NOT SET',
        WEBHOOK_USERNAME: process.env.WEBHOOK_USERNAME ? 'SET' : 'NOT SET', 
        WEBHOOK_PASSWORD: process.env.WEBHOOK_PASSWORD ? 'SET' : 'NOT SET',
        WEBHOOK_TIMEOUT: process.env.WEBHOOK_TIMEOUT || 'NOT SET',
        DISABLE_WEBHOOK: process.env.DISABLE_WEBHOOK || 'NOT SET',
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
