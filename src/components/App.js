import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import "./App.css";
import ChatMessage from "../ChatMessage";

function App(props) {
  return (
    <div className="wrapper">
      <Header />
      <ChatMessage
        messages={props.conversation.messages}
        currentUser={props.currentUser}
      />
      <Footer />
    </div>
  );
}

export default App;
