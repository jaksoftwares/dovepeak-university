'use client'

import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  ArrowRight
} from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Research', href: '#research' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'News & Events', href: '#news' }
  ]

  const resources = [
    { name: 'Student Portal', href: '#portal' },
    { name: 'Faculty Directory', href: '#faculty' },
    { name: 'Library', href: '#library' },
    { name: 'Career Services', href: '#careers' },
    { name: 'Alumni Network', href: '#alumni' },
    { name: 'Emergency Info', href: '#emergency' }
  ]

  const schools = [
    { name: 'School of Liberal Arts', href: '#liberal-arts' },
    { name: 'School of Sciences', href: '#sciences' },
    { name: 'School of Engineering', href: '#engineering' },
    { name: 'School of Business', href: '#business' },
    { name: 'School of Medicine', href: '#medicine' },
    { name: 'School of Arts', href: '#arts' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
    { icon: Youtube, href: '#youtube', label: 'YouTube' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* University Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-university-blue p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-playfair">
                  Dovepeak University
                </h3>
                <p className="text-gray-400">Excellence in Education</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              For nearly 150 years, Dovepeak University has been committed to 
              providing transformative educational experiences that prepare 
              students to become leaders and innovators in their fields.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-university-gold flex-shrink-0" />
                <span className="text-gray-300">
                  123 University Avenue, Academic City, AC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-university-gold flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-university-gold flex-shrink-0" />
                <span className="text-gray-300">info@dovepeakuniversity.edu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-university-gold transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-university-gold transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Schools */}
          <div>
            <h4 className="text-lg font-bold mb-6">Schools & Colleges</h4>
            <ul className="space-y-3">
              {schools.map((school) => (
                <li key={school.name}>
                  <a
                    href={school.href}
                    className="text-gray-300 hover:text-university-gold transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {school.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media & Newsletter */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="bg-gray-800 hover:bg-university-blue p-3 rounded-lg transition-colors group"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-university-blue focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Dovepeak University. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-university-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-university-gold transition-colors">
                Terms of Service
              </a>
              <a href="#accessibility" className="text-gray-400 hover:text-university-gold transition-colors">
                Accessibility
              </a>
              <a href="#contact" className="text-gray-400 hover:text-university-gold transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}