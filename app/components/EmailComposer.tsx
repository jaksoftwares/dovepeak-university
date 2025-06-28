'use client'

import { useState } from 'react'
import { Send, Save, Eye, Users, Settings, Image, Link, Smile } from 'lucide-react'
import dynamic from 'next/dynamic'
import toast from 'react-hot-toast'

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'align': [] }],
    ['link', 'image'],
    ['clean']
  ],
}

const formats = [
  'header', 'bold', 'italic', 'underline', 'strike',
  'color', 'background', 'list', 'bullet', 'align',
  'link', 'image'
]

export default function EmailComposer() {
  const [emailData, setEmailData] = useState({
    subject: '',
    senderName: 'Dovepeak Digital Solutions',
    senderEmail: 'noreply@dovepeakdigital.com',
    replyTo: 'support@dovepeakdigital.com',
    content: '',
    recipients: 'all-contacts'
  })
  
  const [previewMode, setPreviewMode] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!emailData.subject.trim() || !emailData.content.trim()) {
      toast.error('Please fill in subject and content')
      return
    }

    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success('Email campaign sent successfully!')
      
      // Reset form
      setEmailData({
        ...emailData,
        subject: '',
        content: ''
      })
    } catch (error) {
      toast.error('Failed to send email campaign')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveDraft = () => {
    toast.success('Draft saved successfully!')
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Compose Email Campaign</h1>
          <p className="text-gray-600 mt-1">Create and send professional email campaigns</p>
        </div>
        
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <button
            onClick={() => setPreviewMode(!previewMode)}
            className="btn-secondary flex items-center space-x-2"
          >
            <Eye className="h-4 w-4" />
            <span>{previewMode ? 'Edit' : 'Preview'}</span>
          </button>
          
          <button
            onClick={handleSaveDraft}
            className="btn-secondary flex items-center space-x-2"
          >
            <Save className="h-4 w-4" />
            <span>Save Draft</span>
          </button>
          
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="btn-primary flex items-center space-x-2 disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            <span>{isLoading ? 'Sending...' : 'Send Campaign'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {!previewMode ? (
            <>
              {/* Email Settings */}
              <div className="card">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Email Settings</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject Line *
                    </label>
                    <input
                      type="text"
                      value={emailData.subject}
                      onChange={(e) => setEmailData({...emailData, subject: e.target.value})}
                      className="input-field"
                      placeholder="Enter email subject..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Recipients
                    </label>
                    <select
                      value={emailData.recipients}
                      onChange={(e) => setEmailData({...emailData, recipients: e.target.value})}
                      className="input-field"
                    >
                      <option value="all-contacts">All Contacts (12,847)</option>
                      <option value="subscribers">Subscribers (8,234)</option>
                      <option value="customers">Customers (3,421)</option>
                      <option value="prospects">Prospects (1,192)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sender Name
                    </label>
                    <input
                      type="text"
                      value={emailData.senderName}
                      onChange={(e) => setEmailData({...emailData, senderName: e.target.value})}
                      className="input-field"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sender Email
                    </label>
                    <input
                      type="email"
                      value={emailData.senderEmail}
                      onChange={(e) => setEmailData({...emailData, senderEmail: e.target.value})}
                      className="input-field"
                    />
                  </div>
                </div>
              </div>

              {/* Email Content */}
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Email Content</h2>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">
                      <Image className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">
                      <Link className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">
                      <Smile className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <ReactQuill
                  theme="snow"
                  value={emailData.content}
                  onChange={(content) => setEmailData({...emailData, content})}
                  modules={modules}
                  formats={formats}
                  placeholder="Write your email content here..."
                />
              </div>
            </>
          ) : (
            /* Preview Mode */
            <div className="card">
              <div className="border-b border-gray-200 pb-4 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Email Preview</h2>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><span className="font-medium">From:</span> {emailData.senderName} &lt;{emailData.senderEmail}&gt;</p>
                  <p><span className="font-medium">Subject:</span> {emailData.subject || 'No subject'}</p>
                  <p><span className="font-medium">To:</span> {emailData.recipients.replace('-', ' ').toUpperCase()}</p>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: emailData.content || '<p>No content</p>' }} />
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Campaign Stats */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Stats</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Recipients:</span>
                <span className="text-sm font-medium">12,847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Estimated Cost:</span>
                <span className="text-sm font-medium">$25.69</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Send Time:</span>
                <span className="text-sm font-medium">Immediate</span>
              </div>
            </div>
          </div>

          {/* Templates */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Templates</h3>
            
            <div className="space-y-2">
              <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <p className="font-medium text-sm">Newsletter Template</p>
                <p className="text-xs text-gray-600">Weekly updates and news</p>
              </button>
              
              <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <p className="font-medium text-sm">Promotional Email</p>
                <p className="text-xs text-gray-600">Sales and special offers</p>
              </button>
              
              <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <p className="font-medium text-sm">Welcome Series</p>
                <p className="text-xs text-gray-600">New subscriber onboarding</p>
              </button>
            </div>
          </div>

          {/* Personalization */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Personalization</h3>
            
            <div className="space-y-2">
              <button className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded text-sm">
                {{'{{'}}firstName{{'}}'}} - First Name
              </button>
              <button className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded text-sm">
                {{'{{'}}lastName{{'}}'}} - Last Name
              </button>
              <button className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded text-sm">
                {{'{{'}}company{{'}}'}} - Company
              </button>
              <button className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded text-sm">
                {{'{{'}}email{{'}}'}} - Email Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}