import React, { useState } from 'react';
import { Send, Menu, Phone, Video, Search } from 'lucide-react';

// Dummy data for messages
const initialMessages = [
  { id: 1, text: 'Olá! Como você está?', sender: 'other' },
  { id: 2, text: 'Oi! Estou bem, e você?', sender: 'self' },
  { id: 3, text: 'Também estou bem, obrigado!', sender: 'other' },
];

const TelegramStyleChat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'self',
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Menu className="mr-4" />
          <h1 className="text-xl font-bold">Chat do Telegram</h1>
        </div>
        <div className="flex items-center">
          <Phone className="mr-4" />
          <Video className="mr-4" />
          <Search />
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${
              message.sender === 'self' ? 'text-right' : 'text-left'
            }`}
          >
            <span
              className={`inline-block p-2 rounded-lg ${
                message.sender === 'self'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-800'
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="bg-white p-4 flex items-center">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Digite uma mensagem..."
          className="flex-1 border rounded-full py-2 px-4 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default TelegramStyleChat;