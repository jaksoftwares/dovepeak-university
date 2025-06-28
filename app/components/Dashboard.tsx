'use client'

import { 
  CreditCard, 
  TrendingUp, 
  Users, 
  DollarSign, 
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Shield,
  Zap,
  Globe
} from 'lucide-react'

const stats = [
  {
    label: 'Total Revenue',
    value: '$2,847,392',
    change: '+12.5%',
    changeType: 'positive',
    icon: DollarSign,
    color: 'bg-green-500'
  },
  {
    label: 'Transactions',
    value: '45,231',
    change: '+8.2%',
    changeType: 'positive',
    icon: CreditCard,
    color: 'bg-blue-500'
  },
  {
    label: 'Success Rate',
    value: '99.2%',
    change: '+0.3%',
    changeType: 'positive',
    icon: TrendingUp,
    color: 'bg-purple-500'
  },
  {
    label: 'Active Users',
    value: '12,847',
    change: '-2.1%',
    changeType: 'negative',
    icon: Users,
    color: 'bg-orange-500'
  }
]

const recentTransactions = [
  {
    id: 'TXN-001',
    amount: 299.99,
    customer: 'John Doe',
    method: 'Credit Card',
    status: 'completed',
    time: '2 minutes ago'
  },
  {
    id: 'TXN-002',
    amount: 149.50,
    customer: 'Sarah Smith',
    method: 'PayPal',
    status: 'completed',
    time: '5 minutes ago'
  },
  {
    id: 'TXN-003',
    amount: 89.99,
    customer: 'Mike Johnson',
    method: 'Apple Pay',
    status: 'pending',
    time: '8 minutes ago'
  },
  {
    id: 'TXN-004',
    amount: 199.99,
    customer: 'Emily Davis',
    method: 'Google Pay',
    status: 'completed',
    time: '12 minutes ago'
  }
]

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome to Dovepeak Payment Gateway</h1>
            <p className="text-primary-100 text-lg">
              Secure, fast, and reliable payment processing for your business
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Shield className="h-12 w-12 text-white/80" />
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-primary-600 font-medium px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors">
            Process Payment
          </button>
          <button className="border border-white/30 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
            View Documentation
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          const TrendIcon = stat.changeType === 'positive' ? ArrowUpRight : ArrowDownRight
          
          return (
            <div key={index} className="card hover:shadow-xl transition-all duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <div className={`flex items-center mt-2 ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <TrendIcon className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{stat.change}</span>
                  </div>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Transactions */}
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
            <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              View All
            </button>
          </div>
          
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <CreditCard className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{transaction.customer}</p>
                    <p className="text-sm text-gray-500">{transaction.id} • {transaction.method}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">${transaction.amount}</p>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      transaction.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {transaction.status}
                    </span>
                    <span className="text-xs text-gray-500">{transaction.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions & Features */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors text-left">
                <div className="bg-primary-600 p-2 rounded-lg">
                  <CreditCard className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Process Payment</p>
                  <p className="text-xs text-gray-600">Accept new payment</p>
                </div>
              </button>
              
              <button className="w-full flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-left">
                <div className="bg-green-600 p-2 rounded-lg">
                  <Activity className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">View Analytics</p>
                  <p className="text-xs text-gray-600">Payment insights</p>
                </div>
              </button>
              
              <button className="w-full flex items-center space-x-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-left">
                <div className="bg-purple-600 p-2 rounded-lg">
                  <Globe className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Integration Guide</p>
                  <p className="text-xs text-gray-600">Setup instructions</p>
                </div>
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">PCI Compliant</p>
                  <p className="text-xs text-gray-600">Bank-level security</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Zap className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Instant Processing</p>
                  <p className="text-xs text-gray-600">Real-time transactions</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Globe className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Global Support</p>
                  <p className="text-xs text-gray-600">150+ currencies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}