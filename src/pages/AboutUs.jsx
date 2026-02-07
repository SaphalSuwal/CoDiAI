import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 pt-28 px-6">
        
        {/* Page Header */}
        <div className="text-center text-white mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Empowering learners with simple, smart, and AI-powered education.
          </p>
        </div>

        {/* Main Content - Transparent Glass Card */}
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-2xl space-y-10">
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Who We Are
            </h2>
            <p className="text-white/90 leading-relaxed">
              We are passionate about making learning simple, practical, and
              accessible for everyone. Our platform is designed to remove
              confusion and help learners focus on real understanding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              What We Do
            </h2>
            <p className="text-white/90 leading-relaxed">
              We combine artificial intelligence with modern teaching methods
              to deliver personalized learning paths, interactive lessons,
              and instant support whenever you need it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Our Mission
            </h2>
            <p className="text-white/90 leading-relaxed">
              Whether you're a student or a beginner, our mission is to guide
              you step by step and help you build skills that truly matter.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
