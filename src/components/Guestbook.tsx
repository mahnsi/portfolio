import "../style/Guestbook.css";
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

interface Message {
  id: number;
  name: string;
  text: string;
  color: string;
  inserted_at: string;
}

const COLORS = [
    "#000000", // black
    "#FF0000", // red
    "#FF69B4", // hot pink
    "#0000FF", // blue
    "#00FF00", // lime green
    "#FFFF00", // yellow
    "#FFA500", // orange
    "#800080", // purple
    "#00FFFF", // aqua
    "#808080", // grey
  ];  

export default function Guestbook() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("#000000");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    const { data, error } = await supabase
      .from("guestbook")
      .select("*")
      .order("inserted_at", { ascending: false });

    if (!error && data) setMessages(data);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !text) return;

    setLoading(true);
    setError(null);
    setSuccess(null);

    const { error } = await supabase.from("guestbook").insert([{ name, text, color: textColor }]);

    setLoading(false);

    if (error) {
      console.error("Insert error:", error);
      setError("Could not save your message. Please try again.");
    } else {
      setName("");
      setText("");
      setTextColor("#000000");
      setSuccess("Thanks for signing my guestbook!");
      fetchMessages();
      // clear msg after 3s
      setTimeout(() => setSuccess(null), 3000);
    }
  }

  return (
    <div className="guestbook-container">
      <h2 className="guestbook-title">Guestbook!</h2>
      <p className="guestbook-subtitle">leave a message below</p>

      {/* form */}
      <form
        onSubmit={handleSubmit}
        className="guestbook-form"
      >
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded-lg text-black"
        />
        <textarea
          placeholder="write a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 rounded-lg text-black"
          rows={4}
        />
        {/* colour picker */}
        <label className="block mb-2 font-bold">
          pick your text color!
          <div className = "guestbook-palette">
            {COLORS.map((color) => (
              <button
              key={color}
              type="button"
              className={`guestbook-color ${textColor === color ? "selected" : ""}`}
              style={{ background: color }}
              onClick={() => setTextColor(color)}
            >
                &nbsp;
            </button>            
            ))}
          </div>
        </label>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-lg transition ${
            loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "submitting..." : "sign guestbook"}
        </button>
      </form>

      {/* status messages */}
      {error && <p className="text-red-400 mb-4">{error}</p>}
      {success && <p className="text-green-400 mb-4">{success}</p>}

      {/* all guestbook messages */}
      <div className="w-full space-y-4">
        {messages.length === 0 ? (
          <p className="text-black text-center">No entries yet. Be the first!</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="guestbook-message"
            >
              <p className="font-bold">{msg.name}</p>
              <p style={{ color: msg.color }}>{msg.text}</p>
              <p className="guestbook-date">
                {new Date(msg.inserted_at).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
