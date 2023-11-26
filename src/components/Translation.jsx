import React from "react";
import "./Translation.css";

export default function Translation({ doStuff, setInput, result }) {
  return (
    <div className="chat-window">
      <div className="chat-history">
        {/* Add your chat messages here (user and bot responses) */}
        {/* Example user message */}
        <div className="user-message">
          <textarea
            className="text-area"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          ></textarea>
          <button className="action-btn" onClick={doStuff}>
            SEND
          </button>
        </div>

        {/* Example bot response */}
        <div className="bot-response">
          <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
        </div>
      </div>
    </div>
  );
}
