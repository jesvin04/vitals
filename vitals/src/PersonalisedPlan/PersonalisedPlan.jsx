import React, { useState } from "react";
import "./PersonalisedPlan.css";

export default function PersonalisedPlan() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [selectedHistoryIndex, setSelectedHistoryIndex] = useState(null);

  const sendMessage = async () => {
    if (message.trim() === "") return;

    const userMessage = { sender: "user", text: message };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    const newHistoryEntry = { question: message, answer: null };
    setChatHistory([...chatHistory, newHistoryEntry]);

    setMessage(""); // Clear the input

    try {
      const response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: message }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const res = await response.json();
      const result = res?.data?.choices?.[0]?.message?.content || "No response";

      const chatbotMessage = { sender: "chatbot", text: result };
      setMessages([...newMessages, chatbotMessage]);

      const updatedHistory = [...chatHistory];
      updatedHistory[updatedHistory.length - 1].answer = result;
      setChatHistory(updatedHistory);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);

      const chatbotMessage = { sender: "chatbot", text: "Sorry, something went wrong." };
      setMessages([...newMessages, chatbotMessage]);

      const updatedHistory = [...chatHistory];
      updatedHistory[updatedHistory.length - 1].answer = "Sorry, something went wrong.";
      setChatHistory(updatedHistory);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const handleHistoryClick = (index) => {
    setSelectedHistoryIndex(index);
  };

  const displayedMessages =
    selectedHistoryIndex !== null
      ? [
          { sender: "user", text: chatHistory[selectedHistoryIndex].question },
          { sender: "chatbot", text: chatHistory[selectedHistoryIndex].answer },
        ]
      : messages;

  return (
    <div className="chat-page">
      {/* Header */}
      <header>
        <div className="container">
          <h1>Vitals</h1>
          <nav>
            <a href="/">Home</a>
            <a href="#">About Us</a>
            <a href="#">Features</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="chat-container">
        {/* Sidebar for Chat History */}
        <aside className="chat-history">
          <h3>Chat History</h3>
          <ul>
            {chatHistory.map((entry, index) => (
              <li
                key={index}
                onClick={() => handleHistoryClick(index)}
                className={index === selectedHistoryIndex ? "active" : ""}
              >
                {entry.question}
              </li>
            ))}
          </ul>
        </aside>

        {/* Chatbox */}
        <section className="chatbox">
          <div className="chatlog">
            {displayedMessages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === "user" ? "user" : "chatbot"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="user-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2024 Vitals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
