import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let’s Talk 👋
            </h1>
            <p className="text-lg opacity-90 mb-6">
              Have an idea, question, or feedback?  
              Drop us a message and we’ll get back to you.
            </p>

            <div className="space-y-4 text-sm opacity-90">
              <p>📧 support@learnai.com</p>
              <p>📍 Nepal</p>
              <p>📞 904000000</p>
              <p>⏱ Response within 24 hours</p>
            </div>
          </div>

          {/* Contact Card */}
<div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/30 p-8 md:p-10 shadow-xl">
  <h2 className="text-2xl font-semibold mb-6 text-white">
    Send us a message
  </h2>

  <form onSubmit={handleSubmit} className="space-y-5">
    <input
      type="text"
      name="name"
      placeholder="Your name"
      value={formData.name}
      onChange={handleChange}
      className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60"
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Your email"
      value={formData.email}
      onChange={handleChange}
      className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60"
      required
    />

    <textarea
      name="message"
      rows="4"
      placeholder="Tell us what’s on your mind..."
      value={formData.message}
      onChange={handleChange}
      className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-3 text-sm text-white placeholder-white/70 resize-none focus:outline-none focus:ring-2 focus:ring-white/60"
      required
    />

    <button
  type="submit"
  className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-3 text-white text-sm font-semibold placeholder-white/70 backdrop-blur transition duration-300 hover:bg-white/30 hover:scale-105"
>
  Send Message
</button>

  </form>
</div>


        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
