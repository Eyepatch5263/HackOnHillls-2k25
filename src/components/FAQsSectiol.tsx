import React from 'react';
import { ChevronDown, ChevronUp, Code2, Trophy, Calendar, Users, MapPin } from 'lucide-react';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mb-4 bg-[#2B0F54] rounded-lg overflow-hidden border-2 border-[#9900FF] hover:border-[#FF00FF] transition-all">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[#FFD700] font-semibold">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-[#00FFFF]" />
        ) : (
          <ChevronDown className="text-[#00FFFF]" />
        )}
      </button>
      <div
        className={`px-6 py-4 text-[#00E6E6] bg-[#120458] transition-all duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {answer}
      </div>
    </div>
  );
}

function App() {
  const faqs = [
    {
      question: "What is HackOnHills 6.0?",
      answer: "HackOnHills 6.0 is a 48-hour coding experience organized by the App Team of NIT Hamirpur, where developers and tech enthusiasts come together to build innovative solutions."
    },
    {
      question: "When and where is the hackathon happening?",
      answer: "The event will take place from April 11 to April 13, 2024, at NIT Hamirpur."
    },
    {
      question: "Who is organizing the event?",
      answer: "HackOnHills 6.0 is proudly organized by the App Team of NIT Hamirpur."
    },
    {
      question: "Who can participate?",
      answer: "Anyone with a passion for coding—students, developers, and tech enthusiasts of all skill levels."
    },
    {
      question: "How do I register?",
      answer: "You can register on our official website: [Registration Link]. Participation is completely free!"
    },
    {
      question: "Are there prizes?",
      answer: "Yes! Exciting prizes, goodies, and swags await the best projects."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#120458] to-[#2B0F54] text-white">
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(18, 4, 88, 0.7)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#120458] to-transparent" />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-4 text-[#FF00FF] tracking-wider">
            HackOnHills <span className="text-[#00FFFF]">6.0</span>
          </h1>
          <p className="text-2xl text-[#FFD700]">Frequently Asked Questions</p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="container mx-auto px-4 -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#2B0F54] p-6 rounded-lg border-2 border-[#9900FF] text-center transform hover:scale-105 transition-all">
            <Calendar className="mx-auto mb-4 text-[#FF00FF]" size={32} />
            <h3 className="text-[#FFD700]">April 11-13, 2024</h3>
            <p className="text-[#00E6E6]">48 Hours</p>
          </div>
          <div className="bg-[#2B0F54] p-6 rounded-lg border-2 border-[#9900FF] text-center transform hover:scale-105 transition-all">
            <MapPin className="mx-auto mb-4 text-[#FF00FF]" size={32} />
            <h3 className="text-[#FFD700]">NIT Hamirpur</h3>
            <p className="text-[#00E6E6]">Venue</p>
          </div>
          <div className="bg-[#2B0F54] p-6 rounded-lg border-2 border-[#9900FF] text-center transform hover:scale-105 transition-all">
            <Code2 className="mx-auto mb-4 text-[#FF00FF]" size={32} />
            <h3 className="text-[#FFD700]">All Skill Levels</h3>
            <p className="text-[#00E6E6]">Welcome</p>
          </div>
          <div className="bg-[#2B0F54] p-6 rounded-lg border-2 border-[#9900FF] text-center transform hover:scale-105 transition-all">
            <Trophy className="mx-auto mb-4 text-[#FF00FF]" size={32} />
            <h3 className="text-[#FFD700]">Amazing Prizes</h3>
            <p className="text-[#00E6E6]">Win Big</p>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto pb-20">
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;