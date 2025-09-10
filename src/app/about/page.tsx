"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const statsData = [
  { name: "Approval Rate", value: 90 },
  { name: "Credit Score Increase", value: 50 },
  { name: "Users", value: 100000 },
];

export default function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About TomoCredit</h1>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">TomoCredit is revolutionizing credit access by using alternative data to approve users without traditional credit checks. We help immigrants, students, and young professionals build credit history.</p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/14eeabd1-6b4b-4a68-82c2-7986e7cbbcc2.png" 
            alt="Group photo of diverse TomoCredit team members in a contemporary office environment, discussing ideas around a table with laptops and charts" 
            className="w-full rounded-lg"
          />
        </section>
      </div>
    </div>
  );
}
