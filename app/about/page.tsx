import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Award, Briefcase, Clock } from 'lucide-react'
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 relative">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/night.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 py-20 relative z-20 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl">
              K Engineering & Construction is a premier construction company with expertise in infrastructure,
              industrial, commercial, and residential projects.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead K Engineering & Construction with vision and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kaarthik Natarajan */}
            <div className="bg-white rounded-xl overflow-hidden group border border-gray-100 hover:border-[#3D8361]/30 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="bg-gradient-to-r from-[#3D8361]/10 to-[#3D8361]/5 p-1">
                <div className="bg-white p-6 rounded-t-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-[#3D8361] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      KN
                    </div>
                    <div className="w-20 h-1 bg-[#3D8361]"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-gray-900">Kaarthik Natarajan</h3>
                  <p className="text-[#3D8361] font-medium mb-4 inline-block px-3 py-1 bg-[#3D8361]/10 rounded-full text-sm">Director</p>
                </div>
              </div>
              <div className="p-6 pt-2">
                <div className="mb-6 space-y-3">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-[#3D8361] mt-0.5 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="text-gray-700 font-medium">Qualification</p>
                      <p className="text-gray-600">B.E (Civil), PGP ACM (Construction management from NICMAR - Pune)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[#3D8361] mt-0.5 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="text-gray-700 font-medium">Experience</p>
                      <p className="text-gray-600">11+ Years</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-gray-600 italic">
                    "Leads the company with innovative approaches to construction management and project execution."
                  </p>
                </div>
              </div>
            </div>

            {/* Singaravelan */}
            <div className="bg-white rounded-xl overflow-hidden group border border-gray-100 hover:border-[#3D8361]/30 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="bg-gradient-to-r from-[#3D8361]/10 to-[#3D8361]/5 p-1">
                <div className="bg-white p-6 rounded-t-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-[#3D8361] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      SV
                    </div>
                    <div className="w-20 h-1 bg-[#3D8361]"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-gray-900">Singaravelan</h3>
                  <p className="text-[#3D8361] font-medium mb-4 inline-block px-3 py-1 bg-[#3D8361]/10 rounded-full text-sm">Technical Director</p>
                </div>
              </div>
              <div className="p-6 pt-2">
                <div className="mb-6 space-y-3">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-[#3D8361] mt-0.5 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="text-gray-700 font-medium">Qualification</p>
                      <p className="text-gray-600">B.E (Civil)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[#3D8361] mt-0.5 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="text-gray-700 font-medium">Experience</p>
                      <p className="text-gray-600">30+ Years</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-gray-600 italic">
                    "Brings extensive technical expertise and industry knowledge to ensure project quality and compliance."
                  </p>
                </div>
              </div>
            </div>

            {/* Krishnamoorthi */}
            <div className="bg-white rounded-xl overflow-hidden group border border-gray-100 hover:border-[#3D8361]/30 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="bg-gradient-to-r from-[#3D8361]/10 to-[#3D8361]/5 p-1">
                <div className="bg-white p-6 rounded-t-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-[#3D8361] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      KM
                    </div>
                    <div className="w-20 h-1 bg-[#3D8361]"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-gray-900">Krishnamoorthi</h3>
                  <p className="text-[#3D8361] font-medium mb-4 inline-block px-3 py-1 bg-[#3D8361]/10 rounded-full text-sm">Operations Director</p>
                </div>
              </div>
              <div className="p-6 pt-2">
                <div className="mb-6 space-y-3">
                  <div className="flex items-start">
                    <Briefcase className="h-5 w-5 text-[#3D8361] mt-0.5 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="text-gray-700 font-medium">Role</p>
                      <p className="text-gray-600">Oversees all project operations and resource management</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[#3D8361] mt-0.5 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="text-gray-700 font-medium">Experience</p>
                      <p className="text-gray-600">35+ Years</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-gray-600 italic">
                    "Oversees project operations with a focus on efficiency, timely delivery, and resource optimization."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#2A5D3C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contact our team today to discuss your construction needs and how we can bring your vision to life.
          </p>
          <Button size="lg" className="bg-white text-[#2A5D3C] hover:bg-gray-100">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
