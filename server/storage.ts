import { users, contactSubmissions, useCases, type User, type InsertUser, type ContactSubmission, type InsertContactSubmission, type UseCase, type InsertUseCase, type UpdateUseCase } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

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

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const result = await db.insert(contactSubmissions).values(submission).returning();
    return result[0];
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions).orderBy(contactSubmissions.submittedAt);
  }

  async getContactSubmission(id: string): Promise<ContactSubmission | undefined> {
    const result = await db.select().from(contactSubmissions).where(eq(contactSubmissions.id, id));
    return result[0];
  }

  async updateContactSubmission(id: string, updateData: Partial<ContactSubmission>): Promise<ContactSubmission> {
    const result = await db.update(contactSubmissions).set(updateData).where(eq(contactSubmissions.id, id)).returning();
    return result[0];
  }

  async deleteContactSubmission(id: string): Promise<void> {
    await db.delete(contactSubmissions).where(eq(contactSubmissions.id, id));
  }

  async getUseCases(): Promise<UseCase[]> {
    return await db.select().from(useCases);
  }

  async getUseCase(id: string): Promise<UseCase | undefined> {
    const result = await db.select().from(useCases).where(eq(useCases.id, id));
    return result[0];
  }

  async getUseCaseBySlug(slug: string): Promise<UseCase | undefined> {
    const result = await db.select().from(useCases).where(eq(useCases.slug, slug));
    return result[0];
  }

  async createUseCase(insertUseCase: InsertUseCase): Promise<UseCase> {
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
    await db.delete(useCases).where(eq(useCases.id, id));
  }
}

export const storage = new DatabaseStorage();
