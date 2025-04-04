import { useEffect, useState } from 'react';
import cat_typing from '../assets/cat_typing.gif';

const Chat = () => {
  const [displayedMessages, setDisplayedMessages] = useState([]);

  const initialMessages = [
    { id: 1, text: "😺 Hi there I'm Ignacio", side: "right" },
    { id: 2, text: "I like cats 🐈", side: "right" },
    { id: 3, text: null, side: "left", gif: cat_typing },
    { id: 4, text: "What language u use?", side: "left" },
    { id: 5, text: "Python, JavaScript, PHP. And frameworks like React and Bootstrap.", side: "right" }
  ];

  useEffect(() => {
    // Mostrar mensajes uno por uno con retraso
    const timeouts = initialMessages.map((message, index) => {
      return setTimeout(() => {
        setDisplayedMessages(prev => [...prev, message]);
      }, index * 1000); // 2 segundos entre mensajes
    });

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, []); // <-- Array de dependencias vacío para que solo se ejecute una vez

  return (
    
    <div className="flex-1 overflow-y-auto-hidden p-4 space-y-2">
    
    {displayedMessages.map((message) => (
        <div 
        key={message.id}
        className={`flex ${message.side === 'left' ? 'justify-start' : 'justify-end'}`}
        >
        <div className=''></div>
        {message.text && (
            <div 
            className={`max-w-xs md:max-w-md plr-custom-12px mb-custom-15px ptb-custom-13px text-lg rounded-2xl mb-2 animate-fadeIn md:text-xl ${
                message.side === 'left' 
                ? 'bg-[#E9E9EB] rounded-bl-none chat-bubble-left md-l-20px' 
                : 'bg-blue-500 text-white rounded-br-none chat-bubble-right md-r-20px'
            }`}
            >
            <p>{message.text}</p>
            </div>
        )}
        
        {message.gif && (
            <div className="chat-bubble-left md-l-20px max-w-2xs md:max-w-2xs animate-fadeIn rounded-br-none mb-custom-15px mb-2">
            <img src={message.gif} alt="GIF" className="w-full rounded-xl" />
            </div>
        )}
        </div>
        
    ))}
    </div>
    
  );
};

export default Chat;