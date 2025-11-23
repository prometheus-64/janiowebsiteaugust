import {
  users,
  contactSubmissions,
  adminUsers,
  blogs,
  caseStudies,
  guides,
  type User,
  type InsertUser,
  type ContactSubmission,
  type InsertContactSubmission,
  type AdminUser,
  type InsertAdminUser,
  type Blog,
  type InsertBlog,
  type CaseStudy,
  type InsertCaseStudy,
  type Guide,
  type InsertGuide,
} from "@shared/schema";
import { eq, desc } from "drizzle-orm";
import crypto from "node:crypto";
import bcrypt from "bcrypt";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // Original user methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  comparePassword(password: string, hash: string): Promise<boolean>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;

  // Admin user methods
  getAdminUserByEmail(email: string): Promise<AdminUser | undefined>;
  getAdminUserByGoogleId(googleId: string): Promise<AdminUser | undefined>;
  getAdminUserById(id: string): Promise<AdminUser | undefined>;
  createAdminUser(user: InsertAdminUser): Promise<AdminUser>;
  updateAdminUser(id: string, updates: Partial<AdminUser>): Promise<AdminUser>;

  // Blog methods
  getAllBlogs(publishedOnly?: boolean): Promise<Blog[]>;
  getBlogById(id: string): Promise<Blog | undefined>;
  getBlogBySlug(slug: string): Promise<Blog | undefined>;
  createBlog(blog: InsertBlog): Promise<Blog>;
  updateBlog(id: string, blog: Partial<InsertBlog>): Promise<Blog>;
  deleteBlog(id: string): Promise<void>;

  // Case Study methods
  getAllCaseStudies(publishedOnly?: boolean): Promise<CaseStudy[]>;
  getCaseStudyById(id: string): Promise<CaseStudy | undefined>;
  getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined>;
  createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy>;
  updateCaseStudy(id: string, caseStudy: Partial<InsertCaseStudy>): Promise<CaseStudy>;
  deleteCaseStudy(id: string): Promise<void>;

  // Guide methods
  getAllGuides(publishedOnly?: boolean): Promise<Guide[]>;
  getGuideById(id: string): Promise<Guide | undefined>;
  getGuideBySlug(slug: string): Promise<Guide | undefined>;
  createGuide(guide: InsertGuide): Promise<Guide>;
  updateGuide(id: string, guide: Partial<InsertGuide>): Promise<Guide>;
  deleteGuide(id: string): Promise<void>;
}

async function getDb() {
  // Lazy import to avoid throwing when DATABASE_URL is not set and DB isn't used
  const module = await import("./db");
  return module.db;
}

class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const db = await getDb();
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const db = await getDb();
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const db = await getDb();
    const hashedPassword = await bcrypt.hash(insertUser.password, 10);
    const result = await db.insert(users).values({ ...insertUser, password: hashedPassword }).returning();
    return result[0];
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const db = await getDb();
    const result = await db.insert(contactSubmissions).values(submission).returning();
    return result[0];
  }

  // Admin User methods
  async getAdminUserByEmail(email: string): Promise<AdminUser | undefined> {
    const db = await getDb();
    const result = await db.select().from(adminUsers).where(eq(adminUsers.email, email));
    return result[0];
  }

  async getAdminUserByGoogleId(googleId: string): Promise<AdminUser | undefined> {
    const db = await getDb();
    const result = await db.select().from(adminUsers).where(eq(adminUsers.googleId, googleId));
    return result[0];
  }

  async getAdminUserById(id: string): Promise<AdminUser | undefined> {
    const db = await getDb();
    const result = await db.select().from(adminUsers).where(eq(adminUsers.id, id));
    return result[0];
  }

  async createAdminUser(user: InsertAdminUser): Promise<AdminUser> {
    const db = await getDb();
    const result = await db.insert(adminUsers).values(user).returning();
    return result[0];
  }

  async updateAdminUser(id: string, updates: Partial<AdminUser>): Promise<AdminUser> {
    const db = await getDb();
    const result = await db.update(adminUsers)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(adminUsers.id, id))
      .returning();
    return result[0];
  }

  // Blog methods
  async getAllBlogs(publishedOnly = false): Promise<Blog[]> {
    const db = await getDb();
    let query = db.select().from(blogs).orderBy(desc(blogs.createdAt));

    if (publishedOnly) {
      const result = await db.select().from(blogs)
        .where(eq(blogs.isPublished, true))
        .orderBy(desc(blogs.publishedAt));
      return result;
    }

    return await query;
  }

  async getBlogById(id: string): Promise<Blog | undefined> {
    const db = await getDb();
    const result = await db.select().from(blogs).where(eq(blogs.id, id));
    return result[0];
  }

  async getBlogBySlug(slug: string): Promise<Blog | undefined> {
    const db = await getDb();
    const result = await db.select().from(blogs).where(eq(blogs.slug, slug));
    return result[0];
  }

  async createBlog(blog: InsertBlog): Promise<Blog> {
    const db = await getDb();
    const result = await db.insert(blogs).values(blog).returning();
    return result[0];
  }

  async updateBlog(id: string, blog: Partial<InsertBlog>): Promise<Blog> {
    const db = await getDb();
    const result = await db.update(blogs)
      .set({ ...blog, updatedAt: new Date() })
      .where(eq(blogs.id, id))
      .returning();
    return result[0];
  }

  async deleteBlog(id: string): Promise<void> {
    const db = await getDb();
    await db.delete(blogs).where(eq(blogs.id, id));
  }

  // Case Study methods
  async getAllCaseStudies(publishedOnly = false): Promise<CaseStudy[]> {
    const db = await getDb();
    let query = db.select().from(caseStudies).orderBy(desc(caseStudies.createdAt));

    if (publishedOnly) {
      const result = await db.select().from(caseStudies)
        .where(eq(caseStudies.isPublished, true))
        .orderBy(desc(caseStudies.publishedAt));
      return result;
    }

    return await query;
  }

  async getCaseStudyById(id: string): Promise<CaseStudy | undefined> {
    const db = await getDb();
    const result = await db.select().from(caseStudies).where(eq(caseStudies.id, id));
    return result[0];
  }

  async getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
    const db = await getDb();
    const result = await db.select().from(caseStudies).where(eq(caseStudies.slug, slug));
    return result[0];
  }

  async createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy> {
    const db = await getDb();
    const result = await db.insert(caseStudies).values(caseStudy).returning();
    return result[0];
  }

  async updateCaseStudy(id: string, caseStudy: Partial<InsertCaseStudy>): Promise<CaseStudy> {
    const db = await getDb();
    const result = await db.update(caseStudies)
      .set({ ...caseStudy, updatedAt: new Date() })
      .where(eq(caseStudies.id, id))
      .returning();
    return result[0];
  }

  async deleteCaseStudy(id: string): Promise<void> {
    const db = await getDb();
    await db.delete(caseStudies).where(eq(caseStudies.id, id));
  }

  // Guide methods
  async getAllGuides(publishedOnly = false): Promise<Guide[]> {
    const db = await getDb();
    let query = db.select().from(guides).orderBy(desc(guides.createdAt));

    if (publishedOnly) {
      const result = await db.select().from(guides)
        .where(eq(guides.isPublished, true))
        .orderBy(desc(guides.publishedAt));
      return result;
    }

    return await query;
  }

  async getGuideById(id: string): Promise<Guide | undefined> {
    const db = await getDb();
    const result = await db.select().from(guides).where(eq(guides.id, id));
    return result[0];
  }

  async getGuideBySlug(slug: string): Promise<Guide | undefined> {
    const db = await getDb();
    const result = await db.select().from(guides).where(eq(guides.slug, slug));
    return result[0];
  }

  async createGuide(guide: InsertGuide): Promise<Guide> {
    const db = await getDb();
    const result = await db.insert(guides).values(guide).returning();
    return result[0];
  }

  async updateGuide(id: string, guide: Partial<InsertGuide>): Promise<Guide> {
    const db = await getDb();
    const result = await db.update(guides)
      .set({ ...guide, updatedAt: new Date() })
      .where(eq(guides.id, id))
      .returning();
    return result[0];
  }

  async deleteGuide(id: string): Promise<void> {
    const db = await getDb();
    await db.delete(guides).where(eq(guides.id, id));
  }

}

class InMemoryStorage implements IStorage {
  private inMemoryUsers: User[] = [];
  private inMemoryContactSubmissions: ContactSubmission[] = [];
  private inMemoryAdminUsers: AdminUser[] = [];
  private inMemoryBlogs: Blog[] = [];
  private inMemoryCaseStudies: CaseStudy[] = [];
  private inMemoryGuides: Guide[] = [];

  async getUser(id: number): Promise<User | undefined> {
    return this.inMemoryUsers.find(u => u.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.inMemoryUsers.find(u => u.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const hashedPassword = await bcrypt.hash(insertUser.password, 10);
    const newUser: User = {
      id: this.inMemoryUsers.length + 1,
      username: insertUser.username,
      password: hashedPassword,
    } as User;
    this.inMemoryUsers.push(newUser);
    return newUser;
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const newSubmission: ContactSubmission = {
      id: crypto.randomUUID(),
      name: submission.name,
      email: submission.email,
      company: submission.company,
      phone: submission.phone ?? null,
      serviceInterest: submission.serviceInterest ?? null,
      companySize: submission.companySize ?? null,
      message: submission.message ?? null,
      status: "new",
      referrerPage: (submission as any).referrerPage ?? null,
      referrerUrl: (submission as any).referrerUrl ?? null,
      submittedAt: new Date() as any,
    } as ContactSubmission;
    this.inMemoryContactSubmissions.push(newSubmission);
    return newSubmission;
  }

  // Admin User methods
  async getAdminUserByEmail(email: string): Promise<AdminUser | undefined> {
    return this.inMemoryAdminUsers.find(u => u.email === email);
  }

  async getAdminUserByGoogleId(googleId: string): Promise<AdminUser | undefined> {
    return this.inMemoryAdminUsers.find(u => u.googleId === googleId);
  }

  async getAdminUserById(id: string): Promise<AdminUser | undefined> {
    return this.inMemoryAdminUsers.find(u => u.id === id);
  }

  async createAdminUser(user: InsertAdminUser): Promise<AdminUser> {
    const newUser: AdminUser = {
      id: crypto.randomUUID(),
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
      lastLoginAt: null,
    } as AdminUser;
    this.inMemoryAdminUsers.push(newUser);
    return newUser;
  }

  async updateAdminUser(id: string, updates: Partial<AdminUser>): Promise<AdminUser> {
    const index = this.inMemoryAdminUsers.findIndex(u => u.id === id);
    if (index === -1) throw new Error('Admin user not found');
    this.inMemoryAdminUsers[index] = {
      ...this.inMemoryAdminUsers[index],
      ...updates,
      updatedAt: new Date(),
    };
    return this.inMemoryAdminUsers[index];
  }

  // Blog methods
  async getAllBlogs(publishedOnly = false): Promise<Blog[]> {
    let blogs = this.inMemoryBlogs;
    if (publishedOnly) {
      blogs = blogs.filter(b => b.isPublished);
    }
    return blogs.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getBlogById(id: string): Promise<Blog | undefined> {
    return this.inMemoryBlogs.find(b => b.id === id);
  }

  async getBlogBySlug(slug: string): Promise<Blog | undefined> {
    return this.inMemoryBlogs.find(b => b.slug === slug);
  }

  async createBlog(blog: InsertBlog): Promise<Blog> {
    const newBlog: Blog = {
      id: crypto.randomUUID(),
      ...blog,
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: blog.isPublished ? new Date() : null,
    } as Blog;
    this.inMemoryBlogs.push(newBlog);
    return newBlog;
  }

  async updateBlog(id: string, blog: Partial<InsertBlog>): Promise<Blog> {
    const index = this.inMemoryBlogs.findIndex(b => b.id === id);
    if (index === -1) throw new Error('Blog not found');
    this.inMemoryBlogs[index] = {
      ...this.inMemoryBlogs[index],
      ...blog,
      updatedAt: new Date(),
    } as Blog;
    return this.inMemoryBlogs[index];
  }

  async deleteBlog(id: string): Promise<void> {
    const index = this.inMemoryBlogs.findIndex(b => b.id === id);
    if (index !== -1) {
      this.inMemoryBlogs.splice(index, 1);
    }
  }

  // Case Study methods
  async getAllCaseStudies(publishedOnly = false): Promise<CaseStudy[]> {
    let caseStudies = this.inMemoryCaseStudies;
    if (publishedOnly) {
      caseStudies = caseStudies.filter(cs => cs.isPublished);
    }
    return caseStudies.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getCaseStudyById(id: string): Promise<CaseStudy | undefined> {
    return this.inMemoryCaseStudies.find(cs => cs.id === id);
  }

  async getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
    return this.inMemoryCaseStudies.find(cs => cs.slug === slug);
  }

  async createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy> {
    const newCaseStudy: CaseStudy = {
      id: crypto.randomUUID(),
      ...caseStudy,
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: caseStudy.isPublished ? new Date() : null,
    } as CaseStudy;
    this.inMemoryCaseStudies.push(newCaseStudy);
    return newCaseStudy;
  }

  async updateCaseStudy(id: string, caseStudy: Partial<InsertCaseStudy>): Promise<CaseStudy> {
    const index = this.inMemoryCaseStudies.findIndex(cs => cs.id === id);
    if (index === -1) throw new Error('Case study not found');
    this.inMemoryCaseStudies[index] = {
      ...this.inMemoryCaseStudies[index],
      ...caseStudy,
      updatedAt: new Date(),
    } as CaseStudy;
    return this.inMemoryCaseStudies[index];
  }

  async deleteCaseStudy(id: string): Promise<void> {
    const index = this.inMemoryCaseStudies.findIndex(cs => cs.id === id);
    if (index !== -1) {
      this.inMemoryCaseStudies.splice(index, 1);
    }
  }

  // Guide methods
  async getAllGuides(publishedOnly = false): Promise<Guide[]> {
    let guides = this.inMemoryGuides;
    if (publishedOnly) {
      guides = guides.filter(g => g.isPublished);
    }
    return guides.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getGuideById(id: string): Promise<Guide | undefined> {
    return this.inMemoryGuides.find(g => g.id === id);
  }

  async getGuideBySlug(slug: string): Promise<Guide | undefined> {
    return this.inMemoryGuides.find(g => g.slug === slug);
  }

  async createGuide(guide: InsertGuide): Promise<Guide> {
    const newGuide: Guide = {
      id: crypto.randomUUID(),
      ...guide,
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: guide.isPublished ? new Date() : null,
    } as Guide;
    this.inMemoryGuides.push(newGuide);
    return newGuide;
  }

  async updateGuide(id: string, guide: Partial<InsertGuide>): Promise<Guide> {
    const index = this.inMemoryGuides.findIndex(g => g.id === id);
    if (index === -1) throw new Error('Guide not found');
    this.inMemoryGuides[index] = {
      ...this.inMemoryGuides[index],
      ...guide,
      updatedAt: new Date(),
    } as Guide;
    return this.inMemoryGuides[index];
  }

  async deleteGuide(id: string): Promise<void> {
    const index = this.inMemoryGuides.findIndex(g => g.id === id);
    if (index !== -1) {
      this.inMemoryGuides.splice(index, 1);
    }
  }

}

function createStorage(): IStorage {
  if (process.env.DATABASE_URL) {
    return new DatabaseStorage();
  }
  // eslint-disable-next-line no-console
  console.warn("DATABASE_URL not set. Using in-memory storage. Data will not persist.");
  return new InMemoryStorage();
}

export const storage: IStorage = createStorage();
