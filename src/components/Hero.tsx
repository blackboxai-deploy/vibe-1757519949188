import React from "react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Build Credit Without Credit History</h1>
        <p className="text-xl mb-8">Get approved based on your bank account and income - no credit check required.</p>
        <a href="/apply" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">Apply Now</a>
      </div>
      <img 
        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/37ae9365-11b6-458d-ba6a-b0d8bf0c4215.png" 
        alt="Illustration of a sleek credit card surrounded by financial data graphs and bank icons in a minimalist modern style" 
        className="absolute bottom-0 left-0 w-full opacity-30"
      />
    </section>
  );
}
