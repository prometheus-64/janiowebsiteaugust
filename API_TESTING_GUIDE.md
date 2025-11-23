# CMS API Testing Guide

## Setup Instructions

### 1. Push Database Schema

Apply the new database tables to your Neon database:

```bash
npm run db:push
```

This will create:
- `admin_users` - Admin authentication with Google OAuth & MFA
- `blogs` - Blog posts with SEO fields
- `case_studies` - Client case studies with metrics
- `guides` - Educational guides with difficulty levels

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and update:

```bash
cp .env.example .env
```

**Required for Authentication:**
```env
# Google OAuth (create at https://console.cloud.google.com/apis/credentials)
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback

# Session Security
SESSION_SECRET=generate-a-random-secret-here

# Database (should already be set)
DATABASE_URL=your-neon-connection-string
```

**For Google OAuth Setup:**
1. Go to https://console.cloud.google.com/apis/credentials
2. Create OAuth 2.0 Client ID
3. Add authorized redirect URI: `http://localhost:5000/api/auth/google/callback`
4. Copy Client ID and Secret to `.env`

### 3. Start Development Server

```bash
npm run dev
```

Server will run on http://localhost:5000

## Testing Authentication Flow

### Step 1: Check Auth Status (Unauthenticated)

```bash
curl http://localhost:5000/api/auth/status
```

Expected Response:
```json
{"authenticated": false}
```

### Step 2: Initiate Google Login

Open in browser:
```
http://localhost:5000/api/auth/google
```

This will:
1. Redirect to Google for authentication
2. Create admin user if first time
3. Redirect to `/admin/mfa-verify` if MFA enabled
4. Otherwise redirect to `/admin/dashboard`

### Step 3: Check Auth Status (Authenticated)

After logging in:
```bash
curl http://localhost:5000/api/auth/status \
  --cookie-jar cookies.txt --cookie cookies.txt
```

Expected Response:
```json
{
  "authenticated": true,
  "mfaRequired": false,
  "user": {
    "id": "uuid",
    "email": "you@example.com",
    "name": "Your Name",
    "profilePicture": "https://...",
    "mfaEnabled": false
  }
}
```

## Testing MFA Setup

### Step 1: Generate MFA Secret

```bash
curl -X POST http://localhost:5000/api/auth/mfa/setup \
  --cookie-jar cookies.txt --cookie cookies.txt
```

Expected Response:
```json
{
  "secret": "BASE32SECRET",
  "qrCode": "data:image/png;base64,...",
  "email": "you@example.com"
}
```

Save the QR code to scan with Google Authenticator/Authy.

### Step 2: Enable MFA

Get a token from your authenticator app, then:

```bash
curl -X POST http://localhost:5000/api/auth/mfa/enable \
  -H "Content-Type: application/json" \
  -d '{"token":"123456"}' \
  --cookie-jar cookies.txt --cookie cookies.txt
```

Expected Response:
```json
{"success": true, "message": "MFA enabled successfully"}
```

### Step 3: Verify MFA During Login

After enabling MFA, subsequent logins require token verification:

```bash
curl -X POST http://localhost:5000/api/auth/mfa/verify \
  -H "Content-Type: application/json" \
  -d '{"token":"123456"}' \
  --cookie-jar cookies.txt --cookie cookies.txt
```

## Testing Blog Endpoints

### Create Blog (Authenticated Required)

```bash
curl -X POST http://localhost:5000/api/blogs \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Blog Post",
    "slug": "my-first-blog-post",
    "excerpt": "This is a test blog post",
    "content": "# Hello World\n\nThis is the full content of my blog post.",
    "category": "Technology",
    "tags": "[\"tech\", \"logistics\", \"supply-chain\"]",
    "isPublished": true,
    "metaTitle": "My First Blog Post - Janio",
    "metaDescription": "A test blog post about logistics technology"
  }' \
  --cookie-jar cookies.txt --cookie cookies.txt
```

Expected Response:
```json
{
  "id": "uuid",
  "title": "My First Blog Post",
  "slug": "my-first-blog-post",
  "isPublished": true,
  "createdAt": "2025-11-23T...",
  ...
}
```

### Get All Blogs (Public)

```bash
curl http://localhost:5000/api/blogs
```

Returns only published blogs.

### Get All Blogs (Admin)

```bash
curl http://localhost:5000/api/blogs \
  --cookie-jar cookies.txt --cookie cookies.txt
```

Returns all blogs (published and drafts).

### Get Blog by Slug

```bash
curl http://localhost:5000/api/blogs/my-first-blog-post
```

### Update Blog

```bash
curl -X PUT http://localhost:5000/api/blogs/{blog-id} \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Blog Title",
    "content": "Updated content"
  }' \
  --cookie-jar cookies.txt --cookie cookies.txt
```

### Delete Blog

```bash
curl -X DELETE http://localhost:5000/api/blogs/{blog-id} \
  --cookie-jar cookies.txt --cookie cookies.txt
```

## Testing Case Study Endpoints

### Create Case Study

```bash
curl -X POST http://localhost:5000/api/case-studies \
  -H "Content-Type: application/json" \
  -d '{
    "title": "How Brand X Reduced Logistics Costs by 35%",
    "slug": "brand-x-cost-reduction",
    "clientName": "Brand X",
    "industry": "E-commerce",
    "excerpt": "Brand X achieved 35% cost reduction",
    "challenge": "High logistics costs and poor visibility",
    "solution": "Implemented Janio MCPMS platform",
    "results": "35% cost reduction, 50% faster delivery",
    "metrics": "{\"costReduction\": \"35%\", \"deliverySpeed\": \"50% faster\"}",
    "testimonial": "Janio transformed our logistics",
    "testimonialAuthor": "John Doe",
    "testimonialRole": "VP of Operations",
    "tags": "[\"cost-reduction\", \"ecommerce\"]",
    "isPublished": true
  }' \
  --cookie-jar cookies.txt --cookie cookies.txt
```

### Get All Case Studies

```bash
curl http://localhost:5000/api/case-studies
```

### Get Case Study by Slug

```bash
curl http://localhost:5000/api/case-studies/brand-x-cost-reduction
```

## Testing Guide Endpoints

### Create Guide

```bash
curl -X POST http://localhost:5000/api/guides \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Complete Guide to Supply Chain Optimization",
    "slug": "supply-chain-optimization-guide",
    "excerpt": "Learn how to optimize your supply chain",
    "content": "# Introduction\n\nComplete guide content here...",
    "category": "Supply Chain",
    "difficulty": "intermediate",
    "readTime": 15,
    "tags": "[\"supply-chain\", \"optimization\"]",
    "isPublished": true
  }' \
  --cookie-jar cookies.txt --cookie cookies.txt
```

### Get All Guides

```bash
curl http://localhost:5000/api/guides
```

### Get Guide by Slug

```bash
curl http://localhost:5000/api/guides/supply-chain-optimization-guide
```

## Testing Checklist

- [ ] Database schema pushed successfully (`npm run db:push`)
- [ ] Environment variables configured
- [ ] Server starts without errors
- [ ] Can check auth status (unauthenticated)
- [ ] Google OAuth login works
- [ ] Admin user created in database
- [ ] Can check auth status (authenticated)
- [ ] MFA setup generates QR code
- [ ] MFA can be enabled with valid token
- [ ] MFA verification works during login
- [ ] Can create blog post
- [ ] Can view published blogs (public)
- [ ] Can view all blogs (admin)
- [ ] Can update blog post
- [ ] Can delete blog post
- [ ] Can create case study
- [ ] Can view case studies
- [ ] Can create guide
- [ ] Can view guides
- [ ] Logout works properly

## Common Issues

### "Webhook not configured" Error
This is expected if you haven't set webhook environment variables. The CMS will still work fine - webhooks are only for contact form submissions.

### "Database connection failed"
Ensure `DATABASE_URL` is set correctly in `.env` file. The system will fall back to in-memory storage if not set.

### "Google OAuth failed"
1. Check `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` are correct
2. Verify redirect URI in Google Console matches exactly
3. Ensure authorized JavaScript origins includes `http://localhost:5000`

### 401 Unauthorized on protected routes
You need to be authenticated. Use `--cookie-jar cookies.txt --cookie cookies.txt` with curl to maintain session.

### MFA required error
If MFA is enabled, you must verify the token with `/api/auth/mfa/verify` before accessing protected routes.

## Next Steps

Once all API endpoints are tested and working:

1. **Build Admin UI**: Create React pages for login, dashboard, and content management
2. **Update Public Pages**: Connect Resources pages to fetch from API
3. **Add Rich Text Editor**: Integrate editor for blog/guide content
4. **Image Upload**: Add image upload functionality for featured images
5. **Deploy**: Set up production environment variables and deploy

## Database Inspection

To inspect the database directly:

```sql
-- View admin users
SELECT id, email, name, mfa_enabled, is_active FROM admin_users;

-- View blogs
SELECT id, title, slug, is_published, created_at FROM blogs;

-- View case studies
SELECT id, title, client_name, industry, is_published FROM case_studies;

-- View guides
SELECT id, title, difficulty, read_time, is_published FROM guides;
```

You can run these queries in your Neon dashboard SQL editor.
