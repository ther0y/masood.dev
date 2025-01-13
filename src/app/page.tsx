"use client";

import { Hero } from "@/components/Hero";
import React from "react";
import { WorkCard } from "@/components/WorkCard";

export default function Home() {
  const workItems = [
    {
      color: "bg-blue-400",
      title: "Lead Web Developer",
      company: "Global Work & Travel",
      period: "2019 - Present",
      description:
        "Redesigned and maintained the company's web platforms, enhancing user experience for travelers booking working holidays, internships, and volunteer programs. Implemented scalable solutions for payment processing, travel packages, and customer support systems.",
      link: "#",
    },
    {
      color: "bg-green-400",
      title: "Freelance Web / Mobile App Developer",
      company: "Freelance",
      period: "2016 - 2019",
      description:
        "Specialized in developing mobile and web applications using Flutter, Laravel, and other modern technologies. Delivered tailored solutions for clients across various industries.",
      link: "#",
    },
    {
      color: "bg-red-400",
      title: "Senior Web Developer",
      company: "Golbisheh",
      period: "2015 - 2016",
      description:
        "Focused on building e-commerce platforms using the .NET Framework and other tools. Contributed to full-stack development and optimization of web solutions.",
      link: "#",
    },
    {
      color: "bg-red-400",
      title: "Web Developer",
      company: "IWave",
      period: "2013 - 2015",
      description:
        "Designed and developed web applications using AngularJS, Node.js, and other frameworks. Delivered seamless UI/UX for various client projects.",
      link: "#",
    },
    {
      color: "bg-red-400",
      title: "Junior Web / Application Developer",
      company: "Payatech",
      period: "2011 - 2013",
      description:
        "Developed Web Applications for time attendance devices, leveraging Backbone.js and jQuery to create reliable and efficient solutions for workforce management.",
      link: "#",
    },
  ];

  return (
    <div className="space-y-0 pt-10">
      <Hero />

      {/* Work Items */}
      <div className="space-y-6 !:mt-4">
        {workItems.map((item, index) => (
          <WorkCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
