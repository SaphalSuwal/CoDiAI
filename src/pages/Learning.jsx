import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const ai = new GoogleGenAI({ apiKey });

const Learning = () => {
  const [userRequest, setUserRequest] = useState("");
  const [topic, setTopic] = useState("");
  const [conversation, setConversation] = useState([]); // store multiple responses
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null); // for auto-scroll

  const handleRequest = async () => {
    if (!topic) return console.log("Select topic first");
    if (!userRequest || userRequest.trim() === "")
      return console.log("Type your question");

    const currentRequest = userRequest.trim();
    setUserRequest(""); // clear input
    setLoading(true);

    const prompt = `You are an expert ${topic} educator with 10+ years of teaching experience. Respond to this user request: "${currentRequest}"
If the user is making casual conversation or greeting, respond naturally and conversationally. For educational requests, provide a clear, structured response following this exact format:

OUTPUT FORMAT REQUIREMENTS:
- Return ONLY valid JSON with no additional text outside the JSON structure.
- Output must be an array containing exactly 1 object.
- The object MUST strictly follow this schema:
{
  "summary": "A concise 4-word headline summary from user question if question is one or two word use your intelligence and make it 4 word",
  "answer": "Your complete response here following the three-part structure below"
}

RESPONSE RULES:
1. "summary" must always be a short, exactly 4-word headline that give user understand what the question is also you can add ... also .
2. "answer" must always contain three labeled sections in plain text:

EXPLANATION: Step-by-step breakdown with simple language, assuming no prior knowledge.
EXAMPLE: A practical, working example with input/output. Use readable text without markdown.
SUMMARY: A detailed overview covering:
- What (definition)
- When (use cases)
- Where (context/environment)
- Why (benefits/importance)
- How (key methods/approaches)

FORMATTING RULES:
- Use plain text only (no markdown symbols like **, ##, or \\).
- Separate sections with clear headings.
- Ensure the response directly answers "${currentRequest}".
Remember: The entire response must strictly follow the JSON schema with both "summary" and "answer".`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      let cleanedResponse = response.text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();

      const aiData = JSON.parse(cleanedResponse);
      const aiItem = Array.isArray(aiData) ? aiData[0] : aiData;
      setConversation((prev) => [...prev, aiItem]); // append new response
    } catch (error) {
      console.log(error, "Error connecting with AI");
    } finally {
      setLoading(false);
    }
  };

  // Auto-scroll to bottom when conversation updates
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation, loading]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 pt-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Logo */}
          <Logo />

          {/* Topic selector */}
          <div className="flex justify-end w-full mb-6">
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="bg-zinc-100 border border-zinc-200 text-black text-sm rounded-xl px-4 py-2.5 shadow-sm"
            >
              <option value="" disabled>
                Select Subject
              </option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Python">Python</option>
              <option value="HTML/CSS">HTML/CSS</option>
              <option value="Machine Learning">Machine Learning</option>
            </select>
          </div>

          {/* Conversation */}
          <div className="w-full max-w-4xl flex flex-col items-center space-y-4">
            {conversation.map((item, idx) => (
              <div
                key={idx}
                className="w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-black/5"
              >
                {/* Header */}
                <div className="sticky top-0 z-10 flex items-center gap-3 px-6 py-4 bg-white/90 backdrop-blur border-b border-zinc-200">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500" />
                  <h2 className="text-base font-semibold text-zinc-900 tracking-wide">
                    {item.summary}
                  </h2>
                </div>

                {/* Scroll Area */}
                <div className="flex-1 px-6 py-5 overflow-y-auto text-[15px] text-zinc-800 leading-7 whitespace-pre-line custom-scrollbar">
                  {item.answer}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-white text-lg font-semibold animate-pulse mt-2">
                Thinking... 🤖
              </div>
            )}
            <div ref={chatEndRef}></div>
          </div>

          {/* Input + Send */}
          <div className="w-full max-w-4xl p-6">
            <div className="relative flex items-end gap-1">
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
                className="flex-1 bg-zinc-100 border border-zinc-200 rounded-2xl px-5 py-4 text-sm focus:border-indigo-500 outline-none resize-none transition-all placeholder:text-zinc-700 custom-scrollbar overflow-hidden"
              />
              <button
                onClick={handleRequest}
                className="bg-white text-black h-[52px] px-8 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-zinc-600 hover:text-white disabled:opacity-50 transition-all"
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
