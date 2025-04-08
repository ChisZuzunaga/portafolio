import React from 'react';
import Chat from './Chat';
import cat_typing from '../../assets/cat_typing.gif';

const Chat_Portfolio = () => {
  const initialMessages = [
    { id: 1, text: "😺 Hi there I'm Ignacio", side: "right" },
    { id: 2, text: "I like cats 🐈", side: "right" },
    { id: 3, text: null, side: "left", gif: cat_typing },
    { id: 4, text: "What language u use?", side: "left" },
    { id: 5, text: "Python, JavaScript, PHP. And frameworks like React and Bootstrap.", side: "right" }
  ];

  return <Chat initialMessages={initialMessages} />;
};

export default Chat_Portfolio;