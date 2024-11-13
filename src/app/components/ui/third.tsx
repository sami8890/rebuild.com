import React from "react";
import { Award, Globe, Clock, Shield, Users, Handshake } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Globe className="w-10 h-10 text-orange-500" />,
      title: "Global Expertise",
      description: "A multi-lingual team serving clients worldwide with a personalized approach.",
    },
    {
      icon: <Clock className="w-10 h-10 text-orange-500" />,
      title: "Rapid Response",
      description: "Round-the-clock support with guaranteed response times under 2 hours.",
    },
    {
      icon: <Shield className="w-10 h-10 text-orange-500" />,
      title: "Trusted Security",
      description: "Fully licensed and insured services for secure real estate transactions.",
    },
    {
      icon: <Award className="w-10 h-10 text-orange-500" />,
      title: "Industry Leaders",
      description: "Over 15 years of expertise in Berlin &apos;s competitive real estate market.",
    },
    {
      icon: <Users className="w-10 h-10 text-orange-500" />,
      title: "Dedicated Professionals",
      description: "A diverse team of experts specializing in every aspect of real estate.",
    },
    {
      icon: <Handshake className="w-10 h-10 text-orange-500" />,
      title: "Comprehensive Support",
      description: "Full-service solutions from property search to closing and beyond.",
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Choose First Citiz Real Estate
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            With over 15 years of proven expertise in Berlin`&apos;`s real estate market, we offer comprehensive, tailored services to guide you through every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={`feature-${index}`}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
