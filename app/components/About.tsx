'use client'

import { Award, Users, Globe, BookOpen } from 'lucide-react'

export default function About() {
  const achievements = [
    {
      icon: Award,
      title: "Top 50 University",
      description: "Ranked among the top 50 universities globally for academic excellence"
    },
    {
      icon: Users,
      title: "Diverse Community",
      description: "Students from over 80 countries creating a vibrant multicultural environment"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Research and initiatives that address worldwide challenges and opportunities"
    },
    {
      icon: BookOpen,
      title: "150+ Programs",
      description: "Comprehensive academic offerings across multiple disciplines and levels"
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="heading-secondary">
              About Dovepeak University
            </h2>
            <p className="text-large mb-6">
              Founded in 1875, Dovepeak University has been at the forefront of higher education 
              for nearly 150 years. We are committed to fostering intellectual curiosity, 
              promoting innovative research, and preparing students to become leaders in their fields.
            </p>
            <p className="text-large mb-8">
              Our mission is to provide transformative educational experiences that empower 
              students to make meaningful contributions to society while advancing knowledge 
              through groundbreaking research and scholarship.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-university-blue p-3 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Dovepeak University Campus"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-university-blue/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-university-blue">148</div>
                <div className="text-gray-600 text-sm">Years of Excellence</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-university-gold rounded-xl shadow-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">$2.1B</div>
                <div className="text-white/90 text-sm">Research Funding</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}