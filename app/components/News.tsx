'use client'

import { Calendar, ArrowRight, Award, Users, Microscope } from 'lucide-react'

export default function News() {
  const news = [
    {
      id: 1,
      category: "Research",
      title: "Dovepeak Scientists Develop Revolutionary Cancer Treatment",
      excerpt: "Breakthrough research in immunotherapy shows promising results in clinical trials, offering new hope for cancer patients worldwide.",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Microscope,
      featured: true
    },
    {
      id: 2,
      category: "Achievement",
      title: "University Ranks #1 in Student Satisfaction",
      excerpt: "Latest national survey places Dovepeak University at the top for overall student experience and academic excellence.",
      date: "March 8, 2024",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Award
    },
    {
      id: 3,
      category: "Community",
      title: "Students Launch Global Sustainability Initiative",
      excerpt: "Student-led program partners with international organizations to address climate change through innovative solutions.",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Users
    },
    {
      id: 4,
      category: "Research",
      title: "AI Lab Receives $50M Federal Grant",
      excerpt: "Major funding will accelerate research in artificial intelligence and machine learning applications for healthcare.",
      date: "March 3, 2024",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Microscope
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Research':
        return 'bg-blue-100 text-blue-800'
      case 'Achievement':
        return 'bg-green-100 text-green-800'
      case 'Community':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <section id="news" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">
            Latest News & Updates
          </h2>
          <p className="text-large max-w-3xl mx-auto">
            Stay informed about the latest developments, achievements, and 
            innovations happening across our university community.
          </p>
        </div>

        {/* Featured Article */}
        {news.filter(article => article.featured).map((article) => {
          const Icon = article.icon
          return (
            <div key={article.id} className="card overflow-hidden mb-12 group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon className="h-5 w-5 text-university-blue" />
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <button className="btn-primary w-fit flex items-center space-x-2">
                    <span>Read Full Story</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          )
        })}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.filter(article => !article.featured).map((article) => {
            const Icon = article.icon
            return (
              <div key={article.id} className="card overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon className="h-4 w-4 text-university-blue" />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-university-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {article.date}
                    </span>
                    <button className="text-university-blue hover:text-university-blue-dark font-medium text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-university-blue to-university-gold rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Connected
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss important updates, 
            events, and achievements from the Dovepeak University community.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="btn-outline whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}