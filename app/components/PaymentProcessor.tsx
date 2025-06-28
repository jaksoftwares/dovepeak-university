'use client'

import { useState } from 'react'
import { 
  CreditCard, 
  Smartphone, 
  Wallet, 
  QrCode,
  Shield,
  Lock,
  CheckCircle,
  AlertCircle,
  ArrowRight
} from 'lucide-react'
import toast from 'react-hot-toast'

const paymentMethods = [
  {
    id: 'card',
    name: 'Credit/Debit Card',
    icon: CreditCard,
    description: 'Visa, Mastercard, American Express',
    fees: '2.9% + $0.30'
  },
  {
    id: 'paypal',
    name: 'PayPal',
    icon: Wallet,
    description: 'Pay with your PayPal account',
    fees: '3.4% + $0.30'
  },
  {
    id: 'apple',
    name: 'Apple Pay',
    icon: Smartphone,
    description: 'Touch ID or Face ID',
    fees: '2.9% + $0.30'
  },
  {
    id: 'google',
    name: 'Google Pay',
    icon: Smartphone,
    description: 'Pay with Google',
    fees: '2.9% + $0.30'
  },
  {
    id: 'crypto',
    name: 'Cryptocurrency',
    icon: QrCode,
    description: 'Bitcoin, Ethereum, USDC',
    fees: '1.5% + $0.10'
  }
]

export default function PaymentProcessor() {
  const [selectedMethod, setSelectedMethod] = useState('card')
  const [paymentData, setPaymentData] = useState({
    amount: '',
    currency: 'USD',
    description: '',
    customerEmail: '',
    customerName: ''
  })
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)

  const handlePayment = async () => {
    if (!paymentData.amount || !paymentData.customerEmail) {
      toast.error('Please fill in all required fields')
      return
    }

    setIsProcessing(true)
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      setPaymentComplete(true)
      toast.success('Payment processed successfully!')
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setPaymentComplete(false)
        setPaymentData({
          amount: '',
          currency: 'USD',
          description: '',
          customerEmail: '',
          customerName: ''
        })
        setCardData({
          number: '',
          expiry: '',
          cvv: '',
          name: ''
        })
      }, 3000)
      
    } catch (error) {
      toast.error('Payment failed. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  if (paymentComplete) {
    return (
      <div className="max-w-2xl mx-auto animate-fade-in">
        <div className="card text-center">
          <div className="mb-6">
            <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-4">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
            <p className="text-gray-600">Your payment of ${paymentData.amount} has been processed successfully.</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Transaction ID</p>
                <p className="font-medium">TXN-{Date.now()}</p>
              </div>
              <div>
                <p className="text-gray-500">Amount</p>
                <p className="font-medium">${paymentData.amount} {paymentData.currency}</p>
              </div>
              <div>
                <p className="text-gray-500">Method</p>
                <p className="font-medium">{paymentMethods.find(m => m.id === selectedMethod)?.name}</p>
              </div>
              <div>
                <p className="text-gray-500">Status</p>
                <p className="font-medium text-green-600">Completed</p>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => setPaymentComplete(false)}
            className="btn-primary"
          >
            Process Another Payment
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Processor</h1>
        <p className="text-gray-600">Secure and fast payment processing with multiple payment methods</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Payment Form */}
        <div className="space-y-6">
          {/* Payment Details */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Details</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={paymentData.amount}
                    onChange={(e) => setPaymentData({...paymentData, amount: e.target.value})}
                    className="input-field"
                    placeholder="0.00"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Currency
                  </label>
                  <select
                    value={paymentData.currency}
                    onChange={(e) => setPaymentData({...paymentData, currency: e.target.value})}
                    className="input-field"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="CAD">CAD</option>
                    <option value="AUD">AUD</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <input
                  type="text"
                  value={paymentData.description}
                  onChange={(e) => setPaymentData({...paymentData, description: e.target.value})}
                  className="input-field"
                  placeholder="Payment description"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customer Email *
                </label>
                <input
                  type="email"
                  value={paymentData.customerEmail}
                  onChange={(e) => setPaymentData({...paymentData, customerEmail: e.target.value})}
                  className="input-field"
                  placeholder="customer@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customer Name
                </label>
                <input
                  type="text"
                  value={paymentData.customerName}
                  onChange={(e) => setPaymentData({...paymentData, customerName: e.target.value})}
                  className="input-field"
                  placeholder="John Doe"
                />
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
            
            <div className="grid grid-cols-1 gap-3">
              {paymentMethods.map((method) => {
                const Icon = method.icon
                return (
                  <div
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`payment-method-card ${selectedMethod === method.id ? 'selected' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon className="h-6 w-6 text-gray-600" />
                        <div>
                          <p className="font-medium text-gray-900">{method.name}</p>
                          <p className="text-sm text-gray-500">{method.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{method.fees}</p>
                        <p className="text-xs text-gray-500">Processing fee</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Card Details (if card selected) */}
          {selectedMethod === 'card' && (
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Card Details</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={cardData.number}
                    onChange={(e) => setCardData({...cardData, number: e.target.value})}
                    className="input-field"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      value={cardData.expiry}
                      onChange={(e) => setCardData({...cardData, expiry: e.target.value})}
                      className="input-field"
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={cardData.cvv}
                      onChange={(e) => setCardData({...cardData, cvv: e.target.value})}
                      className="input-field"
                      placeholder="123"
                      maxLength={4}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    value={cardData.name}
                    onChange={(e) => setCardData({...cardData, name: e.target.value})}
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Payment Summary & Security */}
        <div className="space-y-6">
          {/* Payment Summary */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Summary</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Amount:</span>
                <span className="font-medium">${paymentData.amount || '0.00'} {paymentData.currency}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Processing Fee:</span>
                <span className="font-medium">
                  {paymentMethods.find(m => m.id === selectedMethod)?.fees}
                </span>
              </div>
              
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-primary-600">
                    ${paymentData.amount ? (parseFloat(paymentData.amount) + 0.30).toFixed(2) : '0.30'} {paymentData.currency}
                  </span>
                </div>
              </div>
            </div>
            
            <button
              onClick={handlePayment}
              disabled={isProcessing || !paymentData.amount || !paymentData.customerEmail}
              className="w-full mt-6 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isProcessing ? (
                <>
                  <div className="spinner" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Process Payment</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>

          {/* Security Features */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Security & Trust</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">PCI DSS Compliant</p>
                  <p className="text-sm text-gray-600">Bank-level security standards</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Lock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">256-bit SSL Encryption</p>
                  <p className="text-sm text-gray-600">Your data is fully encrypted</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Fraud Protection</p>
                  <p className="text-sm text-gray-600">Advanced fraud detection</p>
                </div>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="card bg-gradient-to-r from-primary-50 to-primary-100">
            <div className="flex items-center space-x-3 mb-3">
              <AlertCircle className="h-5 w-5 text-primary-600" />
              <h3 className="font-semibold text-primary-900">Need Help?</h3>
            </div>
            <p className="text-primary-700 text-sm mb-3">
              Our support team is available 24/7 to assist you with any payment issues.
            </p>
            <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Contact Support →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}