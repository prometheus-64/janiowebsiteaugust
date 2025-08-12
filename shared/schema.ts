import { pgTable, text, serial, integer, boolean, uuid, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  phone: text("phone"),
  serviceInterest: text("service_interest"),
  companySize: text("company_size"),
  message: text("message"),
  status: text("status").notNull().default('new'),
  referrerPage: text("referrer_page"), // Track which page led to the contact
  referrerUrl: text("referrer_url"), // Full URL for more context
  submittedAt: timestamp("submitted_at", { withTimezone: true }).notNull().defaultNow(),
});

export const useCases = pgTable("use_cases", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  industry: text("industry").notNull(),
  challenge: text("challenge").notNull(),
  result: text("result").notNull(),
  tags: text("tags").array().notNull().default([]),
  href: text("href").notNull(),
  metrics: text("metrics").notNull(), // JSON string for metrics array
  
  // Detailed content fields for comprehensive use case pages
  heroSubtitle: text("hero_subtitle"),
  heroDescription: text("hero_description"),
  challengeDescription: text("challenge_description"),
  challenges: text("challenges"), // JSON array of challenge objects
  solutions: text("solutions"), // JSON array of solution objects
  detailedMetrics: text("detailed_metrics"), // JSON array of detailed metrics
  additionalContent: text("additional_content"), // JSON for flexible content blocks
  slug: text("slug").unique(),
  showDetailedPage: boolean("show_detailed_page").default(false), // Control "Read Full Case Study" button visibility
  
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  status: true,
  submittedAt: true,
});

export const insertUseCaseSchema = createInsertSchema(useCases).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  metrics: z.array(z.object({
    label: z.string(),
    value: z.string(),
  })),
  challenges: z.array(z.object({
    icon: z.string().optional(),
    title: z.string(),
    description: z.string(),
  })).optional(),
  solutions: z.array(z.object({
    title: z.string(),
    description: z.string(),
    benefit: z.string().optional(),
  })).optional(),
  detailedMetrics: z.array(z.object({
    metric: z.string(),
    label: z.string(),
  })).optional(),
});

export const updateUseCaseSchema = insertUseCaseSchema.partial();

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type UseCase = typeof useCases.$inferSelect;
export type InsertUseCase = z.infer<typeof insertUseCaseSchema>;
export type UpdateUseCase = z.infer<typeof updateUseCaseSchema>;
