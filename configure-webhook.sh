#!/bin/bash
curl -X POST http://localhost:5000/api/webhook/configure \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://janio.app.n8n.cloud/webhook/ddf4a9ce-40ef-462c-8264-c582a28e3ae2",
    "username": "janiowebsiteleadform", 
    "password": "your-password",
    "timeout": 10000
  }' | jq . || echo "Raw response above"
