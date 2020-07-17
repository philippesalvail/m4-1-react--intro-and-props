import React from "react";
import "./ChatMessage.css";
import ChatStream from "./components/ChatStream";

function ChatMessage(props) {
  let messages = props.messages;
  let currentUser = props.currentUser.username;
  return messages.map((item, i) => {
    return (
      <div className="chats">
        <div
          className={
            currentUser === item.user.username
              ? "currentUser-chat-message"
              : "chat-message"
          }
        >
          <div className="character-Face">
            {currentUser !== item.user.username && (
              <img src={item.user.avatar} width="30px" height="30px" />
            )}
          </div>
          <div className="name-and-message">
            {currentUser !== item.user.username && (
              <div className="character-Name">{item.user.username}</div>
            )}
            <ChatStream
              message={item.body}
              currentUser={currentUser}
              user={item.user.username}
            />
          </div>
        </div>
      </div>
    );
  });
}
export default ChatMessage;
