'use client'

import { BookOpen, Microscope, Calculator, Palette, Briefcase, Heart } from 'lucide-react'

export default function Academics() {
  const schools = [
    {
      icon: BookOpen,
      name: "School of Liberal Arts",
      programs: 25,
      description: "Literature, History, Philosophy, Languages, and Cultural Studies",
      color: "bg-blue-500"
    },
    {
      icon: Microscope,
      name: "School of Sciences",
      programs: 18,
      description: "Biology, Chemistry, Physics, Environmental Science, and Mathematics",
      color: "bg-green-500"
    },
    {
      icon: Calculator,
      name: "School of Engineering",
      programs: 12,
      description: "Computer Science, Electrical, Mechanical, and Civil Engineering",
      color: "bg-purple-500"
    },
    {
      icon: Briefcase,
      name: "School of Business",
      programs: 15,
      description: "MBA, Finance, Marketing, Management, and Entrepreneurship",
      color: "bg-orange-500"
    },
    {
      icon: Heart,
      name: "School of Medicine",
      programs: 8,
      description: "Medical Doctor, Nursing, Public Health, and Biomedical Sciences",
      color: "bg-red-500"
    },
    {
      icon: Palette,
      name: "School of Arts",
      programs: 20,
      description: "Fine Arts, Music, Theater, Digital Media, and Design",
      color: "bg-pink-500"
    }
  ]

  const features = [
    "Small class sizes with 15:1 student-to-faculty ratio",
    "Hands-on learning and research opportunities",
    "Industry partnerships and internship programs",
    "Study abroad programs in 40+ countries",
    "State-of-the-art laboratories and facilities",
    "Flexible degree programs and dual majors"
  ]

  return (
    <section id="academics" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">
            Academic Excellence
          </h2>
          <p className="text-large max-w-3xl mx-auto">
            Discover world-class education across six distinguished schools, 
            offering over 150 undergraduate and graduate programs designed 
            to prepare you for success in your chosen field.
          </p>
        </div>

        {/* Schools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {schools.map((school, index) => {
            const Icon = school.icon
            return (
              <div key={index} className="card p-8 group hover:scale-105">
                <div className={`${school.color} p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {school.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {school.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-university-blue">
                    {school.programs} Programs
                  </span>
                  <button className="text-university-blue hover:text-university-blue-dark font-medium">
                    Learn More →
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Features */}
        <div className="bg-university-blue rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Why Choose Dovepeak University?
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-university-gold rounded-full flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="btn-outline mt-8">
                View All Programs
              </button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Students studying"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-university-gold rounded-xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-white/90 text-sm">Graduate Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}