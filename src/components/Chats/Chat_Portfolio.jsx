import React, { useEffect, useState } from 'react';
import Chat from './Chat';
import { useTranslation } from 'react-i18next';
import cat_engineer from '../../assets/cat_engineer.png';

const Chat_Portfolio = () => {
  const { i18n, t } = useTranslation(); // Hook para traducciones
  const [initialMessages, setInitialMessages] = useState([]); // Define el estado para los mensajes

  // Cargar mensajes desde i18n y actualizarlos cuando cambie el idioma
  useEffect(() => {
    const messages = t('chat_portfolio.messages', { returnObjects: true }).map((message) => {
      // Reemplazar el GIF con la imagen importada si es necesario
      if (message.gif === 'cat_engineer') {
        return { ...message, gif: cat_engineer };
      }
      return message;
    });
    setInitialMessages(messages);
  }, [t, i18n.language]); // Escuchar cambios en el idioma

  return <Chat initialMessages={initialMessages} />;
};

export default Chat_Portfolio;