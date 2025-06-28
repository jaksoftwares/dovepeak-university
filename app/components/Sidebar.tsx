'use client'

import { 
  LayoutDashboard, 
  CreditCard, 
  History, 
  Wallet, 
  Code, 
  BarChart3, 
  Settings,
  BookOpen,
  X
} from 'lucide-react'

interface SidebarProps {
  activeView: string
  onViewChange: (view: any) => void
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'payment', label: 'Payment Processor', icon: CreditCard },
  { id: 'transactions', label: 'Transactions', icon: History },
  { id: 'methods', label: 'Payment Methods', icon: Wallet },
  { id: 'integration', label: 'Integration', icon: Code },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'docs', label: 'Documentation', icon: BookOpen },
  { id: 'settings', label: 'Settings', icon: Settings },
]

export default function Sidebar({ activeView, onViewChange, isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed top-16 left-0 h-full w-64 bg-white border-r border-gray-200 z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="flex items-center justify-between p-4 lg:hidden">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeView === item.id
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  onViewChange(item.id)
                  onClose()
                }}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200
                  ${isActive 
                    ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600 shadow-sm' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-primary-600' : 'text-gray-500'}`} />
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-4 text-white">
            <h3 className="font-semibold text-sm">Enterprise Plan</h3>
            <p className="text-xs text-primary-100 mt-1">
              Advanced features and priority support
            </p>
            <button className="mt-3 bg-white text-primary-600 text-xs font-medium px-3 py-1 rounded-md hover:bg-primary-50 transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}