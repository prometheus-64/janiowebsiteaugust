# Lead Capture Webhook Integration

This document describes the secure lead capture workflow that sends form submissions to external webhook endpoints with Basic Authentication.

## Features

✅ **Secure Data Transmission**: All webhook requests use HTTPS with Basic Authentication  
✅ **Enhanced Tracking**: Captures CTA source page, referrer data, and user agent  
✅ **Input Validation**: All data is sanitized and validated before transmission  
✅ **Non-blocking Delivery**: Webhook requests don't block form submission responses  
✅ **Error Handling**: Comprehensive error logging and graceful failure handling  

## Data Captured

The webhook receives a JSON payload with the following data:

### Lead Information
- `name`: Contact's full name (required, max 100 chars)
- `email`: Contact's email address (required, validated format)
- `company`: Company name (required, max 200 chars)
- `phone`: Phone number (optional, max 50 chars)

### Service Details
- `serviceInterest`: Selected service interest (optional)
- `companySize`: Monthly logistics spend category (optional)
- `message`: Custom message from lead (optional, max 2000 chars)

### Tracking Data
- `ctaSourceUrl`: Exact page where CTA was clicked
- `referrerPage`: Previous page in user journey
- `referrerUrl`: Full URL with parameters
- `userAgent`: Browser/device information

### Metadata
- `submissionId`: Unique UUID for this submission
- `submissionTimestamp`: Client-side timestamp (ISO format)
- `serverTimestamp`: Server-side timestamp (ISO format)

## Setup Instructions

### 1. Configure Webhook Endpoint

Run the configuration script:

```bash
node webhook-config.js
```

Or use environment variables:

```bash
WEBHOOK_URL=https://your-endpoint.com/webhook \
WEBHOOK_USERNAME=your-username \
WEBHOOK_PASSWORD=your-password \
node webhook-config.js
```

### 2. API Endpoints

**Configure Webhook:**
```http
POST /api/webhook/configure
Content-Type: application/json

{
  "url": "https://your-endpoint.com/webhook",
  "username": "your-username", 
  "password": "your-password",
  "timeout": 10000
}
```

**Check Status:**
```http
GET /api/webhook/status
```

### 3. Webhook Request Format

Your webhook endpoint will receive POST requests with:

**Headers:**
```
Content-Type: application/json
Authorization: Basic <base64-encoded-credentials>
User-Agent: Janio-Webhook/1.0
```

**Example Payload:**
```json
{
  "name": "John Smith",
  "email": "john.smith@company.com",
  "company": "Acme Corporation",
  "phone": "+1-555-0123",
  "serviceInterest": "logistics-outsourcing",
  "companySize": "1M-5M",
  "message": "Interested in reducing shipping costs",
  "ctaSourceUrl": "/solutions/ecommerce-brands",
  "referrerPage": "/",
  "referrerUrl": "https://janio.com/solutions/ecommerce-brands?utm_source=google",
  "userAgent": "Mozilla/5.0...",
  "submissionId": "550e8400-e29b-41d4-a716-446655440000",
  "submissionTimestamp": "2024-01-15T10:30:00.000Z",
  "serverTimestamp": "2024-01-15T10:30:01.123Z"
}
```

## Security Features

### HTTPS Only
- Webhook URLs must use HTTPS
- Self-signed certificates are rejected
- TLS 1.2+ required

### Basic Authentication
- Username/password sent in Authorization header
- Credentials are base64 encoded
- No credentials stored in logs or client-side code

### Input Sanitization
- All string fields are trimmed and length-limited
- HTML/script tags are stripped
- Email addresses are validated
- URLs are validated for proper format

### Request Timeouts
- Default 10-second timeout
- Configurable per webhook
- Prevents hanging connections

## Error Handling

### Webhook Failures
- Failed webhooks are logged but don't block form submission
- HTTP errors, network failures, and timeouts are handled gracefully
- Consider implementing retry logic or dead letter queues for production

### Validation Errors
- Invalid webhook URLs are rejected during configuration
- Malformed data is sanitized before sending
- Schema validation prevents bad data transmission

## Monitoring & Debugging

### Server Logs
- Successful webhook deliveries are logged
- Failed attempts include error details
- Configuration changes are logged

### Status Endpoint
Check webhook configuration status:
```bash
curl http://localhost:5000/api/webhook/status
```

## CTA Source Tracking

### Automatic Tracking
The system automatically captures the source page when users click CTAs leading to the contact form.

### Manual Implementation
For custom CTA buttons, use the provided components:

```jsx
import { CTALink, CTAButton } from '@/components/CTALink';

// For Link components
<CTALink to="/contact" className="btn-primary">
  Get Started
</CTALink>

// For button components
<CTAButton targetPage="/contact" onClick={handleCustomClick}>
  Contact Us
</CTAButton>
```

## Production Considerations

### Security
- Use strong, unique credentials for each webhook
- Implement webhook signature verification for additional security
- Consider rate limiting on webhook configuration endpoints
- Add authentication to webhook configuration endpoints

### Reliability
- Implement retry logic with exponential backoff
- Use dead letter queues for failed deliveries
- Monitor webhook endpoint availability
- Set up alerting for failed deliveries

### Performance
- Webhook requests are non-blocking by default
- Consider webhook request batching for high volume
- Implement circuit breaker pattern for unreliable endpoints

### Compliance
- Ensure webhook endpoints comply with data privacy regulations
- Document data retention policies
- Implement data encryption at rest if storing webhook data

## Troubleshooting

### Common Issues

**Webhook not receiving data:**
- Check webhook configuration with `/api/webhook/status`
- Verify HTTPS certificate is valid
- Check webhook endpoint logs for incoming requests

**Authentication failures:**
- Verify username/password are correct
- Check Basic Auth header format
- Ensure credentials don't contain special characters

**Data validation errors:**
- Check server logs for validation failures
- Verify all required fields are present
- Ensure field lengths don't exceed limits

### Testing

Test webhook delivery with a simple webhook endpoint:
```bash
# Using webhook.site for testing
curl -X POST https://your-endpoint.com/webhook \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic $(echo -n 'username:password' | base64)" \
  -d '{"test": "data"}'
```

## Support

For technical issues or questions about the webhook integration:
1. Check server logs for error details
2. Verify webhook endpoint is accessible and returns 2xx status codes
3. Test webhook configuration using the provided scripts
4. Review this documentation for setup requirements