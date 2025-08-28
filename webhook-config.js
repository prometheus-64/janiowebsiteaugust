#!/usr/bin/env node

/**
 * Webhook Configuration Script
 * 
 * This script configures the webhook endpoint for lead form submissions.
 * Run this script to set up the webhook URL and Basic Auth credentials.
 * 
 * Usage:
 *   node webhook-config.js
 * 
 * Or set environment variables and run:
 *   WEBHOOK_URL=https://your-endpoint.com/webhook
 *   WEBHOOK_USERNAME=your-username
 *   WEBHOOK_PASSWORD=your-password
 *   node webhook-config.js
 */

import readline from 'readline';
import https from 'https';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function configureWebhook() {
  console.log('🔧 Janio Lead Capture Webhook Configuration\n');

  let webhookUrl = process.env.WEBHOOK_URL;
  let username = process.env.WEBHOOK_USERNAME;
  let password = process.env.WEBHOOK_PASSWORD;

  // Get webhook URL
  if (!webhookUrl) {
    webhookUrl = await question('Enter webhook URL (must be HTTPS): ');
  }
  
  if (!webhookUrl.startsWith('https://')) {
    console.error('❌ Error: Webhook URL must use HTTPS for security');
    process.exit(1);
  }

  // Get username
  if (!username) {
    username = await question('Enter webhook username: ');
  }

  // Get password (hidden input would be better in production)
  if (!password) {
    password = await question('Enter webhook password: ');
  }

  console.log('\n📤 Configuring webhook...');

  try {
    const response = await fetch('http://localhost:5000/api/webhook/configure', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: webhookUrl,
        username: username,
        password: password,
        timeout: 10000
      })
    });

    const result = await response.json();

    if (response.ok && result.success) {
      console.log('✅ Webhook configured successfully!');
      console.log(`   URL: ${result.url}`);
      console.log('   Authentication: Basic Auth configured');
      console.log('\n🚀 Your lead capture workflow is now active.');
      console.log('\n📋 Data that will be sent to your webhook:');
      console.log('   • Lead Information: name, email, company, phone');
      console.log('   • Service Interest: selected service/interest');
      console.log('   • Company Size: monthly logistics spend');
      console.log('   • Message: custom message from lead');
      console.log('   • Tracking Data: CTA source page, referrer, user agent');
      console.log('   • Timestamps: client and server timestamps');
      console.log('   • Submission ID: unique identifier');
      
    } else {
      console.error('❌ Configuration failed:', result.error);
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ Error connecting to server:', error.message);
    console.log('\n💡 Make sure your development server is running:');
    console.log('   npm run dev');
    process.exit(1);
  }

  rl.close();
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Configuration cancelled');
  rl.close();
  process.exit(0);
});

// Run configuration
configureWebhook().catch(error => {
  console.error('❌ Unexpected error:', error.message);
  process.exit(1);
});