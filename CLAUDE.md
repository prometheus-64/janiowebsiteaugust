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
- Requires `DATABASE_URL` environment variable for PostgreSQL connection (Neon serverless database)
- Development and production both run on port 5000 (non-firewalled port requirement)

## Architecture Overview

### Full-Stack Structure
**Frontend**: React 18 + TypeScript with Vite build tool, located in `client/` directory  
**Backend**: Node.js Express server with TypeScript, located in `server/` directory  
**Shared**: Common schemas and types in `shared/` directory  
**Database**: PostgreSQL with Drizzle ORM and Neon serverless provider

### Key Design Patterns
**UI Components**: shadcn/ui component library with Radix UI primitives in `client/src/components/ui/`  
**Styling**: Tailwind CSS with custom Janio brand colors (primary: HSL 219 79% 27%, secondary: #00164e)  
**Data Flow**: TanStack Query for client state management, Zod validation throughout  
**Database Access**: Storage abstraction layer (`server/storage.ts`) with Drizzle ORM queries  

### Page Structure
Marketing pages follow consistent pattern: Hero section → Content blocks → CTAs  
All hero sections use brand gradient: `bg-gradient-to-br from-primary via-primary/90 to-secondary`  
Navigation uses dropdown menus for Solutions, Services, and Use Cases

## Database Schema

### Core Tables
**contactSubmissions**: Contact form submissions with referrer tracking  
**useCases**: CMS-managed case studies with JSON metrics, categories, and detailed content  
**users**: Basic authentication structure (for future admin features)

### Important Notes
- Use Cases store complex data as JSON strings (metrics, challenges, solutions)  
- API responses parse JSON fields client-side for proper TypeScript types  
- Use UUID primary keys for contact submissions and use cases  
- Drizzle migrations managed via `db:push` command

## API Endpoints

### Contact Management
- `POST /api/contact` - Submit contact form (validated with insertContactSubmissionSchema)  
- `GET /api/contact-submissions` - Admin: List all submissions  
- `PUT/DELETE /api/contact-submissions/:id` - Admin: Update/delete submissions

### Use Cases CMS
- `GET /api/use-cases` - Public: List all use cases with parsed JSON  
- `GET /api/use-cases/:id` - Public: Get by UUID or slug  
- `POST/PUT/DELETE /api/use-cases/:id` - Admin: Full CRUD operations

## File Structure Patterns

### Client Components
**Pages**: `client/src/pages/` - Main routes with subfolders for grouped pages  
**Shared Components**: `client/src/components/` - Reusable UI components  
**Assets**: `client/src/assets/` - Images and static files  
**Business Logic**: Custom hooks in `client/src/hooks/`

### Backend Organization
**Routes**: `server/routes.ts` - All API endpoint definitions  
**Storage**: `server/storage.ts` - Database abstraction layer  
**Server Entry**: `server/index.ts` - Express app setup with logging middleware

### Import Aliases
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

### Recent Platform Enhancements
- Live chat integration with professional styling  
- SEA coverage visualization (15+ countries)  
- Updated messaging focused on rate benchmarking and billing reconciliation  
- Use case CMS with dynamic metrics and category management  
- Admin dashboard with comprehensive content management

## Code Quality Standards

### TypeScript Configuration  
Strict mode enabled with path aliases for clean imports  
Shared types between frontend/backend via `shared/schema.ts`  
Zod validation schemas for runtime type safety

### Component Conventions  
Use shadcn/ui components with consistent Janio brand styling  
Prefer functional components with TypeScript props interfaces  
Follow "New York" style configuration for component library

### Database Best Practices
All database operations go through storage abstraction layer  
Use Drizzle ORM queries with proper error handling  
JSON fields require parsing/stringification for complex data structures