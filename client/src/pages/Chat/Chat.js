import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import socket from "../../socket"; // Import socket instance

const Chat = () => {
  const [senderMessage, setSenderMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentSocketId, setCurrentSocketId] = useState(""); // Maintain the current user's socket ID

  useEffect(() => {
    // Set up the current user's socket ID when the component mounts
    socket.on("connect", () => {
      // Once the socket is connected, retrieve the socket.id
      setCurrentSocketId(socket.id);
    });

    console.log("currentSocketId from useEffect: ", currentSocketId);
    // Receive messages from the server and update the messages state
    socket.on("message", (message) => {
      // Only display the message if it's from another user
      console.log("Message is: ", message);
      if (message.sender !== currentSocketId) {
        setMessages([...messages, message]);
      }
    });
    // console.log("messages: ", messages);
    return () => {
      socket.off("message");
    };
  }, [currentSocketId, messages]);

  const handleMessageChange = (e) => {
    setSenderMessage(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (senderMessage.trim() !== "" && currentSocketId) {
      // Create a message object containing the message content and sender's identifier
      const messageObject = {
        message: senderMessage,
        sender: currentSocketId,
      };

      // Append the message object to the existing messages array
      setMessages([...messages, messageObject]);

      // Emit the 'sendMessage' event to the server with the message content
      socket.emit("sendMessage", messageObject);

      // Clear the senderMessage state for the input
      setSenderMessage("");
    }
  };

  useEffect(() => {
    console.log("Updated messages:", messages);
  }, [messages]);
  return (
    <div className="bg-gray-800 h-screen">
      <Header />
      <div className="mx-64 flex text-white py-4 h-[80%]">
        <div className="border rounded-lg p-4 overflow-y-auto w-1/4 bg-gradient-to-r from-blue-500 to-purple-500">
          {/* Sidebar */}
          <div className="mb-4">
            <h2 className="text-lg font-bold">Chat Users</h2>
            <input
              type="text"
              placeholder="Search users..."
              className="border rounded-lg px-4 py-2 mt-2 w-full"
            />
            {/* List of chat users */}
            {/* Replace the following dummy data with your actual chat users */}
            <ul className="mt-5">
              <li>User 1</li>
              <li>User 2</li>
              <li>User 3</li>
            </ul>
          </div>
        </div>
        <div className="border rounded-lg overflow-y-auto flex-1 ml-4 relative bg-gradient-to-r from-blue-500 to-purple-500">
          {/* Displaying messages */}
          <div className="mt-4 px-4">
            {messages.map((message, index) =>
              message.sender === currentSocketId ? (
                <div key={index} className="text-right">
                  {message.message}
                </div>
              ) : (
                <div key={index} className="text-left">
                  {message.message}
                </div>
              )
            )}
          </div>
          <div className="mt-4 flex absolute bottom-1 w-full px-2">
            <input
              type="text"
              value={senderMessage}
              onChange={handleMessageChange}
              onKeyDown={handleKeyPress}
              className="border rounded-lg px-4 py-2 w-full text-black outline-none"
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-lg ml-[-1rem]">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
