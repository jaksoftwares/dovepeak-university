'use client'

import { useState } from 'react'
import { 
  Code, 
  Copy, 
  Download, 
  ExternalLink,
  CheckCircle,
  Book,
  Zap,
  Shield,
  Globe
} from 'lucide-react'
import toast from 'react-hot-toast'

const integrationMethods = [
  {
    id: 'javascript',
    name: 'JavaScript SDK',
    description: 'Easy integration with our JavaScript library',
    icon: Code,
    difficulty: 'Easy',
    time: '15 minutes'
  },
  {
    id: 'react',
    name: 'React Components',
    description: 'Pre-built React components for quick integration',
    icon: Code,
    difficulty: 'Easy',
    time: '10 minutes'
  },
  {
    id: 'api',
    name: 'REST API',
    description: 'Direct API integration for custom implementations',
    icon: Globe,
    difficulty: 'Medium',
    time: '30 minutes'
  },
  {
    id: 'webhook',
    name: 'Webhooks',
    description: 'Real-time payment notifications',
    icon: Zap,
    difficulty: 'Medium',
    time: '20 minutes'
  }
]

const codeExamples = {
  javascript: `// Install the Dovepeak Payment SDK
npm install @dovepeak/payment-sdk

// Initialize the payment processor
import { DovepeakPayment } from '@dovepeak/payment-sdk';

const payment = new DovepeakPayment({
  apiKey: 'your-api-key',
  environment: 'sandbox' // or 'production'
});

// Process a payment
const result = await payment.processPayment({
  amount: 29.99,
  currency: 'USD',
  paymentMethod: 'card',
  customer: {
    email: 'customer@example.com',
    name: 'John Doe'
  }
});

console.log('Payment result:', result);`,

  react: `// Install the React components
npm install @dovepeak/payment-react

// Use the PaymentForm component
import { PaymentForm } from '@dovepeak/payment-react';

function CheckoutPage() {
  const handlePaymentSuccess = (result) => {
    console.log('Payment successful:', result);
  };

  const handlePaymentError = (error) => {
    console.error('Payment failed:', error);
  };

  return (
    <PaymentForm
      apiKey="your-api-key"
      amount={29.99}
      currency="USD"
      onSuccess={handlePaymentSuccess}
      onError={handlePaymentError}
      theme="modern"
    />
  );
}`,

  api: `// Create a payment intent
POST https://api.dovepeakpay.com/v1/payment-intents

{
  "amount": 2999,
  "currency": "usd",
  "payment_method_types": ["card"],
  "customer": {
    "email": "customer@example.com",
    "name": "John Doe"
  },
  "metadata": {
    "order_id": "order_123"
  }
}

// Response
{
  "id": "pi_1234567890",
  "client_secret": "pi_1234567890_secret_abc",
  "status": "requires_payment_method",
  "amount": 2999,
  "currency": "usd"
}`,

  webhook: `// Webhook endpoint example (Node.js/Express)
const express = require('express');
const app = express();

app.post('/webhook/payment', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['dovepeak-signature'];
  
  try {
    const event = webhook.constructEvent(req.body, sig, endpointSecret);
    
    switch (event.type) {
      case 'payment_intent.succeeded':
        console.log('Payment succeeded:', event.data.object);
        // Handle successful payment
        break;
      case 'payment_intent.payment_failed':
        console.log('Payment failed:', event.data.object);
        // Handle failed payment
        break;
      default:
        console.log('Unhandled event type:', event.type);
    }
    
    res.json({received: true});
  } catch (err) {
    console.error('Webhook error:', err.message);
    res.status(400).send('Webhook Error');
  }
});`
}

export default function Integration() {
  const [activeTab, setActiveTab] = useState('javascript')
  const [apiKey] = useState('pk_test_1234567890abcdef')

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success('Copied to clipboard!')
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Integration Guide</h1>
        <p className="text-gray-600">Get started with Dovepeak Payment Gateway in minutes</p>
      </div>

      {/* Quick Start */}
      <div className="card bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-primary-600 p-3 rounded-lg">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary-900">Quick Start</h2>
            <p className="text-primary-700">Get your payment system up and running in under 15 minutes</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
              <h3 className="font-semibold text-gray-900">Get API Keys</h3>
            </div>
            <p className="text-sm text-gray-600">Sign up and get your API keys from the dashboard</p>
          </div>
          
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
              <h3 className="font-semibold text-gray-900">Choose Integration</h3>
            </div>
            <p className="text-sm text-gray-600">Select your preferred integration method below</p>
          </div>
          
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
              <h3 className="font-semibold text-gray-900">Start Processing</h3>
            </div>
            <p className="text-sm text-gray-600">Begin accepting payments immediately</p>
          </div>
        </div>
      </div>

      {/* API Keys */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">API Keys</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Publishable Key (Test)
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={apiKey}
                readOnly
                className="flex-1 input-field bg-gray-50"
              />
              <button
                onClick={() => copyToClipboard(apiKey)}
                className="btn-secondary flex items-center space-x-2"
              >
                <Copy className="h-4 w-4" />
                <span>Copy</span>
              </button>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-yellow-600" />
              <p className="text-sm text-yellow-800">
                <strong>Security Note:</strong> Never expose your secret key in client-side code. 
                Use publishable keys for frontend integration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Methods */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Integration Methods</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {integrationMethods.map((method) => {
            const Icon = method.icon
            return (
              <button
                key={method.id}
                onClick={() => setActiveTab(method.id)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  activeTab === method.id
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Icon className={`h-5 w-5 ${
                    activeTab === method.id ? 'text-primary-600' : 'text-gray-600'
                  }`} />
                  <h3 className="font-semibold text-gray-900">{method.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className={`px-2 py-1 rounded-full ${
                    method.difficulty === 'Easy' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {method.difficulty}
                  </span>
                  <span className="text-gray-500">{method.time}</span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Code Example */}
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h3 className="text-white font-medium">
              {integrationMethods.find(m => m.id === activeTab)?.name} Example
            </h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => copyToClipboard(codeExamples[activeTab as keyof typeof codeExamples])}
                className="text-gray-300 hover:text-white flex items-center space-x-1"
              >
                <Copy className="h-4 w-4" />
                <span className="text-sm">Copy</span>
              </button>
            </div>
          </div>
          <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
            <code>{codeExamples[activeTab as keyof typeof codeExamples]}</code>
          </pre>
        </div>
      </div>

      {/* Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Documentation</h3>
          
          <div className="space-y-3">
            <a href="#" className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <Book className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">API Reference</p>
                  <p className="text-sm text-gray-600">Complete API documentation</p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400" />
            </a>
            
            <a href="#" className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <Code className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">SDK Documentation</p>
                  <p className="text-sm text-gray-600">Language-specific guides</p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400" />
            </a>
            
            <a href="#" className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <Zap className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="font-medium text-gray-900">Webhooks Guide</p>
                  <p className="text-sm text-gray-600">Handle real-time events</p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400" />
            </a>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Testing</h3>
          
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">Test Card Numbers</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-700">Visa:</span>
                  <code className="text-blue-800">4242 4242 4242 4242</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Mastercard:</span>
                  <code className="text-blue-800">5555 5555 5555 4444</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Declined:</span>
                  <code className="text-blue-800">4000 0000 0000 0002</code>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h4 className="font-medium text-green-900">Test Environment</h4>
              </div>
              <p className="text-sm text-green-700">
                Use test API keys to safely test your integration without processing real payments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Support */}
      <div className="card bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            Our developer support team is here to help you integrate successfully.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="btn-primary">Contact Support</button>
            <button className="btn-secondary">Join Discord</button>
          </div>
        </div>
      </div>
    </div>
  )
}