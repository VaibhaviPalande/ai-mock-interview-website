import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Adjust path if needed

export const AboutPage = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 md:px-16 py-12 bg-white text-gray-800">
      {/* Hero Section */}
      <section className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 mb-12">
        <img
          src="/assets1/img/ai-inter.jpg"
          alt="Mock Interview Illustration"
          className="w-full md:w-1/2 rounded-xl shadow-md"
        />
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-[#2ad3a6]">About IntervuBot.ai</h1>
          <p className="text-lg leading-relaxed">
            The AI Mock Interview Platform is a cutting-edge tool designed to simulate real-world interview experiences using artificial intelligence. It helps users practice technical and behavioral questions, receive AI-generated feedback, and improve their interview performance in a safe and effective environment.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl grid md:grid-cols-2 gap-8 mb-16">
        {[
          { title: "🎤 Voice Recognition", desc: "Answer questions using your voice and receive real-time transcription and AI evaluation." },
          { title: "📹 Webcam Integration", desc: "Practice as if you're in a real video interview with optional webcam support." },
          { title: "🧠 AI Feedback", desc: "Get instant AI-powered feedback with scores and suggestions for improvement." },
          { title: "📝 Save & Review", desc: "Store your answers, review them anytime, and track your progress." },
        ].map(({ title, desc }) => (
          <div key={title} className="bg-[#2ad3a6] text-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p>{desc}</p>
          </div>
        ))}
      </section>

      {/* Bonus Ideas Section */}
      <section className="w-full max-w-5xl bg-gray-50 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4 text-[#2ad3a6]">💡 Bonus Ideas</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>ATS Resume Checker:</strong> Integrate a resume evaluation system that provides suggestions based on job description alignment.</li>
          <li><strong>Behavioral Question Mode:</strong> Train users specifically for HR/behavioral rounds with STAR format guidance.</li>
          <li><strong>Peer Review:</strong> Allow users to review each other's responses and provide constructive feedback.</li>
          <li><strong>Performance Analytics:</strong> Show performance trends, best scoring areas, and improvement tips.</li>
          <li><strong>Gamification:</strong> Award badges or levels based on completion and performance milestones.</li>
        </ul>
      </section>

      {/* GitHub & Contact Section */}
      <section className="text-center space-y-4">
        <h2 className="text-xl font-semibold">📂 View the Code</h2>
        <p>Want to explore the codebase or contribute to the project?</p>
        <Button asChild className="bg-[#2ad3a6] hover:bg-[#25b890] text-white px-6 py-2 rounded-lg">
          <a
            href="https://github.com/your-username/ai-mock-interview"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐 Visit GitHub Repository
          </a>
        </Button>

        <p className="text-sm text-gray-600 mt-4">
          Developed with 💙 by <span className="font-medium">Vaibhavi Bhaskar Palande</span><br />
          Connect: <a href="mailto:vaibhavi@example.com" className="text-[#2ad3a6] underline">vaibhavi.palande5@gmail.com</a>
        </p>
      </section>
    </div>
  );
};
