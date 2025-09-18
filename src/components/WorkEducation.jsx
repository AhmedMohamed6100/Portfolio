// src/components/WorkEducation.jsx
import React from "react";

export default function WorkEducation() {
  return (
    <section
      id="work-education"
      className="py-20 bg-background text-foreground" // ← نفس خلفية About لو بتستخدمها
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* النصوص (الشمال) */}
        <div>
          <h2 className="relative inline-block text-4xl md:text-5xl font-extrabold mb-10">
            <span className="relative z-10 -translate-y-10 inline-block">EDUCATION</span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-blue-500 rounded"></span>
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">
                Industry and Energy Technology
              </h3>
              <p className="text-sm text-muted-foreground italic">
                2023 / 2027
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                6 October University of Technology
              </h3>
            </div>
          </div>
        </div>

        {/* الصور (اليمين) */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/public/images/WhatsApp Image 2025-09-15 at 20.25.52_7299ffb3.jpg"
            alt="Education 1"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="grid gap-4">
            <img
              src="/public/images/WhatsApp Image 2025-09-15 at 20.25.55_3c92ad85.jpg"
              alt="Education 2"
              className="w-full h-60 object-cover rounded-lg"
            />
            <img
              src="/public/images/WhatsApp Image 2025-09-15 at 20.25.55_5e3589ce.jpg"
              alt="Education 3"
              className="w-full h-60 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
