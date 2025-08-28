import { z } from "zod";

// Input sanitization and validation schema
const webhookDataSchema = z.object({
  // Required fields
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email format").max(255, "Email too long"),
  company: z.string().trim().min(1, "Company is required").max(200, "Company name too long"),
  
  // Optional fields with validation
  phone: z.string().trim().max(50, "Phone number too long").optional(),
  serviceInterest: z.string().trim().max(100, "Service interest too long").optional(),
  companySize: z.string().trim().max(50, "Company size too long").optional(),
  message: z.string().trim().max(2000, "Message too long").optional(),
  
  // Tracking fields
  referrerPage: z.string().trim().max(500, "Referrer page too long").optional(),
  referrerUrl: z.string().url("Invalid referrer URL").max(1000, "Referrer URL too long").optional(),
  ctaSourceUrl: z.string().trim().max(500, "CTA source URL too long").optional(),
  submissionTimestamp: z.string().datetime("Invalid timestamp format").optional(),
  userAgent: z.string().trim().max(1000, "User agent too long").optional(),
  
  // Server fields
  serverTimestamp: z.string().datetime().optional(),
  submissionId: z.string().uuid().optional(),
});

export type WebhookData = z.infer<typeof webhookDataSchema>;

interface WebhookConfig {
  url: string;
  username: string;
  password: string;
  timeout?: number;
}

class WebhookService {
  private config: WebhookConfig | null = null;
  
  configure(config: WebhookConfig) {
    // Validate webhook URL is HTTPS
    if (!config.url.startsWith('https://')) {
      throw new Error('Webhook URL must use HTTPS for security');
    }
    
    // Validate required fields
    if (!config.username || !config.password) {
      throw new Error('Username and password are required for webhook authentication');
    }
    
    this.config = {
      ...config,
      timeout: config.timeout || 10000, // Default 10 second timeout
    };
  }
  
  async send(rawData: any): Promise<{ success: boolean; error?: string }> {
    if (!this.config) {
      console.warn('Webhook not configured - skipping webhook delivery');
      return { success: false, error: 'Webhook not configured' };
    }
    
    try {
      // Validate and sanitize input data
      const validatedData = webhookDataSchema.parse({
        ...rawData,
        serverTimestamp: new Date().toISOString(),
      });
      
      // Create Basic Auth header
      const credentials = Buffer.from(`${this.config.username}:${this.config.password}`).toString('base64');
      
      // Send webhook request with better error handling
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.config.timeout!);
      
      const response = await fetch(this.config.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${credentials}`,
          'User-Agent': 'Janio-Webhook/1.0',
        },
        body: JSON.stringify(validatedData),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      console.log(`✅ Webhook delivered successfully to ${this.config.url}`);
      return { success: true };
      
    } catch (error) {
      let errorMessage = 'Unknown webhook error';
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          errorMessage = `Timeout after ${this.config.timeout}ms`;
        } else if (error.message.includes('fetch')) {
          errorMessage = `Network error: ${error.message}`;
        } else {
          errorMessage = error.message;
        }
      }
      
      console.error(`❌ Webhook delivery failed: ${errorMessage}`);
      return { success: false, error: errorMessage };
    }
  }
  
  isConfigured(): boolean {
    return this.config !== null;
  }
}

// Singleton instance
export const webhookService = new WebhookService();

// Utility function to safely sanitize strings
export function sanitizeString(input: any): string {
  if (typeof input !== 'string') {
    return String(input || '');
  }
  
  return input
    .trim()
    .replace(/[<>'"&]/g, '') // Remove potentially dangerous characters
    .substring(0, 2000); // Limit length
}

// Utility function to validate URL
export function isValidUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'https:' || parsedUrl.protocol === 'http:';
  } catch {
    return false;
  }
}