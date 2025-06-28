'use client'

import { useState, useEffect } from 'react'
import { 
  Menu, 
  X, 
  GraduationCap, 
  ChevronDown,
  Search,
  Globe,
  Phone,
  Mail
} from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    {
      name: 'About',
      href: '#about',
      dropdown: [
        { name: 'Our History', href: '#history' },
        { name: 'Mission & Vision', href: '#mission' },
        { name: 'Leadership', href: '#leadership' },
        { name: 'Campus', href: '#campus' },
        { name: 'Accreditation', href: '#accreditation' }
      ]
    },
    {
      name: 'Academics',
      href: '#academics',
      dropdown: [
        { name: 'Undergraduate Programs', href: '#undergraduate' },
        { name: 'Graduate Programs', href: '#graduate' },
        { name: 'Online Learning', href: '#online' },
        { name: 'Schools & Colleges', href: '#schools' },
        { name: 'Academic Calendar', href: '#calendar' }
      ]
    },
    {
      name: 'Admissions',
      href: '#admissions',
      dropdown: [
        { name: 'Apply Now', href: '#apply' },
        { name: 'Requirements', href: '#requirements' },
        { name: 'Tuition & Aid', href: '#tuition' },
        { name: 'Visit Campus', href: '#visit' },
        { name: 'International Students', href: '#international' }
      ]
    },
    {
      name: 'Research',
      href: '#research',
      dropdown: [
        { name: 'Research Centers', href: '#centers' },
        { name: 'Faculty Research', href: '#faculty-research' },
        { name: 'Student Research', href: '#student-research' },
        { name: 'Publications', href: '#publications' }
      ]
    },
    {
      name: 'Campus Life',
      href: '#campus-life',
      dropdown: [
        { name: 'Student Organizations', href: '#organizations' },
        { name: 'Housing & Dining', href: '#housing' },
        { name: 'Athletics', href: '#athletics' },
        { name: 'Events', href: '#events' }
      ]
    }
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-university-blue text-white py-2 text-sm">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@dovepeakuniversity.edu</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 hover:text-university-gold transition-colors">
                <Globe className="h-4 w-4" />
                <span>Portal</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-university-gold transition-colors">
                <Search className="h-4 w-4" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-university-blue p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-university-blue font-playfair">
                  Dovepeak University
                </h1>
                <p className="text-sm text-gray-600">Excellence in Education</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-university-blue font-medium transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </a>
                  
                  {/* Dropdown */}
                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-university-blue hover:text-white transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <button className="btn-primary">
                Apply Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-university-blue"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="container-custom py-4">
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="block text-gray-700 hover:text-university-blue font-medium"
                    >
                      {item.name}
                    </a>
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-sm text-gray-600 hover:text-university-blue"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
                <button className="btn-primary w-full mt-4">
                  Apply Now
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}