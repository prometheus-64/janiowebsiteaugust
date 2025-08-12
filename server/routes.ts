import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertUseCaseSchema, updateUseCaseSchema } from "@shared/schema";

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

  // Use Cases CRUD API endpoints
  app.get("/api/use-cases", async (req, res) => {
    try {
      const useCases = await storage.getUseCases();
      // Parse metrics JSON for each use case
      const formattedUseCases = useCases.map(useCase => ({
        ...useCase,
        metrics: JSON.parse(useCase.metrics)
      }));
      res.json({ success: true, data: formattedUseCases });
    } catch (error) {
      console.error("Error fetching use cases:", error);
      res.status(500).json({ success: false, error: "Failed to fetch use cases" });
    }
  });

  app.get("/api/use-cases/:id", async (req, res) => {
    try {
      const param = req.params.id;
      let useCase;
      
      // First try as slug if it doesn't look like a UUID
      const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(param);
      
      if (!isUUID) {
        // Try slug lookup first
        useCase = await storage.getUseCaseBySlug(param);
      } else {
        // Try ID lookup
        useCase = await storage.getUseCase(param);
      }
      
      if (!useCase) {
        return res.status(404).json({ success: false, error: "Use case not found" });
      }
      const formattedUseCase = {
        ...useCase,
        metrics: JSON.parse(useCase.metrics)
      };
      res.json({ success: true, data: formattedUseCase });
    } catch (error) {
      console.error("Error fetching use case:", error);
      res.status(500).json({ success: false, error: "Failed to fetch use case" });
    }
  });

  app.post("/api/use-cases", async (req, res) => {
    try {
      const validatedData = insertUseCaseSchema.parse(req.body);
      const useCase = await storage.createUseCase(validatedData);
      const formattedUseCase = {
        ...useCase,
        metrics: JSON.parse(useCase.metrics)
      };
      res.json({ success: true, data: formattedUseCase });
    } catch (error) {
      console.error("Use case creation error:", error);
      res.status(400).json({ success: false, error: "Invalid use case data" });
    }
  });

  app.put("/api/use-cases/:id", async (req, res) => {
    try {
      const validatedData = updateUseCaseSchema.parse(req.body);
      const useCase = await storage.updateUseCase(req.params.id, validatedData);
      const formattedUseCase = {
        ...useCase,
        metrics: JSON.parse(useCase.metrics)
      };
      res.json({ success: true, data: formattedUseCase });
    } catch (error) {
      console.error("Use case update error:", error);
      res.status(400).json({ success: false, error: "Invalid use case data" });
    }
  });

  app.delete("/api/use-cases/:id", async (req, res) => {
    try {
      await storage.deleteUseCase(req.params.id);
      res.json({ success: true });
    } catch (error) {
      console.error("Use case deletion error:", error);
      res.status(500).json({ success: false, error: "Failed to delete use case" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
