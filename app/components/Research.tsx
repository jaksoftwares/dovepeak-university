'use client'

import { Microscope, Lightbulb, Globe, TrendingUp, Users, Award } from 'lucide-react'

export default function Research() {
  const researchAreas = [
    {
      icon: Microscope,
      title: "Biomedical Sciences",
      description: "Advancing healthcare through innovative medical research and biotechnology",
      funding: "$125M",
      projects: 45
    },
    {
      icon: Globe,
      title: "Climate & Environment",
      description: "Addressing climate change and environmental sustainability challenges",
      funding: "$89M",
      projects: 32
    },
    {
      icon: Lightbulb,
      title: "Artificial Intelligence",
      description: "Developing next-generation AI and machine learning technologies",
      funding: "$156M",
      projects: 38
    },
    {
      icon: TrendingUp,
      title: "Economic Policy",
      description: "Researching economic trends and policy implications for society",
      funding: "$67M",
      projects: 28
    }
  ]

  const achievements = [
    { number: "$2.1B", label: "Total Research Funding" },
    { number: "450+", label: "Active Research Projects" },
    { number: "15", label: "Research Centers" },
    { number: "2,500+", label: "Publications Annually" }
  ]

  return (
    <section id="research" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">
            Leading Research & Innovation
          </h2>
          <p className="text-large max-w-3xl mx-auto">
            At Dovepeak University, we're pushing the boundaries of knowledge 
            and creating solutions for tomorrow's challenges through groundbreaking 
            research across multiple disciplines.
          </p>
        </div>

        {/* Research Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div key={index} className="card p-8 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-university-blue p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {area.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-6">
                        <div>
                          <div className="text-lg font-bold text-university-blue">
                            {area.funding}
                          </div>
                          <div className="text-sm text-gray-600">Funding</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-university-blue">
                            {area.projects}
                          </div>
                          <div className="text-sm text-gray-600">Projects</div>
                        </div>
                      </div>
                      <button className="text-university-blue hover:text-university-blue-dark font-medium">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Research Stats */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Research by the Numbers
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-university-blue mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Research */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="heading-tertiary mb-6">
              Featured Research Initiative
            </h3>
            <h4 className="text-2xl font-bold text-university-blue mb-4">
              Sustainable Energy Solutions Lab
            </h4>
            <p className="text-large mb-6">
              Our interdisciplinary team is developing revolutionary clean energy 
              technologies that could transform how we power our world. From 
              advanced solar cells to next-generation battery storage, we're 
              leading the charge toward a sustainable future.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-university-blue" />
                <span>25 Faculty Researchers</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-university-blue" />
                <span>$45M NSF Grant Recipient</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-university-blue" />
                <span>Global Impact Potential</span>
              </div>
            </div>
            <button className="btn-primary">
              Explore Research Centers
            </button>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Research Laboratory"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-university-blue/20 to-transparent rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}