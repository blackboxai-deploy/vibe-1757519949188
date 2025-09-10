import React from "react";

interface Step {
  title: string;
  description: string;
}

interface StepperProps {
  steps: Step[];
}

export function Stepper({ steps }: StepperProps) {
  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            {index + 1}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
