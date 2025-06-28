'use client'

import { useState } from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  CreditCard, 
  Users, 
  Globe,
  Calendar,
  Download,
  Filter
} from 'lucide-react'

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('30d')

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
      label: 'Transaction Volume',
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
      label: 'Active Customers',
      value: '12,847',
      change: '-2.1%',
      changeType: 'negative',
      icon: Users,
      color: 'bg-orange-500'
    }
  ]

  const paymentMethods = [
    { name: 'Credit Cards', percentage: 65, amount: '$1,851,805', color: 'bg-blue-500' },
    { name: 'PayPal', percentage: 20, amount: '$569,478', color: 'bg-yellow-500' },
    { name: 'Apple Pay', percentage: 8, amount: '$227,791', color: 'bg-gray-800' },
    { name: 'Google Pay', percentage: 5, amount: '$142,370', color: 'bg-green-500' },
    { name: 'Cryptocurrency', percentage: 2, amount: '$56,948', color: 'bg-orange-500' }
  ]

  const topCountries = [
    { country: 'United States', transactions: 18420, revenue: '$1,247,832', flag: '🇺🇸' },
    { country: 'United Kingdom', transactions: 8234, revenue: '$567,234', flag: '🇬🇧' },
    { country: 'Canada', transactions: 5678, revenue: '$389,567', flag: '🇨🇦' },
    { country: 'Germany', transactions: 4321, revenue: '$298,765', flag: '🇩🇪' },
    { country: 'Australia', transactions: 3456, revenue: '$234,567', flag: '🇦🇺' }
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-1">Track your payment performance and insights</p>
        </div>
        
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          
          <button className="btn-secondary flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
          
          <button className="btn-secondary flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          const TrendIcon = stat.changeType === 'positive' ? TrendingUp : TrendingDown
          
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

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Revenue Trends</h2>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Revenue</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Transactions</span>
              </div>
            </div>
          </div>
          
          {/* Placeholder for chart */}
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Revenue chart visualization</p>
              <p className="text-sm text-gray-400">Chart library integration needed</p>
            </div>
          </div>
        </div>

        {/* Payment Methods Breakdown */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Payment Methods</h2>
          
          <div className="space-y-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 ${method.color} rounded-full`}></div>
                  <span className="text-sm font-medium text-gray-900">{method.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">{method.percentage}%</span>
                  <span className="text-sm font-medium text-gray-900">{method.amount}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">Insights</h3>
            <p className="text-sm text-blue-700">
              Credit cards remain the most popular payment method, accounting for 65% of all transactions.
              Consider promoting alternative payment methods to reduce processing fees.
            </p>
          </div>
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Geographic Distribution</h2>
          <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
            View All Countries
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 text-sm font-medium text-gray-500">Country</th>
                <th className="text-right py-3 text-sm font-medium text-gray-500">Transactions</th>
                <th className="text-right py-3 text-sm font-medium text-gray-500">Revenue</th>
                <th className="text-right py-3 text-sm font-medium text-gray-500">Share</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topCountries.map((country, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{country.flag}</span>
                      <span className="font-medium text-gray-900">{country.country}</span>
                    </div>
                  </td>
                  <td className="py-3 text-right text-gray-900">
                    {country.transactions.toLocaleString()}
                  </td>
                  <td className="py-3 text-right font-medium text-gray-900">
                    {country.revenue}
                  </td>
                  <td className="py-3 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <span className="text-sm text-gray-600">
                        {((country.transactions / 45231) * 100).toFixed(1)}%
                      </span>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary-500 h-2 rounded-full" 
                          style={{ width: `${(country.transactions / 45231) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Success Rate</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Overall Success Rate</span>
              <span className="font-medium">99.2%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '99.2%' }}></div>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Card Payments</span>
              <span className="font-medium">99.5%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '99.5%' }}></div>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Digital Wallets</span>
              <span className="font-medium">98.8%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '98.8%' }}></div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Calendar className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Processing Time</h3>
          </div>
          
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">1.2s</p>
              <p className="text-sm text-gray-600">Average processing time</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Instant (&lt;1s)</span>
                <span className="font-medium">78%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Fast (1-3s)</span>
                <span className="font-medium">20%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Slow (&gt;3s)</span>
                <span className="font-medium">2%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Globe className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Global Reach</h3>
          </div>
          
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">47</p>
              <p className="text-sm text-gray-600">Countries served</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">North America</span>
                <span className="font-medium">45%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Europe</span>
                <span className="font-medium">32%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Asia Pacific</span>
                <span className="font-medium">18%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Others</span>
                <span className="font-medium">5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}