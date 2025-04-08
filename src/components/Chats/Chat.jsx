import { useEffect, useState } from 'react';

const Chat = ({ initialMessages }) => {
  const [displayedMessages, setDisplayedMessages] = useState([]);

  useEffect(() => {
    // Mostrar mensajes uno por uno con retraso
    const timeouts = initialMessages.map((message, index) => {
      return setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, message]);
      }, index * 1000); // 2 segundos entre mensajes
    });

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, [initialMessages]); // Dependencia en initialMessages

  return (
    <div className="flex-1 overflow-y-auto-hidden p-4 space-y-2">
      {displayedMessages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.side === 'left' ? 'justify-start' : 'justify-end'}`}
        >
          {/* Si el mensaje es de tipo reacción, aplica una clase personalizada */}
          {message.isReaction ? (
            <div className="reaction-bubble">
              <p>{message.text}</p>
            </div>
          ) : (
            <>
              {/* Mensaje de texto normal */}
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

              {/* Mensaje con GIF */}
              {message.gif && (
                <div className="chat-bubble-left md-l-20px max-w-2xs md:max-w-2xs animate-fadeIn rounded-br-none mb-custom-15px mb-2">
                  <img src={message.gif} alt="GIF" className="w-full rounded-xl" />
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Chat;