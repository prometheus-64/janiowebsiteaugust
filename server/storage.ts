import { users, contactSubmissions, type User, type InsertUser, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";
import { eq } from "drizzle-orm";
import crypto from "node:crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  getContactSubmission(id: string): Promise<ContactSubmission | undefined>;
  updateContactSubmission(id: string, submission: Partial<ContactSubmission>): Promise<ContactSubmission>;
  deleteContactSubmission(id: string): Promise<void>;
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
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const db = await getDb();
    const result = await db.insert(contactSubmissions).values(submission).returning();
    return result[0];
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    const db = await getDb();
    return await db.select().from(contactSubmissions).orderBy(contactSubmissions.submittedAt);
  }

  async getContactSubmission(id: string): Promise<ContactSubmission | undefined> {
    const db = await getDb();
    const result = await db.select().from(contactSubmissions).where(eq(contactSubmissions.id, id));
    return result[0];
  }

  async updateContactSubmission(id: string, updateData: Partial<ContactSubmission>): Promise<ContactSubmission> {
    const db = await getDb();
    const result = await db.update(contactSubmissions).set(updateData).where(eq(contactSubmissions.id, id)).returning();
    return result[0];
  }

  async deleteContactSubmission(id: string): Promise<void> {
    const db = await getDb();
    await db.delete(contactSubmissions).where(eq(contactSubmissions.id, id));
  }

}

class InMemoryStorage implements IStorage {
  private inMemoryUsers: User[] = [];
  private inMemoryContactSubmissions: ContactSubmission[] = [];

  async getUser(id: number): Promise<User | undefined> {
    return this.inMemoryUsers.find(u => u.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.inMemoryUsers.find(u => u.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const newUser: User = {
      id: this.inMemoryUsers.length + 1,
      username: insertUser.username,
      password: insertUser.password,
    } as User;
    this.inMemoryUsers.push(newUser);
    return newUser;
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

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    // Return ordered by submittedAt ascending to mirror DB behavior
    return [...this.inMemoryContactSubmissions].sort((a, b) =>
      new Date(a.submittedAt as any).getTime() - new Date(b.submittedAt as any).getTime(),
    );
  }

  async getContactSubmission(id: string): Promise<ContactSubmission | undefined> {
    return this.inMemoryContactSubmissions.find(s => s.id === id);
  }

  async updateContactSubmission(id: string, updateData: Partial<ContactSubmission>): Promise<ContactSubmission> {
    const idx = this.inMemoryContactSubmissions.findIndex(s => s.id === id);
    if (idx === -1) throw new Error("Contact submission not found");
    this.inMemoryContactSubmissions[idx] = { ...this.inMemoryContactSubmissions[idx], ...updateData } as ContactSubmission;
    return this.inMemoryContactSubmissions[idx];
  }

  async deleteContactSubmission(id: string): Promise<void> {
    this.inMemoryContactSubmissions = this.inMemoryContactSubmissions.filter(s => s.id !== id);
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
