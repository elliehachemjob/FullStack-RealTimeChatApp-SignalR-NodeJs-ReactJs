import React, { useEffect, useState } from "react";

import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
  Conversation,
  ConversationHeader,
  StarButton,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
  ConversationList,
  Sidebar,
  Search,
  ExpansionPanel,
} from "@chatscope/chat-ui-kit-react";
import CustomRecieveMsgForAdminInAdminPanel from "./CustomRecieveMsgForAdminInAdminPanel";
import CustomSendMsgForAdminInAdminPanel from "./CustomSendMsgForAdminInAdminPanel";
import CustomMessageBoxInAdminPanel from "./CustomMessageBoxInAdminPanel";
import { useSelector, useDispatch } from "react-redux";
import { messageSave, storedMessages } from "../store/messages/messagesReducer";
import { usernameSelector } from "../store/auth/authReducer";

const AdminPanel = (props) => {
  //for admin panel
  const dispatch = useDispatch();
  const user = useSelector(usernameSelector);
  const reduxMessages = useSelector(storedMessages);
  const avatarIco =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEUOHCyclYufmI0AECZvbGkAACCjm5AIGCoxOUIAEycAFSgLGisNHCwEFykDFyljY2N9enUlLjkACCKWkIc+Q0lmZmWIhH0bJjN/e3YVIjGSjYRAREpbXF0tND54dXGEgHpKTVFTVVcfARIMAAADVklEQVR4nO3ciXaiMABA0ZA4lhBEcV+r/v9PTtA6FUVGLXOyzLtf4DtktVghAAAAAAAAAAAAAAAAAAAAAABAuIwej9XAuP4Y/4xR5XY+6U11pI1GL4ZrmSQyGaXZIHf9cTqXa7Gt+ipSfqZ64PoTdcuoYjj56js3jtJxRM/RqMUwueo7Ny6nqohjPtr1Zbi+6Ts1JqNpFsGak2eLxr5z4zItAp+PRtfn313jaT66/pTvM2p1N//uGvv7YOdjNf/ant/VWJ3qABsv+/szzmtOWHtHrldP950a7XwM6QxglJk9Mz7rjcvpOJCxWs2/v60vzY37qc78b7R9s1fGZ60xWW58PwMYu7+/Oj5vGr0+A9yer99qrM4AheuSZnZ/n8kf9p0a7RnAyzVHly+vnw8bq/no3faYbd5dX5obe749xNy8s0G0NW6166a6bNttYJJMxq6b6lSv68L+L9dNdRRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FL5Oxl4oR8p1U13XhXJdevb6ZbeFUo5K396E7rJQyvlBfLguutVdoUyWB+PfO9BdFUopZztV+NfXUaHs749KebbCXHTwFrScfKbGs5e7r5iy/7M8uR7ulNe/0Bt//uTHQNXq6evwvMjz+buJMumlYw9Xz1sfi7cS7ePbikB+XJntXk+Uk9FmpT0fnt+K3frFxzeZpdrLze+RbPdKX39+XKmPkPqsLJ0825d82tUlmOH5LZs+k2gf37DMwlhd7mSbJx7f/mBXl8CG5x+5PvzlcCP3UxXi8Pymju17xjys1bOJaj2Ey6O/h+tnGT1s+38taaArzLU8m7Ukpt59P/GGvO0+HEWhMC13qTgKRV48TIykUBgxepAYS6Ew+b45MZpCu2k0XxfjKRRm1ZgYUaEoyqbEmArtjbjhv4FEVdh46Y+rsCkxskKhN7eX/tgKhTrEXmgTZeSFuap/rxFf4e33GjEW1i/9MRbWL/1RFopc9/pxF15/rxFpoR2ol0t/rIX2Rvx16Y+20F4Xz5f+eAvtUzxdFyMuFKaw10Xp2zuHnRqU8/5chf53mVaDxSHqRyiqgRp5IAAAAAAAAAAAAAAAAAAAAAAA/4Hf0gU2cK/EibwAAAAASUVORK5CYII=";
  const [clientResponder, setClientResponder] = useState("");
  const [chatListMapping, setChatListMapping] = useState([]);
  const [clientMessageArray, setClientMessageArray] = useState([]);
  const [adminMessageArray, setAdminMessageArray] = useState([]);
  const [username, setUsername] = useState("");

  const [adminMessage, setAdminMessage] = useState("");
  const [msgContainer, setMsgContainer] = useState(
    <CustomRecieveMsgForAdminInAdminPanel
      clientMessageArray={clientMessageArray}
      name={username}
      src={avatarIco}
    />
  );
  const [msgAdminContainer, setmsgAdminContainer] = useState(
    <CustomSendMsgForAdminInAdminPanel
      adminMessageArray={adminMessageArray}
      name={username}
      src={avatarIco}
    />
  );

  const names = [
    "Jalal",
    "Ahmad",
    "Ellie",
    "Abas",
    "Rita",
    "Shadi",
    "Sam",
    "Marios",
  ];

  const msgs = [
    ["hey", "How is the project going"],
    ["I talked to you yesterday", "Did you do redux"],
    ["Good morning", "There is an issue here"],
    ["Issue", "ticket 2021"],
    ["There is a customer complaining", "need help"],
    ["In the row", "how is the project going"],
    ["No Message Here"],
    ["How are you", "what is happening", "was calling you from mins "],
  ];

  return (
    <div
      style={{
        height: "600px",
        position: "relative",
      }}
    >
      <MainContainer responsive>
        <Sidebar position="left" scrollable={false}>
          <Search placeholder="Search..." />
          <ConversationList>
            <Conversation
              name={names[0]}
              lastSenderName={names[0]}
              info="Yes i can do it for you"
              onClick={() => {
                setUsername(names[0]);
                setMsgContainer(
                  <CustomMessageBoxInAdminPanel msg={msgs[0]} name={username} />
                );
              }}
            >
              <Avatar src={avatarIco} name={names[0]} status="available" />
            </Conversation>

            <Conversation
              name={names[1]}
              lastSenderName={names[1]}
              info="Yes i can do it for you"
              onClick={() => {
                setClientResponder("");
                setUsername(names[1]);
                setMsgContainer(<CustomMessageBoxInAdminPanel msg={msgs[1]} />);
              }}
            >
              <Avatar src={avatarIco} name={names[1]} status="dnd" />
            </Conversation>

            <Conversation
              name={names[2]}
              lastSenderName={names[2]}
              info="Yes i can do it for you"
              unreadCnt={3}
              onClick={() => {
                setClientResponder("");
                setUsername(names[2]);
                setMsgContainer(
                  <CustomMessageBoxInAdminPanel msg={msgs[2]} name={username} />
                );
              }}
            >
              <Avatar src={avatarIco} name={names[2]} status="available" />
            </Conversation>

            <Conversation
              name={names[3]}
              lastSenderName={names[3]}
              info="Yes i can do it for you"
              onClick={() => {
                setClientResponder("");
                setUsername(names[3]);
                setMsgContainer(
                  <CustomMessageBoxInAdminPanel msg={msgs[3]} name={username} />
                );
              }}
            >
              <Avatar src={avatarIco} name={names[3]} status="dnd" />
            </Conversation>

            <Conversation
              name={names[4]}
              lastSenderName={names[4]}
              info="Yes i can do it for you"
              onClick={() => {
                setClientResponder("");
                setUsername(names[4]);
                setMsgContainer(
                  <CustomMessageBoxInAdminPanel msg={msgs[4]} name={username} />
                );
              }}
            >
              <Avatar src={avatarIco} name={names[4]} status="dnd" />
            </Conversation>
            <Conversation
              name={names[5]}
              lastSenderName={names[6]}
              info="Yes i can do it for you"
              onClick={() => {
                setClientResponder("");
                setUsername(names[5]);
                setMsgContainer(
                  <CustomMessageBoxInAdminPanel msg={msgs[5]} name={username} />
                );
              }}
            >
              <Avatar src={avatarIco} name={names[5]} status="dnd" />
            </Conversation>

            <Conversation
              name={names[6]}
              lastSenderName={names[6]}
              info="Yes i can do it for you"
              onClick={() => {
                setClientResponder("");
                setUsername(names[6]);
                setMsgContainer(
                  <CustomMessageBoxInAdminPanel msg={msgs[6]} name={username} />
                );
              }}
            >
              <Avatar src={avatarIco} name={names[6]} status="dnd" />
            </Conversation>

            <Conversation
              name={names[7]}
              lastSenderName={names[7]}
              info="Yes i can do it for you"
              onClick={() => {
                setClientResponder("");
                setUsername(names[7]);
                setMsgContainer(
                  <CustomMessageBoxInAdminPanel msg={msgs[7]} name={username} />
                );
              }}
            >
              <Avatar src={avatarIco} name={names[7]} status="dnd" />
            </Conversation>
            {chatListMapping}
          </ConversationList>
        </Sidebar>

        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar src={avatarIco} name={username} />
            <ConversationHeader.Content
              userName={!username ? "Jalal" : username}
              info="Active 10 mins ago"
            />
            <ConversationHeader.Actions>
              <VoiceCallButton />
              <VideoCallButton />
              <InfoButton />
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList>
            <MessageList.Content
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                textAlign: "center",
                fontSize: "1.2em",
              }}
            >
              {msgContainer}
              {msgAdminContainer}
            </MessageList.Content>
          </MessageList>
          <MessageInput
            onAttachClick={() => {
              alert("use library/function to upload here");
            }}
            onChange={(e) => {
              setAdminMessage(e);
            }}
            placeholder="Type message here"
            onSend={() => {
              props.sendMessage(
                "Admin",
                "Admin",
                adminMessage,
                props.connection
              );
            }}
          />
        </ChatContainer>

        <Sidebar position="right">
          <ExpansionPanel open title="INFO">
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
          </ExpansionPanel>
          <ExpansionPanel title="CUSTOMIZATION">
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
          </ExpansionPanel>
          <ExpansionPanel title="MEDIA">
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
          </ExpansionPanel>
          <ExpansionPanel title="SURVEY">
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
          </ExpansionPanel>
          <ExpansionPanel title="SETTINGS">
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
          </ExpansionPanel>
        </Sidebar>
      </MainContainer>
    </div>
  );
};

export default AdminPanel;
