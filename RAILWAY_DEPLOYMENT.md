# Railway Deployment Guide

## Environment Variables for Webhook Integration

To properly configure the webhook integration on Railway, you need to set the following environment variables in your Railway project settings:

### Required Environment Variables

```bash
WEBHOOK_URL=https://janio.app.n8n.cloud/webhook/ddf4a9ce-40ef-462c-8264-c582a28e3ae2
WEBHOOK_USERNAME=janiowebsiteleadform
WEBHOOK_PASSWORD=kyNpen-wijmy0-cibhug
WEBHOOK_TIMEOUT=10000
```

## Setting Environment Variables on Railway

### Method 1: Railway Dashboard
1. Go to your Railway project dashboard
2. Click on your service
3. Navigate to the "Variables" tab
4. Add each environment variable:
   - `WEBHOOK_URL`: `https://janio.app.n8n.cloud/webhook/ddf4a9ce-40ef-462c-8264-c582a28e3ae2`
   - `WEBHOOK_USERNAME`: `janiowebsiteleadform`
   - `WEBHOOK_PASSWORD`: `kyNpen-wijmy0-cibhug`
   - `WEBHOOK_TIMEOUT`: `10000`

### Method 2: Railway CLI
```bash
railway variables set WEBHOOK_URL=https://janio.app.n8n.cloud/webhook/ddf4a9ce-40ef-462c-8264-c582a28e3ae2
railway variables set WEBHOOK_USERNAME=janiowebsiteleadform
railway variables set WEBHOOK_PASSWORD=kyNpen-wijmy0-cibhug
railway variables set WEBHOOK_TIMEOUT=10000
```

## Troubleshooting Form Submission Issues

### Common Issues & Solutions

1. **Form shows "Something went wrong" error**
   - **Cause**: Webhook configuration missing or invalid
   - **Solution**: Ensure all environment variables are set in Railway
   - **Check**: Look at Railway deployment logs for webhook configuration messages

2. **Form submits but webhook doesn't receive data**
   - **Cause**: n8n webhook not active or URL incorrect
   - **Solution**: Verify n8n workflow is active and webhook URL is correct
   - **Test**: Use the manual curl test from the webhook documentation

3. **Network timeout errors**
   - **Cause**: Railway network restrictions or n8n endpoint down
   - **Solution**: Check webhook timeout settings (default 10 seconds)
   - **Monitor**: Railway logs for webhook delivery status

### Debugging Steps

1. **Check Railway Logs**
   ```bash
   railway logs --follow
   ```

2. **Look for these log messages**:
   - `✅ Webhook configured successfully on server start`
   - `⚠️ Webhook not configured - missing environment variables`
   - `Webhook sent successfully to...`
   - `Webhook delivery failed:...`

3. **Test webhook manually**:
   ```bash
   curl -X POST "https://your-railway-app.railway.app/api/webhook/status"
   ```

## Deployment Checklist

- [ ] Environment variables set in Railway dashboard
- [ ] n8n workflow is active and webhook is accessible
- [ ] Railway service is deployed and running
- [ ] Test form submission on live site
- [ ] Check Railway logs for webhook status messages
- [ ] Verify webhook receives test data in n8n

## Environment Variable Security

- Environment variables are automatically encrypted in Railway
- Webhook credentials are not exposed in client-side code
- Basic Auth headers are properly encoded
- All webhook requests use HTTPS only

## Alternative Configuration

If environment variables don't work, you can also configure the webhook via API after deployment:

```bash
curl -X POST "https://your-railway-app.railway.app/api/webhook/configure" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://janio.app.n8n.cloud/webhook/ddf4a9ce-40ef-462c-8264-c582a28e3ae2",
    "username": "janiowebsiteleadform",
    "password": "kyNpen-wijmy0-cibhug",
    "timeout": 10000
  }'
```

## Production Considerations

1. **Webhook Reliability**: Consider implementing retry logic for failed webhook deliveries
2. **Monitoring**: Set up alerts for webhook delivery failures
3. **Backup**: Form submissions are still saved to database even if webhook fails
4. **Security**: Regularly rotate webhook credentials
5. **Performance**: Webhook requests are non-blocking and won't slow down form submissions

## Support

If webhook integration continues to fail:
1. Check Railway deployment logs
2. Verify n8n webhook is active and accessible
3. Test webhook endpoint manually
4. Ensure all environment variables are correctly set
5. Contact support with specific error messages from logs