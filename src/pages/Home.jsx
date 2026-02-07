import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 pt-28 px-6">
        <div className="max-w-5xl mx-auto text-center text-white">
          
          {/* HERO */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Learn Smarter with <span className="text-yellow-300">AI</span>
          </h1>

          <p className="text-lg md:text-xl mb-8 opacity-90">
            Personalized learning powered by artificial intelligence.
          </p>

          {/* CTA */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/learning"
              className="bg-white text-indigo-600 px-7 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Start Learning
            </Link>

            <Link
              to="/about"
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition"
            >
              About Us
            </Link>
          </div>

          {/* FEATURES */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              
              <h3 className="text-lg font-semibold mb-2">
                Personalized Learning
              </h3>
              <p className="text-sm text-white/90">
                AI adapts lessons to your pace and goals.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              
              <h3 className="text-lg font-semibold mb-2">
                AI Tutor Assistance
              </h3>
              <p className="text-sm text-white/90">
                Ask questions and get instant help.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              
              <h3 className="text-lg font-semibold mb-2">
                Progress Tracking
              </h3>
              <p className="text-sm text-white/90">
                Track your learning with smart dashboards.
              </p>
            </div>
          </div>

          {/* WHO IS THIS FOR */}
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Who Is This For?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 transform hover:-translate-y-1 hover:bg-white/20 transition">
                <div className="text-3xl mb-2">🎓</div>
                <p className="font-semibold">Students</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 transform hover:-translate-y-1 hover:bg-white/20 transition">
                <div className="text-3xl mb-2">💻</div>
                <p className="font-semibold">Developers</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 transform hover:-translate-y-1 hover:bg-white/20 transition">
                <div className="text-3xl mb-2">📚</div>
                <p className="font-semibold">Lifelong Learners</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
