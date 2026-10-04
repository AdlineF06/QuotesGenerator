import React, { useState } from "react";
import QuoteCard from "./components/QuoteCard";
import { quotesData } from "./data/quotes";

export default function App() {
  const [currentQuote, setCurrentQuote] = useState(quotesData[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setCurrentQuote(quotesData[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
      <h1>Quotes Generator</h1>
      <QuoteCard quoteObj={currentQuote} onNewQuote={getRandomQuote} />
    </div>
  );
}