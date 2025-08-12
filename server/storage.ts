import { users, contactSubmissions, useCases, type User, type InsertUser, type ContactSubmission, type InsertContactSubmission, type UseCase, type InsertUseCase, type UpdateUseCase } from "@shared/schema";
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
  // Use Cases CRUD
  getUseCases(): Promise<UseCase[]>;
  getUseCase(id: string): Promise<UseCase | undefined>;
  getUseCaseBySlug(slug: string): Promise<UseCase | undefined>;
  createUseCase(useCase: InsertUseCase): Promise<UseCase>;
  updateUseCase(id: string, useCase: UpdateUseCase): Promise<UseCase>;
  deleteUseCase(id: string): Promise<void>;
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

  async getUseCases(): Promise<UseCase[]> {
    const db = await getDb();
    return await db.select().from(useCases);
  }

  async getUseCase(id: string): Promise<UseCase | undefined> {
    const db = await getDb();
    const result = await db.select().from(useCases).where(eq(useCases.id, id));
    return result[0];
  }

  async getUseCaseBySlug(slug: string): Promise<UseCase | undefined> {
    const db = await getDb();
    const result = await db.select().from(useCases).where(eq(useCases.slug, slug));
    return result[0];
  }

  async createUseCase(insertUseCase: InsertUseCase): Promise<UseCase> {
    const db = await getDb();
    const useCaseData = {
      ...insertUseCase,
      metrics: JSON.stringify(insertUseCase.metrics),
      challenges: insertUseCase.challenges ? JSON.stringify(insertUseCase.challenges) : null,
      solutions: insertUseCase.solutions ? JSON.stringify(insertUseCase.solutions) : null,
      detailedMetrics: insertUseCase.detailedMetrics ? JSON.stringify(insertUseCase.detailedMetrics) : null,
    };
    const result = await db.insert(useCases).values(useCaseData).returning();
    return result[0];
  }

  async updateUseCase(id: string, updateUseCase: UpdateUseCase): Promise<UseCase> {
    const db = await getDb();
    const updateData: any = {
      ...updateUseCase,
      updatedAt: new Date(),
    };
    
    // Handle JSON serialization for complex fields
    if (updateUseCase.metrics) {
      updateData.metrics = JSON.stringify(updateUseCase.metrics);
    }
    if (updateUseCase.challenges) {
      updateData.challenges = JSON.stringify(updateUseCase.challenges);
    }
    if (updateUseCase.solutions) {
      updateData.solutions = JSON.stringify(updateUseCase.solutions);
    }
    if (updateUseCase.detailedMetrics) {
      updateData.detailedMetrics = JSON.stringify(updateUseCase.detailedMetrics);
    }
    
    const result = await db.update(useCases).set(updateData).where(eq(useCases.id, id)).returning();
    return result[0];
  }

  async deleteUseCase(id: string): Promise<void> {
    const db = await getDb();
    await db.delete(useCases).where(eq(useCases.id, id));
  }
}

class InMemoryStorage implements IStorage {
  private inMemoryUsers: User[] = [];
  private inMemoryContactSubmissions: ContactSubmission[] = [];
  private inMemoryUseCases: UseCase[] = [];

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

  async getUseCases(): Promise<UseCase[]> {
    return this.inMemoryUseCases;
  }

  async getUseCase(id: string): Promise<UseCase | undefined> {
    return this.inMemoryUseCases.find(u => u.id === id);
  }

  async getUseCaseBySlug(slug: string): Promise<UseCase | undefined> {
    return this.inMemoryUseCases.find(u => u.slug === slug);
  }

  async createUseCase(insertUseCase: InsertUseCase): Promise<UseCase> {
    const newUseCase: UseCase = {
      id: crypto.randomUUID(),
      title: insertUseCase.title,
      category: insertUseCase.category,
      industry: insertUseCase.industry,
      challenge: insertUseCase.challenge,
      result: insertUseCase.result,
      tags: (insertUseCase.tags as unknown as string[]) ?? [],
      href: insertUseCase.href,
      metrics: JSON.stringify(insertUseCase.metrics),
      heroSubtitle: (insertUseCase as any).heroSubtitle ?? null,
      heroDescription: (insertUseCase as any).heroDescription ?? null,
      challengeDescription: (insertUseCase as any).challengeDescription ?? null,
      challenges: (insertUseCase as any).challenges ? JSON.stringify((insertUseCase as any).challenges) : null,
      solutions: (insertUseCase as any).solutions ? JSON.stringify((insertUseCase as any).solutions) : null,
      detailedMetrics: (insertUseCase as any).detailedMetrics ? JSON.stringify((insertUseCase as any).detailedMetrics) : null,
      additionalContent: (insertUseCase as any).additionalContent ?? null,
      slug: (insertUseCase as any).slug ?? null,
      showDetailedPage: (insertUseCase as any).showDetailedPage ?? false,
      createdAt: new Date() as any,
      updatedAt: new Date() as any,
    } as UseCase;
    this.inMemoryUseCases.push(newUseCase);
    return newUseCase;
  }

  async updateUseCase(id: string, updateUseCase: UpdateUseCase): Promise<UseCase> {
    const idx = this.inMemoryUseCases.findIndex(u => u.id === id);
    if (idx === -1) throw new Error("Use case not found");

    const updated: Partial<UseCase> = {
      ...updateUseCase as any,
      updatedAt: new Date() as any,
    };

    if ((updateUseCase as any).metrics) {
      (updated as any).metrics = JSON.stringify((updateUseCase as any).metrics);
    }
    if ((updateUseCase as any).challenges) {
      (updated as any).challenges = JSON.stringify((updateUseCase as any).challenges);
    }
    if ((updateUseCase as any).solutions) {
      (updated as any).solutions = JSON.stringify((updateUseCase as any).solutions);
    }
    if ((updateUseCase as any).detailedMetrics) {
      (updated as any).detailedMetrics = JSON.stringify((updateUseCase as any).detailedMetrics);
    }

    this.inMemoryUseCases[idx] = { ...this.inMemoryUseCases[idx], ...(updated as UseCase) } as UseCase;
    return this.inMemoryUseCases[idx];
  }

  async deleteUseCase(id: string): Promise<void> {
    this.inMemoryUseCases = this.inMemoryUseCases.filter(u => u.id !== id);
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
