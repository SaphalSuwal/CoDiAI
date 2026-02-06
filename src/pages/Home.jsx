import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 pt-24 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Learn Smarter with AI
          </h1>

          <p className="text-lg md:text-xl mb-8">
            Personalized learning powered by artificial intelligence.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/learning"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start Learning
            </Link>

            <Link
              to="/about"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* FEATURES */}
        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          <div className="bg-white/10 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Personalized Learning
            </h3>
            <p className="text-sm">
              AI adapts lessons to your pace and goals.
            </p>
          </div>

          <div className="bg-white/10 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              AI Tutor Assistance
            </h3>
            <p className="text-sm">
              Ask questions and get instant help.
            </p>
          </div>

          <div className="bg-white/10 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Progress Tracking
            </h3>
            <p className="text-sm">
              Track your learning with smart dashboards.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;

