'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Color palette
const colors = {
  neonPurple: '#9900FF',
  egyptianGold: '#FFD700',
  synthwavePink: '#FF00FF',
  tealBlue: '#00FFFF',
  midnightBlue: '#120458',
  deepPurple: '#2B0F54',
  sunsetOrange: '#FF6B35',
  black: '#000000',
  retrowaveTurquoise: '#00E6E6',
  electricYellow: '#F9DC5C',
  magenta: '#E31C79',
  digitalLavender: '#A15CFF',
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="w-full flex justify-between items-center p-4 rounded-lg"
        style={{
          background: `linear-gradient(135deg, ${colors.deepPurple}, ${colors.midnightBlue})`,
          border: `2px solid ${colors.neonPurple}`,
          color: colors.electricYellow,
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6" style={{ color: colors.synthwavePink }} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div
              className="p-4 rounded-b-lg"
              style={{
                background: colors.black,
                color: colors.retrowaveTurquoise,
                border: `2px solid ${colors.digitalLavender}`,
                borderTop: 'none',
              }}
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "What is Hack on Hills?",
      answer: "Hack on Hills is an annual hackathon that brings together innovative minds to create amazing projects in a competitive and collaborative environment."
    },
    {
      question: "Who can participate?",
      answer: "Any college student with a passion for technology and innovation can participate. Teams can consist of 2-4 members."
    },
    {
      question: "What are the prizes?",
      answer: "We offer exciting prizes including cash rewards, sponsor goodies, and opportunities for internships and mentorship."
    },
    {
      question: "Is it free to participate?",
      answer: "Yes, participation is completely free! We provide all necessary resources, including meals and refreshments during the event."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, student ID, and any other hardware you might need for your project. Don't forget your enthusiasm and creativity!"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8" style={{ background: colors.midnightBlue }}>
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-4xl font-bold text-center mb-12"
          style={{ 
            color: colors.egyptianGold,
            textShadow: `0 0 10px ${colors.neonPurple}, 0 0 20px ${colors.synthwavePink}`,
          }}
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 