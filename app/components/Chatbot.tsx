"use client";
import { useChat } from "@ai-sdk/react";
import React, { useState, useRef, useEffect } from "react";

function Chatbot() {
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat();
  const endRef = useRef<HTMLDivElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ text: input });
    setInput("");
  }

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {toggle && (
        <section
          style={{
            position: "fixed",
            bottom: "5rem",
            right: "1.5rem",
            width: "340px",
            height: "480px",
            background: "#fff",
            border: "1px solid var(--border)",
            borderRadius: "6px",
            zIndex: 50,
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 16px 48px rgba(28,26,23,0.14)",
          }}
        >
          <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              className="animate-pulse-ember"
              style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--ember)", flexShrink: 0 }}
            />
            <span style={{ color: "var(--text)", fontSize: "0.8rem", letterSpacing: "0.06em" }}>Cabin Assistant</span>
            <button
              onClick={() => setToggle(false)}
              style={{ marginLeft: "auto", color: "var(--text-muted)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              Close
            </button>
          </div>

          <div style={{ flex: 1, overflowY: "auto", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {messages.length === 0 && (
              <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.7, textAlign: "center", marginTop: "2rem" }}>
                Ask me anything about our cabins, availability, or the surrounding nature.
              </p>
            )}
            {messages.map((message) => (
              <div key={message.id} style={{ display: "flex", flexDirection: "column", alignItems: message.role === "user" ? "flex-end" : "flex-start", gap: "0.3rem" }}>
                <span style={{ color: "var(--text-muted)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  {message.role === "user" ? "You" : "Assistant"}
                </span>
                <div
                  style={{
                    maxWidth: "85%",
                    padding: "0.75rem 1rem",
                    borderRadius: "4px",
                    fontSize: "0.82rem",
                    lineHeight: 1.6,
                    background: message.role === "user" ? "var(--bg-subtle)" : "var(--ember)",
                    color: message.role === "user" ? "var(--text)" : "#fff",
                  }}
                >
                  {message.parts.map((part, i) => {
                    if (part.type === "text") return <span key={i}>{part.text}</span>;
                  })}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <form onSubmit={handleSubmit} style={{ padding: "0 1rem 1rem" }}>
            <div style={{ display: "flex", border: "1px solid var(--border)", borderRadius: "4px", overflow: "hidden" }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.currentTarget.value)}
                placeholder="Ask a question..."
                style={{ flex: 1, background: "transparent", padding: "0.75rem 1rem", fontSize: "0.8rem", color: "var(--text)", outline: "none", border: "none" }}
              />
              <button
                type="submit"
                style={{ padding: "0 1rem", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", background: "var(--ember)", color: "#fff", border: "none", cursor: "pointer", fontWeight: 600, transition: "background 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--ember-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ember)")}
              >
                Send
              </button>
            </div>
          </form>
        </section>
      )}

      {toggle && (
        <div onClick={() => setToggle(false)} style={{ position: "fixed", inset: 0, zIndex: 40, background: "rgba(28,26,23,0.25)" }} />
      )}

      <button
        onClick={() => setToggle((p) => !p)}
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 50,
          width: "48px",
          height: "48px",
          background: "#fff",
          border: "1px solid var(--border)",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(28,26,23,0.12)",
          transition: "box-shadow 0.2s, transform 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(28,26,23,0.18)";
          e.currentTarget.style.transform = "scale(1.06)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(28,26,23,0.12)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <span style={{ color: "var(--ember)", fontSize: "1.2rem" }}>✦</span>
      </button>
    </>
  );
}

export default Chatbot;
