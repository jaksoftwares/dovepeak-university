'use client'

import { Users, Home, Trophy, Calendar, Music, Heart } from 'lucide-react'

export default function CampusLife() {
  const activities = [
    {
      icon: Users,
      title: "Student Organizations",
      count: "300+",
      description: "From academic clubs to cultural organizations, find your community"
    },
    {
      icon: Trophy,
      title: "Athletic Teams",
      count: "25",
      description: "Compete at the highest level in NCAA Division I athletics"
    },
    {
      icon: Music,
      title: "Arts & Culture",
      count: "50+",
      description: "Concerts, theater productions, and art exhibitions year-round"
    },
    {
      icon: Heart,
      title: "Community Service",
      count: "15K",
      description: "Hours of community service contributed by students annually"
    }
  ]

  const facilities = [
    {
      name: "Student Recreation Center",
      description: "State-of-the-art fitness facilities, pools, and courts",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Dining Commons",
      description: "Award-winning dining with diverse culinary options",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Student Union",
      description: "The heart of campus social life and activities",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ]

  return (
    <section id="campus-life" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">
            Vibrant Campus Life
          </h2>
          <p className="text-large max-w-3xl mx-auto">
            Experience a rich and diverse campus community where lifelong 
            friendships are formed, leadership skills are developed, and 
            memories are made that will last a lifetime.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div key={index} className="card p-8 text-center group hover:scale-105">
                <div className="bg-university-blue p-4 rounded-lg w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-university-blue mb-2">
                  {activity.count}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600">
                  {activity.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Housing Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="heading-tertiary mb-6">
              On-Campus Housing
            </h3>
            <p className="text-large mb-6">
              Live and learn in our modern residence halls designed to foster 
              community, academic success, and personal growth. From traditional 
              dorms to apartment-style living, we have options for every preference.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Home className="h-5 w-5 text-university-blue" />
                <span>15 Residence Halls</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-university-blue" />
                <span>12,000 Students Living On Campus</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-university-blue" />
                <span>Year-Round Housing Available</span>
              </div>
            </div>
            <button className="btn-primary">
              Explore Housing Options
            </button>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Campus Housing"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-university-gold rounded-xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-white/90 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Facilities */}
        <div>
          <h3 className="heading-tertiary text-center mb-12">
            World-Class Facilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {facility.name}
                  </h4>
                  <p className="text-gray-600">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events Calendar */}
        <div className="mt-16 bg-university-blue rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Upcoming Events
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Stay connected with campus life through our exciting calendar 
              of events, from academic lectures to cultural celebrations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-university-gold font-bold mb-2">Mar 15</div>
                <h4 className="text-white font-semibold mb-2">Spring Concert</h4>
                <p className="text-white/80 text-sm">Annual music festival featuring student and guest performers</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-university-gold font-bold mb-2">Mar 22</div>
                <h4 className="text-white font-semibold mb-2">Career Fair</h4>
                <p className="text-white/80 text-sm">Connect with top employers and explore internship opportunities</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-university-gold font-bold mb-2">Apr 5</div>
                <h4 className="text-white font-semibold mb-2">Research Symposium</h4>
                <p className="text-white/80 text-sm">Showcase of undergraduate and graduate research projects</p>
              </div>
            </div>
            <button className="btn-outline">
              View Full Calendar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}