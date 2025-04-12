import { useEffect, useState, useRef } from 'react';

const Chat = ({ initialMessages }) => {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [isChatComplete, setIsChatComplete] = useState(false); // Bandera para saber si el chat ha finalizado
  const messageIndexRef = useRef(0); // Referencia para rastrear el índice del mensaje actual

  useEffect(() => {
    // Reiniciar el chat si cambian los mensajes iniciales
    setDisplayedMessages([]);
    setIsChatComplete(false);
    messageIndexRef.current = 0;

    // Mostrar mensajes uno por uno con retraso
    const timeouts = [];
    for (let i = 0; i < initialMessages.length; i++) {
      const timeout = setTimeout(() => {
        setDisplayedMessages((prev) => {
          const newMessages = [...prev, initialMessages[i]];
          // Si se han mostrado todos los mensajes, marcar el chat como completo
          if (newMessages.length === initialMessages.length) {
            setIsChatComplete(true);
          }
          return newMessages;
        });
        messageIndexRef.current = i + 1; // Actualizar el índice del mensaje actual
      }, i * 1000); // 1 segundo entre mensajes
      timeouts.push(timeout);
    }

    // Limpia los timeouts al desmontar el componente
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [initialMessages]); // Escuchar cambios en initialMessages

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