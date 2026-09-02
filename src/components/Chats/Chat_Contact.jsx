import React, { useEffect, useState } from 'react';
import Chat from './Chat';
import { useTranslation } from 'react-i18next';
import cat_contact from '../../assets/cat_contact.jpg';

const Chat_Portfolio = () => {
  const { i18n, t } = useTranslation();
  const [initialMessages, setInitialMessages] = useState([]);

  useEffect(() => {
    const messages = t('chat_contact.messages', { returnObjects: true }).map((message) => {
      if (message.gif === 'cat_contact') {
        return { ...message, gif: cat_contact };
      }
      return message;
    });
    setInitialMessages(messages);
  }, [t, i18n.language]);

  return <Chat initialMessages={initialMessages} />;
};

export default Chat_Portfolio;