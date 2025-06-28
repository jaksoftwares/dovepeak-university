'use client'

import { Calendar, FileText, DollarSign, Users, CheckCircle, ArrowRight } from 'lucide-react'

export default function Admissions() {
  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete your online application with personal statement and transcripts"
    },
    {
      icon: Users,
      title: "Letters of Recommendation",
      description: "Provide 2-3 letters from teachers, counselors, or mentors"
    },
    {
      icon: CheckCircle,
      title: "Review Process",
      description: "Our admissions committee carefully reviews your complete application"
    },
    {
      icon: Calendar,
      title: "Decision Notification",
      description: "Receive your admission decision and next steps information"
    }
  ]

  const deadlines = [
    { type: "Early Decision", date: "November 15", status: "Priority" },
    { type: "Regular Decision", date: "January 15", status: "Standard" },
    { type: "Transfer Students", date: "March 1", status: "Rolling" },
    { type: "Graduate Programs", date: "Varies by Program", status: "Check Department" }
  ]

  return (
    <section id="admissions" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">
            Join Our Community
          </h2>
          <p className="text-large max-w-3xl mx-auto">
            Begin your journey at Dovepeak University. We're looking for students 
            who are passionate about learning, committed to excellence, and ready 
            to make a positive impact on the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Application Process */}
          <div>
            <h3 className="heading-tertiary mb-8">
              Application Process
            </h3>
            
            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-university-blue p-3 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {index + 1}. {step.title}
                      </h4>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 p-6 bg-university-blue rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">
                Need Help with Your Application?
              </h4>
              <p className="text-white/90 mb-4">
                Our admissions counselors are here to guide you through every step 
                of the application process.
              </p>
              <button className="btn-outline">
                Schedule a Consultation
              </button>
            </div>
          </div>

          {/* Deadlines and Requirements */}
          <div>
            <h3 className="heading-tertiary mb-8">
              Important Deadlines
            </h3>
            
            <div className="space-y-4 mb-8">
              {deadlines.map((deadline, index) => (
                <div key={index} className="card p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {deadline.type}
                      </h4>
                      <p className="text-gray-600">{deadline.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      deadline.status === 'Priority' 
                        ? 'bg-red-100 text-red-800'
                        : deadline.status === 'Standard'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {deadline.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Financial Aid */}
            <div className="card p-8">
              <div className="flex items-center space-x-3 mb-4">
                <DollarSign className="h-8 w-8 text-university-gold" />
                <h4 className="text-xl font-bold text-gray-900">
                  Financial Aid
                </h4>
              </div>
              <p className="text-gray-600 mb-4">
                We're committed to making education accessible. Over 85% of our 
                students receive some form of financial assistance.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-university-blue">$45M</div>
                  <div className="text-sm text-gray-600">Annual Aid Awarded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-university-blue">85%</div>
                  <div className="text-sm text-gray-600">Students Receive Aid</div>
                </div>
              </div>
              <button className="btn-secondary w-full">
                Calculate Your Aid
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-university-blue to-university-gold rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Application?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards your future at Dovepeak University. 
              Your journey to excellence begins here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-outline flex items-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="btn-outline">
                Schedule Campus Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}