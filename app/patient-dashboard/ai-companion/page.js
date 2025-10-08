'use client';

import PatientNavigation from '../../../components/PatientNavigation';
import { useState } from 'react';

export default function AICompanion() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm your AI Care Companion. How are you feeling today?", sender: 'ai' },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      // Add user message
      const userMessage = { id: Date.now(), text: inputText, sender: 'user' };
      setMessages([...messages, userMessage]);
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = { 
          id: Date.now() + 1, 
          text: "I understand your concern. Remember to stay hydrated and rest well. Would you like me to notify your doctor about this?", 
          sender: 'ai' 
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
      
      setInputText('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PatientNavigation />
      
      <div className="max-w-4xl mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">AI Care Companion</h1>
        <p className="text-gray-600 mb-8">Get instant support and answers to your questions</p>

        <div className="bg-white rounded-lg shadow-md h-[600px] flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b bg-purple-50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <div>
                <p className="font-semibold">Care Companion</p>
                <p className="text-sm text-purple-600">Online • Always here to help</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message here..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={handleSend}
                className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600"
              >
                Send
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              AI responses are for support only. Always consult your doctor for medical advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}