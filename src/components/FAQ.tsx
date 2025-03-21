"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// FAQ data - replace with your actual hackathon FAQs
const faqData = [
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is a collaborative event where programmers, designers, and others come together to build projects in a short period of time, usually 24-48 hours. It's a great opportunity to learn new skills, meet new people, and build something cool!",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "Not necessarily! Hackathons welcome participants with various skill sets. While coding knowledge is helpful, teams need designers, project managers, and people with domain expertise. If you're new to coding, hackathons are a great place to learn!",
  },
  {
    question: "How do teams work?",
    answer:
      "Teams typically consist of 2-5 people. You can form a team beforehand or find teammates during the team formation event at the beginning of the hackathon. We encourage diverse teams with a mix of skills and backgrounds.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your laptop, charger, any hardware you plan to use, and personal items like toiletries and a change of clothes if it's an overnight event. Some participants also bring sleeping bags or blankets for power naps.",
  },
  {
    question: "Will there be food provided?",
    answer:
      "We provide meals, snacks, and beverages throughout the event to keep you energized and focused on your projects.",
  },
]

function AccordionItem({ question, answer, isOpen, toggleOpen }: {
  question: string
  answer: string
  isOpen: boolean
  toggleOpen: () => void
}) {
  return (
    <div className="border-b border-slate-700 last:border-0">
      <button
        className="flex w-full justify-between items-center py-4 text-left text-slate-100 hover:text-slate-200"
        onClick={toggleOpen}
      >
        <span className="font-medium">{question}</span>
        <ChevronDown 
          className={cn(
            "h-5 w-5 transition-transform duration-200",
            isOpen && "transform rotate-180"
          )} 
        />
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="py-4 text-slate-300">
          {answer}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Filter FAQs based on search query
  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <section className="w-full py-12 bg-slate-900 text-slate-50">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Frequently Asked Questions</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">Everything you need to know about the hackathon.</p>
        </div>

        <div className="relative mb-8 max-w-md mx-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            type="search"
            placeholder="Search questions..."
            className="pl-8 bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-400 focus-visible:ring-slate-500"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="w-full divide-y divide-slate-700 rounded-lg overflow-hidden">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))
          ) : (
            <div className="text-center py-8 text-slate-400">
              No matching questions found. Try a different search term.
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 