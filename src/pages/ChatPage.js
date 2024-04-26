import React from "react";
import Chat from "../components/Chat"; // Assuming Chat component is stored in src/components

const ChatPage = () => {
  return (
    <div>
      <h1>Stock Market Chat Room</h1>
      <p>Discuss your favorite stocks and market trends here!</p>
      <Chat />
    </div>
  );
};

export default ChatPage;
