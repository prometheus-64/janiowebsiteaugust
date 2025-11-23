# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Basic Development
- `npm run dev` - Start development server on port 5000 (serves both frontend and backend)
- `npm run build` - Build for production (creates optimized React bundle + Express server)
- `npm run start` - Run production build
- `npm run check` - TypeScript type checking
- `npm run db:push` - Apply database schema changes via Drizzle

### Environment Setup
Required environment variables:
- `DATABASE_URL` - PostgreSQL connection string (Neon serverless database, optional - falls back to in-memory storage)
- `WEBHOOK_URL` - n8n webhook endpoint for contact form submissions (required for lead capture)
- `WEBHOOK_USERNAME` - Basic auth username for webhook
- `WEBHOOK_PASSWORD` - Basic auth password for webhook
- `WEBHOOK_TIMEOUT` - Timeout in milliseconds (default: 10000)
- `VITE_GA_MEASUREMENT_ID` - Google Analytics 4 measurement ID (optional)
- Development and production both run on port 5000 (configured for Railway deployment)

## Architecture Overview

### Full-Stack Structure
**Frontend**: React 18 + TypeScript with Vite build tool, located in `client/` directory
**Backend**: Node.js Express 5.x server with TypeScript, located in `server/` directory
**Shared**: Common schemas and types in `shared/` directory
**Database**: PostgreSQL with Drizzle ORM and Neon serverless provider (optional - has in-memory fallback)

### Key Design Patterns
**UI Components**: shadcn/ui component library with Radix UI primitives in `client/src/components/ui/`
**Styling**: Tailwind CSS 3.x with custom Janio brand colors (primary: HSL 219 79% 27%, secondary: #00164e)
**Data Flow**: TanStack Query for client state management, Zod validation throughout
**Database Access**: Storage abstraction layer (`server/storage.ts`) with Drizzle ORM queries and in-memory fallback
**Lead Capture**: Webhook-based integration with n8n (`server/webhook.ts`) - primary contact form handling
**Analytics**: Google Analytics 4 integration via AnalyticsTracker component

### Page Structure
Marketing pages follow consistent pattern: Hero section → Content blocks → CTAs
All hero sections use brand gradient: `bg-gradient-to-br from-primary via-primary/90 to-secondary`
Navigation uses dropdown menus for Solutions, Services, and Use Cases

### Build Optimization
Vite configured with manual code splitting:
- Core bundles: vendor (React), router, UI components, forms
- Lazy-loaded chunks: icons, motion, analytics
- Target: ES2020 with esbuild minification
- Source maps disabled in production

## Database Schema

### Core Tables (defined in `shared/schema.ts`)
**contactSubmissions**: Contact form submissions with comprehensive tracking
- UUID primary key with defaultRandom()
- Required fields: name, email, company
- Optional fields: phone, serviceInterest, companySize, message
- Tracking fields: referrerPage, referrerUrl, ctaSourceUrl, userAgent, submissionTimestamp
- Status field for lead management (default: 'new')
- Server timestamp: submittedAt (timestamptz with timezone)

**users**: Basic authentication structure (for future admin features)
- Serial primary key
- Username (unique) and hashed password fields
- Used with bcrypt for password hashing

### Storage Layer (`server/storage.ts`)
- Implements `IStorage` interface for all database operations
- **DatabaseStorage**: Production mode using Drizzle ORM with PostgreSQL
- **InMemoryStorage**: Development fallback when DATABASE_URL not set
- Automatic selection based on environment variables
- All operations return promises with proper TypeScript types

### Important Notes
- Database is OPTIONAL - app works with in-memory storage if DATABASE_URL not provided
- Contact form submissions primarily use webhook delivery (n8n), not database storage
- UUID primary keys for contact submissions
- Drizzle migrations managed via `db:push` command
- Lazy database loading to avoid errors when DB not configured

## API Endpoints

All routes defined in `server/routes.ts` with `/api` prefix.

### Contact Form Submission
**POST /api/contact** - Primary lead capture endpoint
- Validates required fields: name, email, company
- Sanitizes all input using `sanitizeString()` utility
- Email format validation with regex
- Sends data to n8n webhook with Basic Auth
- Returns 400 for validation errors, 500 for webhook failures
- Includes comprehensive tracking data (referrer, CTA source, user agent)
- Response: `{ success: boolean, message?: string, error?: string }`

### Webhook Management
**POST /api/webhook/configure** - Configure webhook settings (protected)
- Accepts: url, username, password, timeout
- Validates HTTPS-only URLs
- Updates webhook service configuration at runtime
- Returns configured URL (but not credentials)

**GET /api/webhook/status** - Check webhook configuration status
- Returns: configured status and environment variable presence
- Useful for debugging webhook issues
- Shows which env vars are set (without exposing values)

### Important Implementation Details
- Contact form does NOT save to database - webhook-only delivery
- All webhook operations handled by `webhookService` singleton (`server/webhook.ts`)
- Input sanitization removes `<>'"&` characters and limits length to 2000 chars
- Webhook timeout configurable (default 10 seconds)
- Comprehensive error logging with emoji indicators (✅❌⚠️)

## File Structure Patterns

### Client Components
**Pages**: `client/src/pages/` - Main routes with subfolders for grouped pages
- Root pages: Index.tsx, About.tsx, Contact.tsx, etc.
- `/services/*` - Service detail pages (ControlTower.tsx, MCPMS.tsx, InvoiceAudit.tsx, etc.)
- `/solutions/*` - Solution pages by persona (FinanceTeams.tsx, ProcurementTeams.tsx, etc.)
- `/use-cases/*` - Use case detail pages (EcommerceScaling.tsx, InternationalExpansion.tsx, etc.)
- `/resources/*` - Resource hub pages (Blogs.tsx, CaseStudies.tsx, Guides.tsx, etc.)

**Shared Components**: `client/src/components/` - Reusable UI components
- Navigation.tsx, Footer.tsx - Global layout components
- LeadCaptureForm.tsx - Contact form with webhook integration
- LiveChat.tsx, EnhancedChatbot.tsx - Customer support widgets
- AnalyticsTracker.tsx, NavigationTracker.tsx - GA4 integration
- PageSEO.tsx, SEO.tsx - Meta tags and SEO management
- OptimizedImage.tsx - Performance-optimized image loading
- SocialShare.tsx - Social sharing functionality

**UI Components**: `client/src/components/ui/` - shadcn/ui library (45+ components)
- Complete Radix UI integration (dialogs, dropdowns, forms, etc.)
- MediaModal.tsx - Custom modal for media display

**Assets**: `client/src/assets/` - Images and static files
- Hero images, dashboard screenshots, team photos
- Janio logo and brand assets

**Hooks**: `client/src/hooks/` - Custom React hooks
- use-toast.ts - Toast notification hook
- use-mobile.tsx - Mobile device detection
- usePageTracking.ts - Analytics page view tracking

### Backend Organization
**Routes**: `server/routes.ts` - All API endpoint definitions
**Storage**: `server/storage.ts` - Database abstraction layer with fallback
**Webhook**: `server/webhook.ts` - n8n webhook integration service
**Database**: `server/db.ts` - Drizzle ORM database connection
**Server Entry**: `server/index.ts` - Express app setup with logging middleware
**Vite Integration**: `server/vite.ts` - Development server configuration

### Import Aliases (configured in vite.config.ts and tsconfig.json)
- `@/` → `client/src/`
- `@shared/` → `shared/`
- `@assets/` → `attached_assets/`

## Business Context

### Target Market
Janio is a 4PL (Fourth-Party Logistics) provider specializing in Southeast Asia supply chain management. Platform serves as marketing website and lead generation tool.

### Key Audiences
**Ecommerce Brands**: Rate comparison, vendor onboarding, switching cost elimination
**Marketplaces**: Working with any partner combination, aggressive rate procurement
**Logistics Partners**: Capability expansion, new market entry, collaboration

### Core Services (organized by page structure)
**Solutions** (by persona):
- Finance Teams - Cost optimization and reconciliation
- Procurement Teams - Vendor management and rate benchmarking
- Operations Teams - Process automation and visibility
- Supply Chain Leaders - Strategic planning and network optimization

**Services** (by offering):
- Control Tower - Real-time visibility and monitoring
- MCPMS (Multi-Carrier Parcel Management System) - Carrier integration
- Invoice Audit - Billing reconciliation and dispute management
- Transportation Procurement - Rate negotiation and optimization
- Logistics as a Service - Fully managed logistics operations

**Use Cases** (by scenario):
- Ecommerce Scaling, International Expansion, Peak Season Management
- Digitization, Marketplace Unification
- Industry-specific: Fashion, Luxury, Retail, Entertainment

### Platform Features
- Webhook-based lead capture with n8n integration
- Google Analytics 4 event tracking and page view monitoring
- Live chat widget for customer support
- SEO optimization with react-helmet-async
- Social sharing capabilities
- Mobile-responsive design with Tailwind CSS
- Performance monitoring and optimized image loading

## Code Quality Standards

### TypeScript Configuration
- Strict mode enabled with comprehensive type checking
- Path aliases for clean imports (`@/`, `@shared/`, `@assets/`)
- Shared types between frontend/backend via `shared/schema.ts`
- Zod validation schemas for runtime type safety
- Module resolution: bundler mode with ESNext
- JSX preserve mode for React components
- Target: ES2020 for modern JavaScript features

### Component Conventions
- Use shadcn/ui components with consistent Janio brand styling
- Prefer functional components with TypeScript props interfaces
- Follow "New York" style configuration for component library
- Leverage Radix UI primitives for accessible components
- Use Framer Motion for animations (code-split into separate chunk)
- Implement proper SEO with react-helmet-async

### Database Best Practices
- All database operations go through storage abstraction layer (`IStorage` interface)
- Use Drizzle ORM queries with proper error handling
- Support both PostgreSQL and in-memory storage modes
- Lazy database initialization to handle missing DATABASE_URL
- UUID primary keys for distributed systems compatibility
- Timestamp fields with timezone support

### Security Best Practices
- Input sanitization on all user-provided data (`sanitizeString()` utility)
- HTTPS-only webhook URLs enforced
- Basic Auth for webhook authentication
- Password hashing with bcrypt (10 rounds)
- Email validation with regex patterns
- Length limits on all string inputs (2000 chars max)
- Special character stripping to prevent XSS (`<>'"&` removed)

### Performance Optimization
- Manual chunk splitting in Vite build (vendor, router, UI, forms, icons, utils, analytics, motion)
- esbuild minification for fast builds
- CSS minification enabled
- Source maps disabled in production
- Image optimization with OptimizedImage component
- Analytics and heavy dependencies lazy-loaded

## Deployment

### Railway Configuration
- Configured for Railway deployment (see `RAILWAY_DEPLOYMENT.md`)
- Environment variables managed through Railway dashboard or CLI
- Node.js version: >=20.19.0 (specified in package.json engines)
- Port 5000 (non-firewalled requirement)
- Build command: `npm run build`
- Start command: `npm run start`

### Required Environment Variables for Production
```bash
DATABASE_URL=postgresql://...          # Optional - uses in-memory if not set
WEBHOOK_URL=https://...                # Required for contact form
WEBHOOK_USERNAME=...                   # Required for contact form
WEBHOOK_PASSWORD=...                   # Required for contact form
WEBHOOK_TIMEOUT=10000                  # Optional - defaults to 10000ms
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX   # Optional - for analytics
```

### Deployment Checklist
- Set webhook environment variables in Railway
- Verify n8n workflow is active and webhook URL is accessible
- Test contact form submission on live site
- Check Railway logs for webhook configuration messages
- Monitor webhook delivery success/failure logs

## Additional Documentation

Related documentation files in repository:
- `RAILWAY_DEPLOYMENT.md` - Complete Railway deployment and webhook setup guide
- `WEBHOOK_SETUP.md` - Detailed webhook configuration instructions
- `ANALYTICS_SETUP.md` - Google Analytics 4 integration guide
- `MEDIA_STANDARDS.md` - Image and media optimization guidelines
- `BUTTON_AUDIT_REPORT.md` - UI component audit and standards
- `.env.example` - Template for environment variables