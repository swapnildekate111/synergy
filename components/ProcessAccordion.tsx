"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  number: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    number: "01",
    question: "What types of businesses do you work with?",
    answer:
      "We primarily partner with small and mid-sized businesses (SMBs), distributors, field service contractors, healthcare clinics, e-commerce brands, and traditional non-technical companies that have outgrown off-the-shelf software or unwieldy spreadsheets.",
  },
  {
    number: "02",
    question: "Can you build software specifically tailored to my business workflows?",
    answer:
      "Yes, custom engineering is our core specialty. We map our code around your exact operational rules, role permissions, client billing requirements, and supply chains—rather than forcing you to adjust your business to a generic tool.",
  },
  {
    number: "03",
    question: "How is project pricing and scope determined?",
    answer:
      "We provide fixed-price quotes with clearly documented scope phases. Every deliverable is tied to an explicit review milestone, ensuring zero budgetary surprises or billing creep.",
  },
  {
    number: "04",
    question: "Will I truly own all source code and intellectual property?",
    answer:
      "Unconditionally yes. All source code, database architectures, graphics, and documentation are transferred to your company upon invoice completion. We do not retain licensing claims or proprietary dependencies.",
  },
  {
    number: "05",
    question: "Where will my business data and customer information be stored?",
    answer:
      "Directly within your own cloud tenant (AWS, Azure, Google Cloud, or Supabase). You control database encryption keys, regional compliance residency (US, EU GDPR, UK, UAE, AU), and access rights.",
  },
  {
    number: "06",
    question: "Can you manage and maintain the software after launch?",
    answer:
      "Yes. We offer flexible ongoing stewardship retainers for monitoring, operating system and library patches, automated backup checks, and agile ongoing feature enhancement.",
  },
  {
    number: "07",
    question: "Can you modernize an existing legacy business website or internal application?",
    answer:
      "Absolutely. We perform zero-downtime refactors, database migrations, and UI/UX modernization on legacy PHP, ASP.NET, Access, or Excel tools, safely modernizing your tech stack without business halts.",
  },
  {
    number: "08",
    question: "Do you work with international clients across different time zones?",
    answer:
      "Yes, our teams operate in synchronized shifts to guarantee overlapping working hours for businesses in North America (EST/CST/PST), the United Kingdom, Europe (CET), Australia (AEST), and the UAE.",
  },
];

export default function ProcessAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faqs-section"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 my-12 lg:my-20 w-full"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 sm:mb-12">
        <div className="px-4 py-1.5 rounded-[10px] bg-[#b9ff66] text-[#191a23] text-xl sm:text-2xl font-bold border-2 border-[#191a23] shadow-[0_3px_0_#1a1b24] w-fit">
          FAQs
        </div>
        <p className="text-base sm:text-lg text-[#47464b] max-w-xl">
          Clear answers regarding intellectual property, technical ownership, pricing, and project timelines.
        </p>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.number}
              className={`rounded-[24px] sm:rounded-[28px] border-2 border-[#191a23] shadow-[0_4px_0_#1a1b24] transition-all duration-200 overflow-hidden ${
                isOpen ? "bg-[#b9ff66]" : "bg-[#f3f3f3] hover:bg-[#e8e8e8]"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full p-5 sm:px-8 sm:py-6 flex items-center justify-between text-left cursor-pointer transition-colors focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4 sm:gap-6 pr-4">
                  <span className="text-xl sm:text-2xl font-black text-[#191a23]">
                    {faq.number}
                  </span>
                  <span className="text-base sm:text-xl font-bold text-[#191a23] leading-snug">
                    {faq.question}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#191a23] flex items-center justify-center font-bold text-[#191a23] flex-shrink-0 shadow-[0_2px_0_#1a1b24]">
                  {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-8 pb-6 animate-fadeIn">
                  <div className="border-t-2 border-[#191a23]/20 pt-4">
                    <p className="text-sm sm:text-base text-[#191a23] font-medium leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
