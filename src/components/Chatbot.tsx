
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm PlantechX Assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);

    // Simple bot responses
    setTimeout(() => {
      let botResponse = "Thank you for your message! For detailed assistance, please contact us directly.";
      
      if (input.toLowerCase().includes("platform") || input.toLowerCase().includes("exam")) {
        botResponse = "Our AI-powered training platform offers custom test creation, SWOT analysis, and placement preparation. Would you like to book a demo?";
      } else if (input.toLowerCase().includes("website") || input.toLowerCase().includes("design")) {
        botResponse = "We create stunning websites, logos, and branding solutions. Check out our packages or contact us for a custom quote!";
      } else if (input.toLowerCase().includes("price") || input.toLowerCase().includes("cost")) {
        botResponse = "We offer affordable packages starting from basic websites to complete branding solutions. Visit our Packages page for details!";
      }

      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);

    setInput("");
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-green-400 text-gray-900 p-3 rounded-full shadow-lg hover:bg-green-500 transition-all duration-300 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-white font-medium">PlantechX Assistant</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="h-64 overflow-y-auto p-4 space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-xs p-2 rounded-lg text-sm ${
                message.isBot
                  ? "bg-gray-700 text-gray-200"
                  : "bg-green-400 text-gray-900"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-700">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="bg-gray-700 border-gray-600 text-white"
          />
          <Button
            onClick={handleSend}
            size="sm"
            className="bg-green-400 text-gray-900 hover:bg-green-500"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
