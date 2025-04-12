import React, { useEffect, useState } from 'react';
import Chat from './Chat';
import { useTranslation } from 'react-i18next';
import cat_typing from '../../assets/cat_typing.gif';

const Chat_Home = () => {
  const { i18n, t } = useTranslation(); // Hook para traducciones
  const [initialMessages, setInitialMessages] = useState([]); // Define el estado para los mensajes

  // Cargar mensajes desde i18n y actualizarlos cuando cambie el idioma
  useEffect(() => {
    const messages = t('chat_home.messages', { returnObjects: true }).map((message) => {
      // Reemplazar el GIF con la imagen importada si es necesario
      if (message.gif === 'cat_typing') {
        return { ...message, gif: cat_typing };
      }
      return message;
    });
    setInitialMessages(messages); // Actualiza el estado con los mensajes
  }, [t, i18n.language]); // Escuchar cambios en el idioma

  return <Chat initialMessages={initialMessages} />;
};

export default Chat_Home;