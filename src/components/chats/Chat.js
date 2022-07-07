import "./chat.css";
import io from "socket.io-client";
import { useState } from "react";
import ChatBox from "./ChatBox";

const socket = io.connect("http://localhost:8080");

function Chat(props) {

  const user = JSON.parse(localStorage.getItem("profile"));

  console.log("data is: ", props.data);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    // if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    // }
  };

  return (
    <div className="Chat">
      {!showChat ? (
        <div className="joinChatContainer">
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <ChatBox socket={socket} username={user?.result?.firstName} room={props.data} />
      )}
    </div>
  );
}

export default Chat;