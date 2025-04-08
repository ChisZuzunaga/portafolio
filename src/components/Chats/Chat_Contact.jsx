import React from 'react';
import Chat from './Chat';
import cat_engineer from '../../assets/cat_engineer.png';

const Chat_Portfolio = () => {
  const initialMessages = [
    { id: 1, text: "null", side: "right"},
    { id: 2, text: null, side: "left", gif: cat_engineer },
  ];

  return <Chat initialMessages={initialMessages} />;
};

export default Chat_Portfolio;