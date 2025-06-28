'use client'

import { useState } from 'react'
import { 
  CreditCard, 
  Smartphone, 
  Wallet, 
  QrCode,
  Plus,
  Settings,
  ToggleLeft,
  ToggleRight,
  Edit,
  Trash2,
  Shield,
  Globe,
  Zap
} from 'lucide-react'
import toast from 'react-hot-toast'

const paymentMethods = [
  {
    id: 'stripe',
    name: 'Stripe',
    type: 'Credit Cards',
    icon: CreditCard,
    enabled: true,
    description: 'Accept Visa, Mastercard, American Express',
    fees: '2.9% + $0.30',
    currencies: ['USD', 'EUR', 'GBP', 'CAD', 'AUD'],
    features: ['Instant payouts', 'Fraud protection', 'Recurring billing'],
    status: 'active'
  },
  {
    id: 'paypal',
    name: 'PayPal',
    type: 'Digital Wallet',
    icon: Wallet,
    enabled: true,
    description: 'PayPal and PayPal Credit payments',
    fees: '3.4% + $0.30',
    currencies: ['USD', 'EUR', 'GBP', 'CAD'],
    features: ['Buyer protection', 'Express checkout', 'Mobile optimized'],
    status: 'active'
  },
  {
    id: 'apple_pay',
    name: 'Apple Pay',
    type: 'Mobile Payment',
    icon: Smartphone,
    enabled: false,
    description: 'Touch ID and Face ID payments',
    fees: '2.9% + $0.30',
    currencies: ['USD', 'EUR', 'GBP'],
    features: ['Biometric security', 'One-touch payment', 'iOS integration'],
    status: 'inactive'
  },
  {
    id: 'google_pay',
    name: 'Google Pay',
    type: 'Mobile Payment',
    icon: Smartphone,
    enabled: true,
    description: 'Google Pay and Android Pay',
    fees: '2.9% + $0.30',
    currencies: ['USD', 'EUR', 'GBP', 'CAD'],
    features: ['Android integration', 'Quick checkout', 'Secure payments'],
    status: 'active'
  },
  {
    id: 'crypto',
    name: 'Cryptocurrency',
    type: 'Digital Currency',
    icon: QrCode,
    enabled: false,
    description: 'Bitcoin, Ethereum, USDC, and more',
    fees: '1.5% + $0.10',
    currencies: ['BTC', 'ETH', 'USDC', 'LTC'],
    features: ['Low fees', 'Global reach', 'Instant settlement'],
    status: 'inactive'
  }
]

export default function PaymentMethods() {
  const [methods, setMethods] = useState(paymentMethods)
  const [showAddModal, setShowAddModal] = useState(false)

  const toggleMethod = (id: string) => {
    setMethods(prev => 
      prev.map(method => 
        method.id === id 
          ? { ...method, enabled: !method.enabled, status: !method.enabled ? 'active' : 'inactive' }
          : method
      )
    )
    
    const method = methods.find(m => m.id === id)
    if (method) {
      toast.success(`${method.name} ${!method.enabled ? 'enabled' : 'disabled'}`)
    }
  }

  const getMethodIcon = (method: any) => {
    const Icon = method.icon
    return <Icon className="h-6 w-6" />
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payment Methods</h1>
          <p className="text-gray-600 mt-1">Configure and manage your payment processing options</p>
        </div>
        
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <button className="btn-secondary flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>Global Settings</span>
          </button>
          
          <button
            onClick={() => setShowAddModal(true)}
            className="btn-primary flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Add Method</span>
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Methods</p>
              <p className="text-2xl font-bold text-green-600">
                {methods.filter(m => m.enabled).length}
              </p>
            </div>
            <div className="bg-green-500 p-3 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Supported Currencies</p>
              <p className="text-2xl font-bold text-blue-600">25+</p>
            </div>
            <div className="bg-blue-500 p-3 rounded-lg">
              <Globe className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Processing Speed</p>
              <p className="text-2xl font-bold text-purple-600">Instant</p>
            </div>
            <div className="bg-purple-500 p-3 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {methods.map((method) => (
          <div key={method.id} className="card">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-lg ${method.enabled ? 'bg-primary-100' : 'bg-gray-100'}`}>
                  <div className={method.enabled ? 'text-primary-600' : 'text-gray-400'}>
                    {getMethodIcon(method)}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{method.name}</h3>
                  <p className="text-sm text-gray-500">{method.type}</p>
                </div>
              </div>
              
              <button
                onClick={() => toggleMethod(method.id)}
                className="flex items-center"
              >
                {method.enabled ? (
                  <ToggleRight className="h-6 w-6 text-primary-600" />
                ) : (
                  <ToggleLeft className="h-6 w-6 text-gray-400" />
                )}
              </button>
            </div>
            
            <p className="text-gray-600 mb-4">{method.description}</p>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Processing Fee:</span>
                <span className="font-medium">{method.fees}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Status:</span>
                <span className={`font-medium capitalize ${
                  method.status === 'active' ? 'text-green-600' : 'text-gray-500'
                }`}>
                  {method.status}
                </span>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Supported Currencies:</p>
              <div className="flex flex-wrap gap-1">
                {method.currencies.map((currency) => (
                  <span
                    key={currency}
                    className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded"
                  >
                    {currency}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-2">Features:</p>
              <ul className="space-y-1">
                {method.features.map((feature, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="flex-1 btn-secondary flex items-center justify-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>Configure</span>
              </button>
              
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100">
                <Edit className="h-4 w-4" />
              </button>
              
              <button className="p-2 text-gray-400 hover:text-red-600 rounded-md hover:bg-red-50">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Method Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Add Payment Method
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Provider
                  </label>
                  <select className="input-field">
                    <option>Select a provider...</option>
                    <option>Square</option>
                    <option>Braintree</option>
                    <option>Authorize.Net</option>
                    <option>Adyen</option>
                    <option>Klarna</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    API Key
                  </label>
                  <input
                    type="password"
                    className="input-field"
                    placeholder="Enter API key..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Webhook URL
                  </label>
                  <input
                    type="url"
                    className="input-field"
                    placeholder="https://your-site.com/webhook"
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    toast.success('Payment method added successfully!')
                    setShowAddModal(false)
                  }}
                  className="btn-primary"
                >
                  Add Method
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}