'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: "Shape Your Future at Dovepeak University",
    subtitle: "Where Excellence Meets Innovation",
    description: "Join a community of scholars, researchers, and leaders who are making a difference in the world.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    cta: "Explore Programs"
  },
  {
    id: 2,
    title: "World-Class Research Opportunities",
    subtitle: "Discover. Innovate. Transform.",
    description: "Engage in groundbreaking research alongside renowned faculty and contribute to solutions for global challenges.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    cta: "Research Centers"
  },
  {
    id: 3,
    title: "Vibrant Campus Community",
    subtitle: "Learn. Grow. Connect.",
    description: "Experience a rich campus life with diverse student organizations, athletics, and cultural events.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    cta: "Campus Life"
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="gradient-overlay" />
          
          <div className="relative h-full flex items-center">
            <div className="container-custom">
              <div className="max-w-3xl text-white">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-playfair animate-fade-in-up">
                  {slide.title}
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-university-gold animate-fade-in-up">
                  {slide.subtitle}
                </h2>
                <p className="text-xl lg:text-2xl mb-8 leading-relaxed animate-fade-in-up">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
                  <button className="btn-primary flex items-center space-x-2">
                    <span>{slide.cta}</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <button className="btn-outline flex items-center space-x-2">
                    <Play className="h-5 w-5" />
                    <span>Watch Video</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Quick Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm">
        <div className="container-custom py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-university-blue">25,000+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-university-blue">1,200+</div>
              <div className="text-gray-600">Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-university-blue">150+</div>
              <div className="text-gray-600">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-university-blue">95%</div>
              <div className="text-gray-600">Employment Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}