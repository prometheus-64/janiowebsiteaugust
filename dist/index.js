var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  contactSubmissions: () => contactSubmissions,
  insertContactSubmissionSchema: () => insertContactSubmissionSchema,
  insertUserSchema: () => insertUserSchema,
  users: () => users
});
import { pgTable, text, serial, uuid, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users, contactSubmissions, insertUserSchema, insertContactSubmissionSchema;
var init_schema = __esm({
  "shared/schema.ts"() {
    "use strict";
    users = pgTable("users", {
      id: serial("id").primaryKey(),
      username: text("username").notNull().unique(),
      password: text("password").notNull()
    });
    contactSubmissions = pgTable("contact_submissions", {
      id: uuid("id").primaryKey().defaultRandom(),
      name: text("name").notNull(),
      email: text("email").notNull(),
      company: text("company").notNull(),
      phone: text("phone"),
      serviceInterest: text("service_interest"),
      companySize: text("company_size"),
      message: text("message"),
      status: text("status").notNull().default("new"),
      referrerPage: text("referrer_page"),
      // Track which page led to the contact
      referrerUrl: text("referrer_url"),
      // Full URL for more context
      submittedAt: timestamp("submitted_at", { withTimezone: true }).notNull().defaultNow()
    });
    insertUserSchema = createInsertSchema(users).pick({
      username: true,
      password: true
    });
    insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
      id: true,
      status: true,
      submittedAt: true
    });
  }
});

// server/db.ts
var db_exports = {};
__export(db_exports, {
  db: () => db,
  pool: () => pool
});
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
var pool, db;
var init_db = __esm({
  "server/db.ts"() {
    "use strict";
    init_schema();
    neonConfig.webSocketConstructor = ws;
    if (!process.env.DATABASE_URL) {
      throw new Error(
        "DATABASE_URL must be set. Did you forget to provision a database?"
      );
    }
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
    db = drizzle({ client: pool, schema: schema_exports });
  }
});

// server/index.ts
import "dotenv/config";
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
init_schema();
import { eq } from "drizzle-orm";
import crypto from "node:crypto";
async function getDb() {
  const module = await Promise.resolve().then(() => (init_db(), db_exports));
  return module.db;
}
var DatabaseStorage = class {
  async getUser(id) {
    const db2 = await getDb();
    const result = await db2.select().from(users).where(eq(users.id, id));
    return result[0];
  }
  async getUserByUsername(username) {
    const db2 = await getDb();
    const result = await db2.select().from(users).where(eq(users.username, username));
    return result[0];
  }
  async createUser(insertUser) {
    const db2 = await getDb();
    const result = await db2.insert(users).values(insertUser).returning();
    return result[0];
  }
  async createContactSubmission(submission) {
    const db2 = await getDb();
    const result = await db2.insert(contactSubmissions).values(submission).returning();
    return result[0];
  }
  async getContactSubmissions() {
    const db2 = await getDb();
    return await db2.select().from(contactSubmissions).orderBy(contactSubmissions.submittedAt);
  }
  async getContactSubmission(id) {
    const db2 = await getDb();
    const result = await db2.select().from(contactSubmissions).where(eq(contactSubmissions.id, id));
    return result[0];
  }
  async updateContactSubmission(id, updateData) {
    const db2 = await getDb();
    const result = await db2.update(contactSubmissions).set(updateData).where(eq(contactSubmissions.id, id)).returning();
    return result[0];
  }
  async deleteContactSubmission(id) {
    const db2 = await getDb();
    await db2.delete(contactSubmissions).where(eq(contactSubmissions.id, id));
  }
};
var InMemoryStorage = class {
  inMemoryUsers = [];
  inMemoryContactSubmissions = [];
  async getUser(id) {
    return this.inMemoryUsers.find((u) => u.id === id);
  }
  async getUserByUsername(username) {
    return this.inMemoryUsers.find((u) => u.username === username);
  }
  async createUser(insertUser) {
    const newUser = {
      id: this.inMemoryUsers.length + 1,
      username: insertUser.username,
      password: insertUser.password
    };
    this.inMemoryUsers.push(newUser);
    return newUser;
  }
  async createContactSubmission(submission) {
    const newSubmission = {
      id: crypto.randomUUID(),
      name: submission.name,
      email: submission.email,
      company: submission.company,
      phone: submission.phone ?? null,
      serviceInterest: submission.serviceInterest ?? null,
      companySize: submission.companySize ?? null,
      message: submission.message ?? null,
      status: "new",
      referrerPage: submission.referrerPage ?? null,
      referrerUrl: submission.referrerUrl ?? null,
      submittedAt: /* @__PURE__ */ new Date()
    };
    this.inMemoryContactSubmissions.push(newSubmission);
    return newSubmission;
  }
  async getContactSubmissions() {
    return [...this.inMemoryContactSubmissions].sort(
      (a, b) => new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime()
    );
  }
  async getContactSubmission(id) {
    return this.inMemoryContactSubmissions.find((s) => s.id === id);
  }
  async updateContactSubmission(id, updateData) {
    const idx = this.inMemoryContactSubmissions.findIndex((s) => s.id === id);
    if (idx === -1) throw new Error("Contact submission not found");
    this.inMemoryContactSubmissions[idx] = { ...this.inMemoryContactSubmissions[idx], ...updateData };
    return this.inMemoryContactSubmissions[idx];
  }
  async deleteContactSubmission(id) {
    this.inMemoryContactSubmissions = this.inMemoryContactSubmissions.filter((s) => s.id !== id);
  }
};
function createStorage() {
  if (process.env.DATABASE_URL) {
    return new DatabaseStorage();
  }
  console.warn("DATABASE_URL not set. Using in-memory storage. Data will not persist.");
  return new InMemoryStorage();
}
var storage = createStorage();

// server/routes.ts
init_schema();
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, data: submission });
    } catch (error) {
      console.error("Contact submission error:", error);
      res.status(400).json({ success: false, error: "Invalid submission data" });
    }
  });
  app2.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json({ success: true, data: submissions });
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ success: false, error: "Failed to fetch submissions" });
    }
  });
  app2.get("/api/contact-submissions/:id", async (req, res) => {
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
  app2.put("/api/contact-submissions/:id", async (req, res) => {
    try {
      const submission = await storage.updateContactSubmission(req.params.id, req.body);
      res.json({ success: true, data: submission });
    } catch (error) {
      console.error("Error updating contact submission:", error);
      res.status(500).json({ success: false, error: "Failed to update submission" });
    }
  });
  app2.delete("/api/contact-submissions/:id", async (req, res) => {
    try {
      await storage.deleteContactSubmission(req.params.id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting contact submission:", error);
      res.status(500).json({ success: false, error: "Failed to delete submission" });
    }
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
    emptyOutDir: true
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
