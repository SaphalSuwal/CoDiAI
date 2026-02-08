import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const ai = new GoogleGenAI({ apiKey });

// localStorage keys
const STORAGE_KEY = "learning_ai_conversation";
const TOPIC_KEY = "learning_ai_topic";

const Learning = () => {
  const [userRequest, setUserRequest] = useState("");
  const [topic, setTopic] = useState("");
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);

  // -------------------------
  // Safe localStorage helpers
  // -------------------------
  const saveConversation = (data) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (err) {
      console.error("localStorage save failed (quota?)", err);
    }
  };

  // Load saved data on first render
  useEffect(() => {
    try {
      const savedConversation = localStorage.getItem(STORAGE_KEY);
      const savedTopic = localStorage.getItem(TOPIC_KEY);

      if (savedConversation) {
        setConversation(JSON.parse(savedConversation));
      }

      if (savedTopic) {
        setTopic(savedTopic);
      }
    } catch (err) {
      console.error("Failed to load localStorage", err);
    }
  }, []);

  // -------------------------
  // AI Request Handler
  // -------------------------
  const handleRequest = async () => {
    if (!topic) return console.log("Select topic first");
    if (!userRequest.trim()) return console.log("Type your question");

    const currentRequest = userRequest.trim();
    setUserRequest("");
    setLoading(true);

    const prompt = `
You are an expert ${topic} educator with 10+ years of teaching experience.
Respond to this user request: "${currentRequest}"
If the user is making casual conversation or greeting, respond naturally and conversationally.
For educational requests, provide a clear, structured response following this exact format:

OUTPUT FORMAT REQUIREMENTS:
- Return ONLY valid JSON with no additional text outside the JSON structure.
- Output must be an array containing exactly 1 object.
- The object MUST strictly follow this schema:

{
  "summary": "A concise 4-word headline summary from user question if question is one or two word use your intellegence and make it 4 word",
  "answer": "Your complete response here following the three-part structure below"
}

RESPONSE RULES:
1. "summary" must always be a short, exactly 4-word headline that give user understand what the question is also you can add ... also .
   Example: "DOM and VDOM in javascript"
2. "answer" must always contain three labeled sections in plain text:

EXPLANATION:
Step-by-step breakdown with simple language, assuming no prior knowledge.

EXAMPLE:
A practical, working example with input/output. Use readable text without markdown.

SUMMARY:
A detailed overview covering:
- What (definition)
- When (use cases)
- Where (context/environment)
- Why (benefits/importance)
- How (key methods/approaches)

FORMATTING RULES:
- Use plain text only (no markdown symbols like **, ##, or \`\`\`).
- Separate sections with clear headings.
- Use line breaks for readability.
- Ensure the response directly answers "${currentRequest}".

Remember: The entire response must strictly follow the JSON schema with both "summary" and "answer".`;
   

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const cleaned = response.text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();

      const parsed = JSON.parse(cleaned);
      const aiItem = Array.isArray(parsed) ? parsed[0] : parsed;

      setConversation((prev) => {
        const updated = [...prev, aiItem];
        saveConversation(updated); // SAVE IMMEDIATELY
        return updated;
      });
    } catch (err) {
      console.error("AI error:", err);
    } finally {
      setLoading(false);
    }
  };

  return  (
  <>
    <Navbar />

    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 pt-24 pb-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">

        {/* Logo */}
        <Logo />

        {/* Top Controls */}
        <div className="w-full flex flex-wrap gap-4 justify-between items-center">
          <select
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
              localStorage.setItem(TOPIC_KEY, e.target.value);
            }}
            className="bg-white/90 backdrop-blur border border-white/30 text-black text-sm rounded-xl px-4 py-2 shadow"
          >
            <option value="" disabled>Select Subject</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="Python">Python</option>
            <option value="HTML/CSS">HTML/CSS</option>
            <option value="Machine Learning">Machine Learning</option>
          </select>

         <button
  onClick={() => {
    setConversation([]);
    localStorage.removeItem(STORAGE_KEY);
  }}
  className="px-4 py-2 rounded-full bg-white/20 backdrop-blur text-white text-sm font-medium border border-white/30 hover:bg-white/30 transition"
>
  Clear chat
</button>


        </div>

        {/* Conversation */}
        <div className="w-full max-w-5xl flex flex-col gap-6">
          {conversation.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border border-white/40"
            >
              {/* Header */}
              <div className="px-6 py-4 bg-white/90 border-b flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500" />
                <h2 className="font-semibold text-zinc-900 tracking-wide">
                  {item.summary}
                </h2>
              </div>

              {/* Content */}
              <div className="px-6 py-6 text-zinc-800 text-[15px] leading-7 whitespace-pre-line">
                {item.answer}
              </div>
            </div>
          ))}

          {loading && (
            <div className="text-center text-white font-semibold animate-pulse">
              Thinking... 🤖
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="w-full max-w-5xl sticky bottom-4">
          <div className="flex items-end gap-2 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg px-4 py-3 border border-white/40">
            <textarea
              value={userRequest}
              onChange={(e) => setUserRequest(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                !e.shiftKey &&
                (e.preventDefault(), handleRequest())
              }
              placeholder="Ask a technical question..."
              rows={1}
              className="flex-1 resize-none bg-transparent outline-none text-sm text-zinc-800 placeholder-zinc-500 max-h-40"
            />

            <button
              onClick={handleRequest}
              className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition"
            >
              Send
            </button>
          </div>
        </div>

      </div>
    </div>

    <Footer />
  </>
);

};

export default Learning;
