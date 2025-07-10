import { useState } from "react";

const ConditonsRendering = () => {
  const [messages, setMessages] = useState(["a", "b"]);
  function text(){
     if (messages.length === 0) {
    return "you are all caught up";
  } else if (messages.length === 1) {
    return  "you have 1 unread message";
  } else {
   return `you have ${messages.length} unread messages`;
  }
  }
 

  return (
    <div>
      <h1>{text()}</h1>
    </div>
  );
};

export default ConditonsRendering;
