import React from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import axios from "axios";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { Avatar, Conversation } from "@chatscope/chat-ui-kit-react";

export const joinRoom = async (
  user,
  setAdminResponder,
  dispatch,
  reduxMessages,
  setAdminMessageArray,
  setClientResponder,
  setClientMessageArray,
  setUsername,
  setConnection,
  setUsers,
  setChatListMapping,
  avatarIco
) => {
  // if (user === "") {
  //   console.log("no value");
  // } else {
  axios
    .post(`https://localhost:44382/chat/negotiate?negotiateVersion=1`)
    .then((res) => {
      const data = JSON.stringify(res);
    })
    .catch((e) => {
      console.log(e);
    });

  try {
    const connection = new HubConnectionBuilder()
      .withUrl("https://localhost:44382/chat")
      .build();

    connection.on("ReceiveMessage", (user, message, id, isAdmin, user3) => {
      // dispatch(messageSave([...reduxMessages, { user, message, id }]));
      if (isAdmin === "Admin") {
        setAdminResponder(message);
        setAdminMessageArray((adminMessageArray) => [
          ...adminMessageArray,
          { message },
        ]);
      } else if (isAdmin === "Client") {
        setClientResponder(message);
        setClientMessageArray((clientMessageArray) => [
          ...clientMessageArray,
          { message },
        ]);
      }

      setUsername(user);
    });

    connection.onclose((e) => {
      setConnection();
      setUsers([]);
    });

    await connection.start();
    await connection.invoke("JoinRoom", { user });

    setChatListMapping((chatListMapping) => [
      chatListMapping,
      <Conversation
        name={"ApiName"}
        lastSenderName={"ApiName"}
        info="Yes i can do it for you"
        onClick={() => {
          setUsername("ApiName");
        }}
      >
        <Avatar src={avatarIco} name={"ApiName"} status="available" />
      </Conversation>,
    ]);

    setConnection(connection);
  } catch (e) {
    console.log(e);
  }
  // }
};

export const sendMessage = async (user3, isAdmin, message) => {
  try {
    await connection.invoke("SendMessage", user3, isAdmin, message);
  } catch (e) {
    console.log(e);
  }
};
