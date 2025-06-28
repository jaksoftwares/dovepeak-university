import React from 'react';
import { FileText, Plus, History } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-400" />
              <div>
                <h1 className="text-xl font-bold">Dovepeak Digital Solutions</h1>
                <p className="text-xs text-gray-300">Invoice Generator</p>
              </div>
            </div>
          </div>
          
          <nav className="flex space-x-8">
            <button
              onClick={() => onTabChange('create')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'create'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <Plus className="h-4 w-4" />
              <span>Create Invoice</span>
            </button>
            
            <button
              onClick={() => onTabChange('history')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'history'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <History className="h-4 w-4" />
              <span>Invoice History</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};