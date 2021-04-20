import React from "react";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat]; // if chats exist then

  const RenderMessages = () => {
    const keys = Object.keys(messages); // the key is the speific message in the chat

    return keys.map((key, index) => {
      const message = messages[keys];
      const lastMessageKey = index === 0 ? null : keys[index - 1]; // if index == 0, then return null, else return last message

      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {
            isMyMessage ?  // check if is my message, else is others message
            (<myMessage />) 
            : // <= else
            (<TheirMessage />)
            }
                
          </div>

          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
              read-receipts
          </div>
        </div>
      );
    });
  };

  if(!chat) return 'Loading...'


  return (
      <div className="chat-feed">
          <div className = "chat-title-container">
              <div className="chat-title">
                  {chat?.title} {/* to make sure there is a chat before loading the title */}
              </div>
              <div className = "chat-subtitle">
              {chat.people.map((person) =>
                  ` ${person.person.username}`
              )} 
              </div>
          </div>
          
      </div>
  )
};

export default ChatFeed;
