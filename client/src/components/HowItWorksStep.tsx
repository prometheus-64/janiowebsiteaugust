import React from 'react';
import { cn } from "@/lib/utils";

interface HowItWorksStepProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const HowItWorksStep: React.FC<HowItWorksStepProps> = ({
  stepNumber,
  title,
  description,
  icon,
  isLast = false
}) => {
  return (
    <div className="relative">
      {/* Card Container */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden">
        {/* Background Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        

        
        <div className="relative z-10 text-center">
          {/* Step Number Badge */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg mb-6">
            {stepNumber}
          </div>
          
          {/* Icon Circle */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white shadow-md mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksStep;