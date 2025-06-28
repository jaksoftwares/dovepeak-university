'use client'

import { useState } from 'react'
import { 
  Book, 
  Code, 
  ExternalLink, 
  Search,
  ChevronRight,
  Copy,
  CheckCircle,
  Zap,
  Shield,
  Globe
} from 'lucide-react'
import toast from 'react-hot-toast'

const docSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Zap,
    items: [
      { title: 'Quick Start Guide', href: '#quick-start' },
      { title: 'Authentication', href: '#authentication' },
      { title: 'Making Your First Payment', href: '#first-payment' },
      { title: 'Testing', href: '#testing' }
    ]
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    icon: Code,
    items: [
      { title: 'Payment Intents', href: '#payment-intents' },
      { title: 'Customers', href: '#customers' },
      { title: 'Payment Methods', href: '#payment-methods' },
      { title: 'Webhooks', href: '#webhooks' },
      { title: 'Errors', href: '#errors' }
    ]
  },
  {
    id: 'guides',
    title: 'Guides',
    icon: Book,
    items: [
      { title: 'Accept a Payment', href: '#accept-payment' },
      { title: 'Handle Webhooks', href: '#handle-webhooks' },
      { title: 'Recurring Payments', href: '#recurring-payments' },
      { title: 'Multi-party Payments', href: '#multi-party' }
    ]
  },
  {
    id: 'security',
    title: 'Security',
    icon: Shield,
    items: [
      { title: 'PCI Compliance', href: '#pci-compliance' },
      { title: 'Fraud Prevention', href: '#fraud-prevention' },
      { title: 'Best Practices', href: '#best-practices' }
    ]
  }
]

const codeExample = `// Create a payment intent
const paymentIntent = await dovepeakPay.paymentIntents.create({
  amount: 2000,
  currency: 'usd',
  payment_method_types: ['card'],
  customer: 'cus_1234567890'
});

console.log(paymentIntent.client_secret);`

export default function Documentation() {
  const [activeSection, setActiveSection] = useState('getting-started')
  const [searchTerm, setSearchTerm] = useState('')

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success('Copied to clipboard!')
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Documentation</h1>
        <p className="text-gray-600">Everything you need to integrate Dovepeak Payment Gateway</p>
      </div>

      {/* Search */}
      <div className="card">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search documentation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <nav className="space-y-2">
            {docSections.map((section) => {
              const Icon = section.icon
              return (
                <div key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${
                      activeSection === section.id ? 'text-primary-600' : 'text-gray-400'
                    }`} />
                    <span className="font-medium">{section.title}</span>
                  </button>
                  
                  {activeSection === section.id && (
                    <div className="ml-8 mt-2 space-y-1">
                      {section.items.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Quick Start */}
          {activeSection === 'getting-started' && (
            <div className="space-y-6">
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Start Guide</h2>
                <p className="text-gray-600 mb-6">
                  Get up and running with Dovepeak Payment Gateway in just a few minutes.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Install the SDK</h3>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 text-sm">npm</span>
                        <button
                          onClick={() => copyToClipboard('npm install @dovepeak/payment-sdk')}
                          className="text-gray-400 hover:text-white"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                      <code className="text-green-400">npm install @dovepeak/payment-sdk</code>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Initialize the Client</h3>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 text-sm">JavaScript</span>
                        <button
                          onClick={() => copyToClipboard(codeExample)}
                          className="text-gray-400 hover:text-white"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                      <pre className="text-sm text-gray-300">
                        <code>{codeExample}</code>
                      </pre>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Process Your First Payment</h3>
                    <p className="text-gray-600 mb-3">
                      Use the client secret from step 2 to complete the payment on your frontend.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        <p className="text-blue-800 font-medium">
                          That's it! You're ready to accept payments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Steps</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="#" className="flex items-center space-x-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                    <Globe className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Explore the API</p>
                      <p className="text-sm text-gray-600">Full API reference</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </a>
                  
                  <a href="#" className="flex items-center space-x-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                    <Shield className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Security Guide</p>
                      <p className="text-sm text-gray-600">Best practices</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* API Reference */}
          {activeSection === 'api-reference' && (
            <div className="space-y-6">
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">API Reference</h2>
                <p className="text-gray-600 mb-6">
                  Complete reference for the Dovepeak Payment Gateway API.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Base URL</h3>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <code className="text-sm text-gray-800">https://api.dovepeakpay.com/v1</code>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Authentication</h3>
                    <p className="text-gray-600 mb-3">
                      Authenticate your API requests using your secret key in the Authorization header.
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <code className="text-green-400">Authorization: Bearer sk_test_your_secret_key</code>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Intents</h3>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">POST</span>
                          <code className="text-sm">/payment-intents</code>
                        </div>
                        <p className="text-sm text-gray-600">Create a new payment intent</p>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">GET</span>
                          <code className="text-sm">/payment-intents/:id</code>
                        </div>
                        <p className="text-sm text-gray-600">Retrieve a payment intent</p>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">PUT</span>
                          <code className="text-sm">/payment-intents/:id</code>
                        </div>
                        <p className="text-sm text-gray-600">Update a payment intent</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other sections would be similar... */}
          {activeSection === 'guides' && (
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Integration Guides</h2>
              <p className="text-gray-600 mb-6">
                Step-by-step guides for common integration scenarios.
              </p>
              <div className="text-center py-12">
                <Book className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Guides content coming soon...</p>
              </div>
            </div>
          )}

          {activeSection === 'security' && (
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Security</h2>
              <p className="text-gray-600 mb-6">
                Learn about security best practices and compliance.
              </p>
              <div className="text-center py-12">
                <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Security documentation coming soon...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}