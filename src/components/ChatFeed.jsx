import React from "react";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props; // get those from props

  const chat = chats && chats[activeChat]; // if chats exist then

  const renderReadReceipt = (message, isMyMessage) => 
     chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? 'right' : 'left',
              backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    );
  

  const renderMessages = () => {
    const keys = Object.keys(messages); // the key is the speific message in the chat

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1]; // if index == 0, then return null, else return last message

      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {
              isMyMessage ? ( // check if is my message, else is others message
              <MyMessage message={message} />
            ) : (
              // <= else
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>

          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
           {renderReadReceipt(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return "Loading..."; // if no chat, show loading

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">
          {chat?.title}{" "}
          {/* to make sure there is a chat before loading the title */}
        </div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
