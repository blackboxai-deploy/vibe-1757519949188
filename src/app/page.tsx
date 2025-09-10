import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import { Stepper } from "@/components/Stepper";

export default function Home() {
  const features = [
    { title: "No Credit Check", description: "Get approved using bank data instead of credit score." },
    { title: "Cashback Rewards", description: "Earn up to 1% cashback on all purchases." },
    { title: "Build Credit Fast", description: "Report payments to credit bureaus monthly." },
  ];

  const steps = [
    { title: "Apply Online", description: "Fill out a quick application form." },
    { title: "Connect Bank", description: "Link your bank account for verification." },
    { title: "Get Approved", description: "Receive instant decision and card details." },
  ];

  const testimonials = [
    { quote: "TomoCredit helped me build my credit from scratch!", author: "Jane D." },
    { quote: "No credit check was a game-changer for me.", author: "John S." },
  ];

  return (
    <div>
      <Hero />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TomoCredit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <Stepper steps={steps} />
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
