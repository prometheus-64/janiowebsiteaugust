import { pgTable, text, serial, integer, boolean, uuid, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Admin users table for CMS access with Google OAuth and MFA
export const adminUsers = pgTable("admin_users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  googleId: text("google_id").unique(),
  name: text("name"),
  profilePicture: text("profile_picture"),
  mfaSecret: text("mfa_secret"), // TOTP secret for 2FA
  mfaEnabled: boolean("mfa_enabled").notNull().default(false),
  isActive: boolean("is_active").notNull().default(true),
  lastLoginAt: timestamp("last_login_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

// Blogs table
export const blogs = pgTable("blogs", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  featuredImage: text("featured_image"),
  author: text("author"),
  authorId: uuid("author_id").references(() => adminUsers.id),
  tags: text("tags"), // JSON array as string
  category: text("category"),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  isPublished: boolean("is_published").notNull().default(false),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

// Case Studies table
export const caseStudies = pgTable("case_studies", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  clientName: text("client_name"),
  industry: text("industry"),
  excerpt: text("excerpt"),
  challenge: text("challenge").notNull(),
  solution: text("solution").notNull(),
  results: text("results").notNull(),
  metrics: text("metrics"), // JSON object as string: { metric1: value1, metric2: value2 }
  featuredImage: text("featured_image"),
  testimonial: text("testimonial"),
  testimonialAuthor: text("testimonial_author"),
  testimonialRole: text("testimonial_role"),
  tags: text("tags"), // JSON array as string
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  isPublished: boolean("is_published").notNull().default(false),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

// Guides table
export const guides = pgTable("guides", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  featuredImage: text("featured_image"),
  category: text("category"),
  difficulty: text("difficulty"), // beginner, intermediate, advanced
  readTime: integer("read_time"), // estimated read time in minutes
  tags: text("tags"), // JSON array as string
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  isPublished: boolean("is_published").notNull().default(false),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
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


// Zod schemas for new tables
export const insertAdminUserSchema = createInsertSchema(adminUsers).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  lastLoginAt: true,
});

export const insertBlogSchema = createInsertSchema(blogs).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  tags: z.string().optional(),
  publishedAt: z.string().optional().transform(val => val ? new Date(val) : undefined),
});

export const insertCaseStudySchema = createInsertSchema(caseStudies).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  tags: z.string().optional(),
  metrics: z.string().optional(),
  publishedAt: z.string().optional().transform(val => val ? new Date(val) : undefined),
});

export const insertGuideSchema = createInsertSchema(guides).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  tags: z.string().optional(),
  publishedAt: z.string().optional().transform(val => val ? new Date(val) : undefined),
});

// Type exports
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export type AdminUser = typeof adminUsers.$inferSelect;
export type InsertAdminUser = z.infer<typeof insertAdminUserSchema>;

export type Blog = typeof blogs.$inferSelect;
export type InsertBlog = z.infer<typeof insertBlogSchema>;

export type CaseStudy = typeof caseStudies.$inferSelect;
export type InsertCaseStudy = z.infer<typeof insertCaseStudySchema>;

export type Guide = typeof guides.$inferSelect;
export type InsertGuide = z.infer<typeof insertGuideSchema>;
