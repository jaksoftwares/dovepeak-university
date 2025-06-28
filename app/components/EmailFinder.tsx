'use client'

import { useState } from 'react'
import { 
  Search, 
  Globe, 
  Building, 
  User, 
  Mail, 
  Download, 
  Plus,
  Filter,
  RefreshCw,
  ExternalLink
} from 'lucide-react'
import toast from 'react-hot-toast'

const searchResults = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@techcorp.com',
    company: 'TechCorp Inc.',
    position: 'Marketing Director',
    location: 'San Francisco, CA',
    linkedin: 'https://linkedin.com/in/johnsmith',
    verified: true,
    confidence: 95
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@innovate.io',
    company: 'Innovate Solutions',
    position: 'CEO',
    location: 'New York, NY',
    linkedin: 'https://linkedin.com/in/sarahjohnson',
    verified: true,
    confidence: 92
  },
  {
    id: 3,
    name: 'Mike Davis',
    email: 'mike.davis@startup.com',
    company: 'Startup Ventures',
    position: 'CTO',
    location: 'Austin, TX',
    linkedin: 'https://linkedin.com/in/mikedavis',
    verified: false,
    confidence: 78
  }
]

export default function EmailFinder() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchType, setSearchType] = useState('company')
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState(searchResults)
  const [selectedEmails, setSelectedEmails] = useState<number[]>([])

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      toast.error('Please enter a search query')
      return
    }

    setIsSearching(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success(`Found ${results.length} email addresses`)
    } catch (error) {
      toast.error('Search failed. Please try again.')
    } finally {
      setIsSearching(false)
    }
  }

  const handleSelectEmail = (id: number) => {
    setSelectedEmails(prev => 
      prev.includes(id) 
        ? prev.filter(emailId => emailId !== id)
        : [...prev, id]
    )
  }

  const handleSelectAll = () => {
    setSelectedEmails(
      selectedEmails.length === results.length 
        ? [] 
        : results.map(result => result.id)
    )
  }

  const handleAddToContacts = () => {
    if (selectedEmails.length === 0) {
      toast.error('Please select emails to add')
      return
    }
    
    toast.success(`Added ${selectedEmails.length} contacts to your list`)
    setSelectedEmails([])
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Email Finder</h1>
          <p className="text-gray-600 mt-1">Discover and verify email addresses for your target market</p>
        </div>
        
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <button className="btn-secondary flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export Results</span>
          </button>
          
          <button
            onClick={handleAddToContacts}
            disabled={selectedEmails.length === 0}
            className="btn-primary flex items-center space-x-2 disabled:opacity-50"
          >
            <Plus className="h-4 w-4" />
            <span>Add to Contacts</span>
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Find Email Addresses</h2>
        
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Enter company name, domain, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
            </div>
            
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="company">Company</option>
              <option value="domain">Domain</option>
              <option value="industry">Industry</option>
              <option value="location">Location</option>
            </select>
            
            <button
              onClick={handleSearch}
              disabled={isSearching}
              className="btn-primary flex items-center space-x-2 disabled:opacity-50"
            >
              {isSearching ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <Search className="h-4 w-4" />
              )}
              <span>{isSearching ? 'Searching...' : 'Search'}</span>
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors">
              Technology Companies
            </button>
            <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors">
              Marketing Agencies
            </button>
            <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors">
              E-commerce
            </button>
            <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors">
              SaaS Companies
            </button>
          </div>
        </div>
      </div>

      {/* Search Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Found</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
            </div>
            <div className="bg-blue-500 p-3 rounded-lg">
              <Search className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Verified</p>
              <p className="text-2xl font-bold text-green-600">892</p>
            </div>
            <div className="bg-green-500 p-3 rounded-lg">
              <Mail className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Companies</p>
              <p className="text-2xl font-bold text-purple-600">156</p>
            </div>
            <div className="bg-purple-500 p-3 rounded-lg">
              <Building className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Success Rate</p>
              <p className="text-2xl font-bold text-orange-600">71%</p>
            </div>
            <div className="bg-orange-500 p-3 rounded-lg">
              <Globe className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold text-gray-900">Search Results</h2>
            <span className="text-sm text-gray-500">({results.length} found)</span>
          </div>
          
          {selectedEmails.length > 0 && (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">
                {selectedEmails.length} selected
              </span>
              <button
                onClick={handleAddToContacts}
                className="text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                Add to Contacts
              </button>
            </div>
          )}
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedEmails.length === results.length}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Confidence
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {results.map((result) => (
                <tr key={result.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedEmails.includes(result.id)}
                      onChange={() => handleSelectEmail(result.id)}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gray-100 p-2 rounded-full">
                        <User className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{result.name}</div>
                        <div className="text-sm text-gray-500">{result.position}</div>
                        <div className="text-xs text-gray-400">{result.location}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Building className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-900">{result.company}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-900">{result.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        result.confidence >= 90 ? 'bg-green-500' :
                        result.confidence >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                      }`} />
                      <span className="text-sm text-gray-900">{result.confidence}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      result.verified 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {result.verified ? 'Verified' : 'Unverified'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <a
                        href={result.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <button className="text-primary-600 hover:text-primary-700">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}