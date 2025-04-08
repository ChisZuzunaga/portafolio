import React from 'react';
import Chat from './Chat';
import cat_engineer from '../../assets/cat_engineer.png';

const Chat_Portfolio = () => {
  const initialMessages = [
    { id: 1, text: "Can u show me ur projects 😺", side: "left" },
    { id: 2, text: "Give me a momment 🐈", side: "right" },
    { id: 3, text: null, side: "left", gif: cat_engineer },
    { id: 4, text: "?", side: "right", isReaction: true },
  ];

  return <Chat initialMessages={initialMessages} />;
};

export default Chat_Portfolio;