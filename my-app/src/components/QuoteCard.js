import React from "react";

export default function QuoteCard({ quoteObj, onNewQuote }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "20px",
      maxWidth: "400px",
      margin: "0 auto",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }}>
      <p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>"{quoteObj.quote}"</p>
      <p style={{ fontWeight: "bold", textAlign: "right" }}>- {quoteObj.author}</p>
      <button 
        onClick={onNewQuote}
        style={{
          padding: "10px 15px",
          fontSize: "1rem",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px"
        }}
      >
        Get New Quote
      </button>
    </div>
  );
}