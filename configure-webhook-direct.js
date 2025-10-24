// Direct webhook configuration for testing
import { webhookService } from './server/webhook.js';

console.log('🔧 Configuring webhook directly...');

try {
  webhookService.configure({
    url: 'https://janio.app.n8n.cloud/webhook/ddf4a9ce-40ef-462c-8264-c582a28e3ae2',
    username: 'janiowebsiteleadform',
    password: 'your-password',
    timeout: 10000
  });
  
  console.log('✅ Webhook configured successfully!');
  console.log('   URL: https://janio.app.n8n.cloud/webhook/ddf4a9ce-40ef-462c-8264-c582a28e3ae2');
  console.log('   Authentication: Basic Auth configured');
  console.log('\n🧪 Testing webhook delivery...');
  
  // Test webhook delivery
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    company: 'Test Company',
    serviceInterest: 'logistics-outsourcing',
    ctaSourceUrl: '/test-page',
    submissionId: 'test-12345',
    serverTimestamp: new Date().toISOString()
  };
  
  const result = await webhookService.send(testData);
  
  if (result.success) {
    console.log('✅ Test webhook delivered successfully!');
  } else {
    console.log('❌ Test webhook failed:', result.error);
  }
  
} catch (error) {
  console.error('❌ Configuration failed:', error.message);
}