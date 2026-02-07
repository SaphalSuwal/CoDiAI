import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 pt-28 px-6">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Hero */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Learn Smarter with AI
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Personalized learning powered by artificial intelligence.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
  to="/learning"
  className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition"
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
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 hover:bg-white/20 transition">
              <h3 className="text-lg font-semibold mb-2">
                Personalized Learning
              </h3>
              <p className="text-sm text-white/90">
                AI adapts lessons to your pace and goals.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 hover:bg-white/20 transition">
              <h3 className="text-lg font-semibold mb-2">
                AI Tutor Assistance
              </h3>
              <p className="text-sm text-white/90">
                Ask questions and get instant help.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 hover:bg-white/20 transition">
              <h3 className="text-lg font-semibold mb-2">
                Progress Tracking
              </h3>
              <p className="text-sm text-white/90">
                Track your learning with smart dashboards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
