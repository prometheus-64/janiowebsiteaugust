// server/index.ts
import "dotenv/config";
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/webhook.ts
import { z } from "zod";
var webhookDataSchema = z.object({
  // Required fields
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email format").max(255, "Email too long"),
  company: z.string().trim().min(1, "Company is required").max(200, "Company name too long"),
  // Optional fields with validation
  phone: z.string().trim().max(50, "Phone number too long").optional(),
  serviceInterest: z.string().trim().max(100, "Service interest too long").optional(),
  companySize: z.string().trim().max(50, "Company size too long").optional(),
  message: z.string().trim().max(2e3, "Message too long").optional(),
  // Tracking fields
  referrerPage: z.string().trim().max(500, "Referrer page too long").optional(),
  referrerUrl: z.string().url("Invalid referrer URL").max(1e3, "Referrer URL too long").optional(),
  ctaSourceUrl: z.string().trim().max(500, "CTA source URL too long").optional(),
  submissionTimestamp: z.string().datetime("Invalid timestamp format").optional(),
  userAgent: z.string().trim().max(1e3, "User agent too long").optional(),
  // Server fields
  serverTimestamp: z.string().datetime().optional(),
  submissionId: z.string().uuid().optional()
});
var WebhookService = class {
  config = null;
  configure(config) {
    if (!config.url.startsWith("https://")) {
      throw new Error("Webhook URL must use HTTPS for security");
    }
    if (!config.username || !config.password) {
      throw new Error("Username and password are required for webhook authentication");
    }
    this.config = {
      ...config,
      timeout: config.timeout || 1e4
      // Default 10 second timeout
    };
  }
  async send(rawData) {
    if (!this.config) {
      console.warn("Webhook not configured - skipping webhook delivery");
      return { success: false, error: "Webhook not configured" };
    }
    try {
      const validatedData = webhookDataSchema.parse({
        ...rawData,
        serverTimestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      const credentials = Buffer.from(`${this.config.username}:${this.config.password}`).toString("base64");
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);
      const response = await fetch(this.config.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Basic ${credentials}`,
          "User-Agent": "Janio-Webhook/1.0"
        },
        body: JSON.stringify(validatedData),
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      console.log(`\u2705 Webhook delivered successfully to ${this.config.url}`);
      return { success: true };
    } catch (error) {
      let errorMessage = "Unknown webhook error";
      if (error instanceof Error) {
        if (error.name === "AbortError") {
          errorMessage = `Timeout after ${this.config.timeout}ms`;
        } else if (error.message.includes("fetch")) {
          errorMessage = `Network error: ${error.message}`;
        } else {
          errorMessage = error.message;
        }
      }
      console.error(`\u274C Webhook delivery failed: ${errorMessage}`);
      return { success: false, error: errorMessage };
    }
  }
  isConfigured() {
    return this.config !== null;
  }
};
var webhookService = new WebhookService();
function sanitizeString(input) {
  if (typeof input !== "string") {
    return String(input || "");
  }
  return input.trim().replace(/[<>'"&]/g, "").substring(0, 2e3);
}

// server/routes.ts
async function registerRoutes(app2) {
  const webhookUrl = process.env.WEBHOOK_URL || "https://janio.app.n8n.cloud/webhook/ddf4a9ce-40ef-462c-8264-c582a28e3ae2";
  const webhookUsername = process.env.WEBHOOK_USERNAME || "janiowebsiteleadform";
  const webhookPassword = process.env.WEBHOOK_PASSWORD || "kyNpen-wijmy0-cibhug";
  if (webhookUrl && webhookUsername && webhookPassword) {
    try {
      webhookService.configure({
        url: webhookUrl,
        username: webhookUsername,
        password: webhookPassword,
        timeout: parseInt(process.env.WEBHOOK_TIMEOUT || "10000")
      });
      console.log("\u2705 Webhook configured successfully on server start");
      console.log(`   URL: ${webhookUrl}`);
    } catch (error) {
      console.error("\u274C Failed to configure webhook on startup:", error);
    }
  } else {
    console.log("\u26A0\uFE0F Webhook not configured - missing environment variables");
  }
  app2.post("/api/contact", async (req, res) => {
    try {
      const sanitizedData = {
        name: sanitizeString(req.body.name),
        email: sanitizeString(req.body.email),
        company: sanitizeString(req.body.company),
        phone: req.body.phone ? sanitizeString(req.body.phone) : void 0,
        serviceInterest: req.body.serviceInterest ? sanitizeString(req.body.serviceInterest) : void 0,
        companySize: req.body.companySize ? sanitizeString(req.body.companySize) : void 0,
        message: req.body.message ? sanitizeString(req.body.message) : void 0,
        referrerPage: req.body.referrerPage ? sanitizeString(req.body.referrerPage) : void 0,
        referrerUrl: req.body.referrerUrl ? sanitizeString(req.body.referrerUrl) : void 0,
        ctaSourceUrl: req.body.ctaSourceUrl ? sanitizeString(req.body.ctaSourceUrl) : void 0,
        userAgent: req.body.userAgent ? sanitizeString(req.body.userAgent) : void 0,
        submissionTimestamp: req.body.submissionTimestamp ? sanitizeString(req.body.submissionTimestamp) : void 0
      };
      if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.company) {
        return res.status(400).json({
          success: false,
          error: "Name, email, and company are required"
        });
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedData.email)) {
        return res.status(400).json({
          success: false,
          error: "Invalid email format"
        });
      }
      console.log("\u{1F50D} Webhook Debug Info:");
      console.log("  - Is webhook configured?", webhookService.isConfigured());
      console.log("  - DISABLE_WEBHOOK env?", process.env.DISABLE_WEBHOOK);
      console.log("  - WEBHOOK_URL env?", process.env.WEBHOOK_URL ? "SET" : "NOT SET");
      console.log("  - WEBHOOK_USERNAME env?", process.env.WEBHOOK_USERNAME ? "SET" : "NOT SET");
      console.log("  - WEBHOOK_PASSWORD env?", process.env.WEBHOOK_PASSWORD ? "SET" : "NOT SET");
      const webhookDisabled = process.env.DISABLE_WEBHOOK === "true";
      if (!webhookService.isConfigured()) {
        console.error("\u274C Webhook not configured");
        return res.status(500).json({
          success: false,
          error: "Lead capture system not configured. Please try again later."
        });
      }
      if (webhookDisabled) {
        console.error("\u274C Webhook disabled");
        return res.status(500).json({
          success: false,
          error: "Lead capture system disabled. Please try again later."
        });
      }
      console.log("\u{1F4E4} Attempting to send webhook...");
      try {
        const generateUUID = () => {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === "x" ? r : r & 3 | 8;
            return v.toString(16);
          });
        };
        const webhookResult = await webhookService.send({
          ...sanitizedData,
          submissionId: generateUUID(),
          serverTimestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
        if (webhookResult.success) {
          console.log("\u2705 Webhook delivered successfully");
          res.json({ success: true, message: "Thank you! We'll be in touch within 24 hours." });
        } else {
          console.error("\u274C Webhook failed:", webhookResult.error);
          res.status(500).json({
            success: false,
            error: "Unable to submit your inquiry. Please try again or contact us directly."
          });
        }
      } catch (error) {
        console.error("\u274C Webhook delivery failed:", error);
        res.status(500).json({
          success: false,
          error: "Unable to submit your inquiry. Please try again or contact us directly."
        });
      }
    } catch (error) {
      console.error("Contact submission error:", error);
      let errorMessage = "Something went wrong processing your submission";
      if (error instanceof Error) {
        console.error("Detailed error:", error.message);
        errorMessage = process.env.NODE_ENV === "development" ? error.message : errorMessage;
      }
      res.status(500).json({
        success: false,
        error: errorMessage
      });
    }
  });
  app2.post("/api/webhook/configure", async (req, res) => {
    try {
      const { url, username, password, timeout } = req.body;
      if (!url || !username || !password) {
        return res.status(400).json({
          success: false,
          error: "URL, username, and password are required"
        });
      }
      if (!url.startsWith("https://")) {
        return res.status(400).json({
          success: false,
          error: "Webhook URL must use HTTPS"
        });
      }
      webhookService.configure({
        url: sanitizeString(url),
        username: sanitizeString(username),
        password: sanitizeString(password),
        timeout: timeout || 1e4
      });
      res.json({
        success: true,
        message: "Webhook configured successfully",
        url
        // Return URL for confirmation (but not credentials)
      });
    } catch (error) {
      console.error("Webhook configuration error:", error);
      res.status(400).json({
        success: false,
        error: error instanceof Error ? error.message : "Configuration failed"
      });
    }
  });
  app2.get("/api/webhook/status", async (req, res) => {
    res.json({
      success: true,
      configured: webhookService.isConfigured(),
      environment: {
        WEBHOOK_URL: process.env.WEBHOOK_URL ? "SET" : "NOT SET",
        WEBHOOK_USERNAME: process.env.WEBHOOK_USERNAME ? "SET" : "NOT SET",
        WEBHOOK_PASSWORD: process.env.WEBHOOK_PASSWORD ? "SET" : "NOT SET",
        WEBHOOK_TIMEOUT: process.env.WEBHOOK_TIMEOUT || "NOT SET",
        DISABLE_WEBHOOK: process.env.DISABLE_WEBHOOK || "NOT SET"
      }
    });
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core bundles (critical)
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          // UI components (lazy load)
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu", "@radix-ui/react-navigation-menu"],
          forms: ["@radix-ui/react-select", "@radix-ui/react-label", "react-hook-form", "@hookform/resolvers"],
          // Icons (lazy load)
          icons: ["lucide-react"],
          // Utilities
          utils: ["clsx", "tailwind-merge", "class-variance-authority"],
          // Analytics and performance (non-critical)
          analytics: ["@tanstack/react-query"],
          // Heavy dependencies
          motion: ["framer-motion"]
        }
      }
    },
    minify: "esbuild",
    cssMinify: true,
    sourcemap: false,
    target: "es2020"
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const host = req.get("host");
  const protocol = req.get("x-forwarded-proto") || (req.secure ? "https" : "http");
  if (host && host.startsWith("www.")) {
    const nonWwwHost = host.slice(4);
    const redirectUrl = `${protocol}://${nonWwwHost}${req.originalUrl}`;
    return res.redirect(301, redirectUrl);
  }
  if (process.env.NODE_ENV === "production" && protocol !== "https") {
    const redirectUrl = `https://${host}${req.originalUrl}`;
    return res.redirect(301, redirectUrl);
  }
  if (req.path.length > 1 && req.path.endsWith("/")) {
    const redirectUrl = `${protocol}://${host}${req.path.slice(0, -1)}${req.url.slice(req.path.length)}`;
    return res.redirect(301, redirectUrl);
  }
  next();
});
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = process.env.PORT || 5e3;
  server.listen({
    port,
    host: "0.0.0.0"
  }, () => {
    log(`serving on port ${port}`);
  });
})();
