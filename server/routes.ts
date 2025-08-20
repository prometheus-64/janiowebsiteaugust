import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, data: submission });
    } catch (error) {
      console.error("Contact submission error:", error);
      res.status(400).json({ success: false, error: "Invalid submission data" });
    }
  });

  // Contact submissions CRUD endpoints
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json({ success: true, data: submissions });
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ success: false, error: "Failed to fetch submissions" });
    }
  });

  app.get("/api/contact-submissions/:id", async (req, res) => {
    try {
      const submission = await storage.getContactSubmission(req.params.id);
      if (!submission) {
        return res.status(404).json({ success: false, error: "Contact submission not found" });
      }
      res.json({ success: true, data: submission });
    } catch (error) {
      console.error("Error fetching contact submission:", error);
      res.status(500).json({ success: false, error: "Failed to fetch submission" });
    }
  });

  app.put("/api/contact-submissions/:id", async (req, res) => {
    try {
      const submission = await storage.updateContactSubmission(req.params.id, req.body);
      res.json({ success: true, data: submission });
    } catch (error) {
      console.error("Error updating contact submission:", error);
      res.status(500).json({ success: false, error: "Failed to update submission" });
    }
  });

  app.delete("/api/contact-submissions/:id", async (req, res) => {
    try {
      await storage.deleteContactSubmission(req.params.id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting contact submission:", error);
      res.status(500).json({ success: false, error: "Failed to delete submission" });
    }
  });


  const httpServer = createServer(app);

  return httpServer;
}
