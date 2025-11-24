"use client";

import { useState } from "react";

interface HelpItem {
  id: number;
  title: string;
  description: string;
}

const helpData: HelpItem[] = [
  {
    id: 1,
    title: "Removing or Suppressing Negative Search Results",
    description:
      "I help push down or remove harmful content from search engines so your name shows up in a better light.",
  },
  {
    id: 2,
    title: "Fixing Your Google Search Presence",
    description:
      "I clean up and optimize how you appear on Google so people see a strong, trustworthy image.",
  },
  {
    id: 3,
    title: "Managing Bad PR or News",
    description:
      "I handle negative press or unfair news stories to reduce damage and protect your online reputation.",
  },
  {
    id: 4,
    title: "Removing Fake or Unfair Reviews",
    description:
      "I identify and report fake or damaging reviews that hurt your credibility and aim to get them removed.",
  },
  {
    id: 5,
    title: "Creating and Promoting Positive Online Content",
    description:
      "I publish content that reflects who you really are—positive, accurate, and aligned with your goals.",
  },
  {
    id: 6,
    title: "Building Trust and Authority with Online Assets",
    description:
      "I use websites, profiles, and press to build your online authority and make you look more credible.",
  },
];

const HelpAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Can I Help You With
          </h2>
          <p className="text-theme-primary text-lg mt-3">
            A complete set of reputation management solutions designed to
            protect and enhance your online presence.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {helpData.map((item, index) => (
            <div
              key={item.id}
              className="border-b space-y-2 rounded-xl bg-theme-background-muted py-4 px-6"
            >
              {/* Header */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center group text-left cursor-pointer"
              >
                <span
                  className="text-lg font-semibold group-hover:text-[#764ba2]"
                  style={{
                    color: openIndex === index ? "#764ba2" : "",
                  }}
                >
                  {item.title}
                </span>

                <span
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  } text-gray-700 text-2xl leading-none`}
                >
                  +
                </span>
              </button>

              {/* Content */}
              <div
                className={`overflow-hidden transition-all duration-300 bg-theme-background rounded-2xl ${
                  openIndex === index ? "max-h-40 py-2 px-6" : "max-h-0 px-6"
                }`}
              >
                <p className="leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpAccordion;
