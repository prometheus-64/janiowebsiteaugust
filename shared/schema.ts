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
  ctaSourceUrl: text("cta_source_url"), // Specific page where CTA was clicked
  userAgent: text("user_agent"), // Browser/device information
  submissionTimestamp: text("submission_timestamp"), // Client-side timestamp
  submittedAt: timestamp("submitted_at", { withTimezone: true }).notNull().defaultNow(),
});


export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  status: true,
  submittedAt: true,
}).extend({
  // Make new fields optional and handle empty strings
  phone: z.string().optional().or(z.literal('')),
  serviceInterest: z.string().optional().or(z.literal('')),
  companySize: z.string().optional().or(z.literal('')),
  message: z.string().optional().or(z.literal('')),
  referrerPage: z.string().optional().or(z.literal('')),
  referrerUrl: z.string().optional().or(z.literal('')),
  ctaSourceUrl: z.string().optional().or(z.literal('')),
  userAgent: z.string().optional().or(z.literal('')),
  submissionTimestamp: z.string().optional().or(z.literal('')),
});


export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
