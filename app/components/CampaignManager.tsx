'use client'

import { useState } from 'react'
import { 
  Plus, 
  Search, 
  Filter, 
  Play, 
  Pause, 
  Eye, 
  Copy, 
  Trash2,
  MoreVertical,
  Calendar,
  Users,
  Mail,
  TrendingUp
} from 'lucide-react'

const campaigns = [
  {
    id: 1,
    name: 'Summer Sale Newsletter',
    status: 'completed',
    type: 'newsletter',
    recipients: 5420,
    sent: 5420,
    opened: 1329,
    clicked: 187,
    bounced: 23,
    unsubscribed: 5,
    openRate: 24.5,
    clickRate: 3.4,
    createdDate: '2024-01-15',
    sentDate: '2024-01-15',
    subject: 'Don\'t miss our biggest summer sale!'
  },
  {
    id: 2,
    name: 'Product Launch Announcement',
    status: 'sending',
    type: 'promotional',
    recipients: 8234,
    sent: 2100,
    opened: 0,
    clicked: 0,
    bounced: 0,
    unsubscribed: 0,
    openRate: 0,
    clickRate: 0,
    createdDate: '2024-01-16',
    sentDate: null,
    subject: 'Introducing our revolutionary new product'
  },
  {
    id: 3,
    name: 'Weekly Digest #47',
    status: 'scheduled',
    type: 'newsletter',
    recipients: 12847,
    sent: 0,
    opened: 0,
    clicked: 0,
    bounced: 0,
    unsubscribed: 0,
    openRate: 0,
    clickRate: 0,
    createdDate: '2024-01-16',
    sentDate: '2024-01-18',
    subject: 'Your weekly dose of industry insights'
  },
  {
    id: 4,
    name: 'Welcome Series - Part 1',
    status: 'draft',
    type: 'automation',
    recipients: 0,
    sent: 0,
    opened: 0,
    clicked: 0,
    bounced: 0,
    unsubscribed: 0,
    openRate: 0,
    clickRate: 0,
    createdDate: '2024-01-14',
    sentDate: null,
    subject: 'Welcome to Dovepeak Digital Solutions!'
  }
]

export default function CampaignManager() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedCampaigns, setSelectedCampaigns] = useState<number[]>([])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'sending':
        return 'bg-blue-100 text-blue-800'
      case 'scheduled':
        return 'bg-yellow-100 text-yellow-800'
      case 'draft':
        return 'bg-gray-100 text-gray-800'
      case 'paused':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'newsletter':
        return <Mail className="h-4 w-4" />
      case 'promotional':
        return <TrendingUp className="h-4 w-4" />
      case 'automation':
        return <Play className="h-4 w-4" />
      default:
        return <Mail className="h-4 w-4" />
    }
  }

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || campaign.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Campaign Manager</h1>
          <p className="text-gray-600 mt-1">Create, manage and track your email campaigns</p>
        </div>
        
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <button className="btn-secondary flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>Schedule</span>
          </button>
          
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>New Campaign</span>
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Campaigns</p>
              <p className="text-2xl font-bold text-gray-900">47</p>
              <p className="text-sm text-green-600">+3 this month</p>
            </div>
            <div className="bg-blue-500 p-3 rounded-lg">
              <Mail className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Emails Sent</p>
              <p className="text-2xl font-bold text-gray-900">245K</p>
              <p className="text-sm text-green-600">+12% vs last month</p>
            </div>
            <div className="bg-green-500 p-3 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Open Rate</p>
              <p className="text-2xl font-bold text-gray-900">24.5%</p>
              <p className="text-sm text-green-600">+2.1% vs last month</p>
            </div>
            <div className="bg-purple-500 p-3 rounded-lg">
              <Eye className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Click Rate</p>
              <p className="text-2xl font-bold text-gray-900">3.2%</p>
              <p className="text-sm text-red-600">-0.5% vs last month</p>
            </div>
            <div className="bg-orange-500 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="draft">Draft</option>
              <option value="scheduled">Scheduled</option>
              <option value="sending">Sending</option>
              <option value="completed">Completed</option>
              <option value="paused">Paused</option>
            </select>
          </div>
          
          {selectedCampaigns.length > 0 && (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">
                {selectedCampaigns.length} selected
              </span>
              <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                Delete
              </button>
              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                Duplicate
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Campaigns List */}
      <div className="space-y-4">
        {filteredCampaigns.map((campaign) => (
          <div key={campaign.id} className="card hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={selectedCampaigns.includes(campaign.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedCampaigns([...selectedCampaigns, campaign.id])
                    } else {
                      setSelectedCampaigns(selectedCampaigns.filter(id => id !== campaign.id))
                    }
                  }}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    {getTypeIcon(campaign.type)}
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
                    <p className="text-sm text-gray-600">{campaign.subject}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(campaign.status)}`}>
                        {campaign.status}
                      </span>
                      <span className="text-xs text-gray-500">
                        Created: {campaign.createdDate}
                      </span>
                      {campaign.sentDate && (
                        <span className="text-xs text-gray-500">
                          Sent: {campaign.sentDate}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-8">
                {/* Stats */}
                <div className="hidden lg:flex items-center space-x-6 text-sm">
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{campaign.recipients.toLocaleString()}</p>
                    <p className="text-gray-500">Recipients</p>
                  </div>
                  
                  {campaign.sent > 0 && (
                    <>
                      <div className="text-center">
                        <p className="font-semibold text-gray-900">{campaign.openRate}%</p>
                        <p className="text-gray-500">Open Rate</p>
                      </div>
                      
                      <div className="text-center">
                        <p className="font-semibold text-gray-900">{campaign.clickRate}%</p>
                        <p className="text-gray-500">Click Rate</p>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Actions */}
                <div className="flex items-center space-x-2">
                  {campaign.status === 'draft' && (
                    <button className="p-2 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-md">
                      <Play className="h-4 w-4" />
                    </button>
                  )}
                  
                  {campaign.status === 'sending' && (
                    <button className="p-2 text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-md">
                      <Pause className="h-4 w-4" />
                    </button>
                  )}
                  
                  <button className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-md">
                    <Eye className="h-4 w-4" />
                  </button>
                  
                  <button className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-md">
                    <Copy className="h-4 w-4" />
                  </button>
                  
                  <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md">
                    <Trash2 className="h-4 w-4" />
                  </button>
                  
                  <button className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-md">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}