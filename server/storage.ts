import { users, contactSubmissions, type User, type InsertUser, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";
import { eq } from "drizzle-orm";
import crypto from "node:crypto";
import bcrypt from "bcrypt";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  comparePassword(password: string, hash: string): Promise<boolean>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
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
