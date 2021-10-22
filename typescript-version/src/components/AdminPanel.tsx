import React, { useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  adminMsgSelector,
  clientMsgSelector,
} from "../store/messges/messagesReducer";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
  Conversation,
  ConversationHeader,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
  ConversationList,
  Sidebar,
  Search,
  ExpansionPanel,
} from "@chatscope/chat-ui-kit-react";

const AdminPanel = (props:any) => {
  let adminMsgs = useSelector(adminMsgSelector);
  let clientMsgs = useSelector(clientMsgSelector);

  const avatarIco =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEUOHCyclYufmI0AECZvbGkAACCjm5AIGCoxOUIAEycAFSgLGisNHCwEFykDFyljY2N9enUlLjkACCKWkIc+Q0lmZmWIhH0bJjN/e3YVIjGSjYRAREpbXF0tND54dXGEgHpKTVFTVVcfARIMAAADVklEQVR4nO3ciXaiMABA0ZA4lhBEcV+r/v9PTtA6FUVGLXOyzLtf4DtktVghAAAAAAAAAAAAAAAAAAAAAABAuIwej9XAuP4Y/4xR5XY+6U11pI1GL4ZrmSQyGaXZIHf9cTqXa7Gt+ipSfqZ64PoTdcuoYjj56js3jtJxRM/RqMUwueo7Ny6nqohjPtr1Zbi+6Ts1JqNpFsGak2eLxr5z4zItAp+PRtfn313jaT66/pTvM2p1N//uGvv7YOdjNf/ant/VWJ3qABsv+/szzmtOWHtHrldP950a7XwM6QxglJk9Mz7rjcvpOJCxWs2/v60vzY37qc78b7R9s1fGZ60xWW58PwMYu7+/Oj5vGr0+A9yer99qrM4AheuSZnZ/n8kf9p0a7RnAyzVHly+vnw8bq/no3faYbd5dX5obe749xNy8s0G0NW6166a6bNttYJJMxq6b6lSv68L+L9dNdRRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FL5Oxl4oR8p1U13XhXJdevb6ZbeFUo5K396E7rJQyvlBfLguutVdoUyWB+PfO9BdFUopZztV+NfXUaHs749KebbCXHTwFrScfKbGs5e7r5iy/7M8uR7ulNe/0Bt//uTHQNXq6evwvMjz+buJMumlYw9Xz1sfi7cS7ePbikB+XJntXk+Uk9FmpT0fnt+K3frFxzeZpdrLze+RbPdKX39+XKmPkPqsLJ0825d82tUlmOH5LZs+k2gf37DMwlhd7mSbJx7f/mBXl8CG5x+5PvzlcCP3UxXi8Pymju17xjys1bOJaj2Ey6O/h+tnGT1s+38taaArzLU8m7Ukpt59P/GGvO0+HEWhMC13qTgKRV48TIykUBgxepAYS6Ew+b45MZpCu2k0XxfjKRRm1ZgYUaEoyqbEmArtjbjhv4FEVdh46Y+rsCkxskKhN7eX/tgKhTrEXmgTZeSFuap/rxFf4e33GjEW1i/9MRbWL/1RFopc9/pxF15/rxFpoR2ol0t/rIX2Rvx16Y+20F4Xz5f+eAvtUzxdFyMuFKaw10Xp2zuHnRqU8/5chf53mVaDxSHqRyiqgRp5IAAAAAAAAAAAAAAAAAAAAAAA/4Hf0gU2cK/EibwAAAAASUVORK5CYII=";

  const CustomMessageBoxClient = () => {
    return (
      <div>
        {clientMsgs.map((m:any) => (
          <div>
            <Message
              model={{
                message: m.message,
                sentTime: "15 mins ago",
                sender: props.username,
                direction: "incoming",
                position: "single",
              }}
            >
              <Avatar src={avatarIco} name={props.username} />
            </Message>
          </div>
        ))}
        <div>
          {adminMsgs.map((m:any) => (
            <div>
              <Message
                model={{
                  message: m.message,
                  sentTime: "15 mins ago",
                  sender: props.username,
                  direction: "outgoing",
                  position: "single",
                }}
              >
                <Avatar src={avatarIco} name={props.username} />
              </Message>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const [adminMessage, setAdminMessage] = useState("");
  const [msgContainer, setMsgContainer] = useState(CustomMessageBoxClient);

  const Jalal = "Jalal";
  const Ahmad = "Ahmad";
  const Ellie = "Ellie";
  const Abas = "Abas";
  const Rita = "Rita";
  const Shadi = "Shadi";
  const Sam = "Sam";
  const Marios = "Marios";

  const CustomMessageBoxClientJalal = () => {
    const jalalMsg = ["hey", "How is the project going"];

    return (
      <div>
        {jalalMsg.map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: "15 mins ago",
                sender: props.username,
                direction: "outgoing",
                position: "single",
              }}
            >
              <Avatar src={avatarIco} name={props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  };

  const CustomMessageBoxClientAhmad = () => {
    const ahmadMsg = ["I talked to you yesterday", "Did you do redux"];

    return (
      <div>
        {ahmadMsg.map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: "15 mins ago",
                sender: props.username,
                direction: "outgoing",
                position: "single",
              }}
            >
              <Avatar src={avatarIco} name={props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  };

  const CustomMessageBoxClientEllie = () => {
    const ellieMsg = ["Good morning", "There is an issue here"];

    return (
      <div>
        {ellieMsg.map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: "15 mins ago",
                sender: props.username,
                direction: "outgoing",
                position: "single",
              }}
            >
              <Avatar src={avatarIco} name={props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  };

  const CustomMessageBoxClientAbas = () => {
    const abasMsg = ["Issue", "ticket 2021"];

    return (
      <div>
        {abasMsg.map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: "15 mins ago",
                sender: props.username,
                direction: "outgoing",
                position: "single",
              }}
            >
              <Avatar src={avatarIco} name={props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  };

  const CustomMessageBoxClientRita = () => {
    const ritaMsg = ["There is a customer complaining", "need help"];

    return (
      <div>
        {ritaMsg.map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: "15 mins ago",
                sender: props.username,
                direction: "outgoing",
                position: "single",
              }}
            >
              <Avatar src={avatarIco} name={props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  };

  const CustomMessageBoxClientShadi = () => {
    const shadiMsg = ["In the row", "how is the project going"];

    const abasMsg = ["Issue", "ticket 2021"];

    return (
      <div>
        {shadiMsg.map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: "15 mins ago",
                sender: props.username,
                direction: "outgoing",
                position: "single",
              }}
            >
              <Avatar src={avatarIco} name={props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  };

  const CustomMessageBoxClientSam = () => {
    const samMsg = ["No Message Here"];

    const abasMsg = ["Issue", "ticket 2021"];

    return (
      <div>
        {samMsg.map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: "15 mins ago",
                sender: props.username,
                direction: "outgoing",
                position: "single",
              }}
            >
              <Avatar src={avatarIco} name={props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  };

  const CustomMessageBoxClientMarios = () => {
    const mariosMsg = [
      "How are you",
      "what is happening",
      "was calling you from mins ",
    ];

    const abasMsg = ["Issue", "ticket 2021"];

    return (
      <div>
        {mariosMsg.map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: "15 mins ago",
                sender: props.username,
                direction: "outgoing",
                position: "single",
              }}
            >
              <Avatar src={avatarIco} name={props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  };

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
              name={Jalal}
              lastSenderName={Jalal}
              info="Yes i can do it for you"
              onClick={() => {
                props.setUsername(Jalal);
                setMsgContainer(CustomMessageBoxClientJalal);
              }}
            >
              <Avatar src={avatarIco} name={Jalal} status="available" />
            </Conversation>

            <Conversation
              name={Ahmad}
              lastSenderName={Ahmad}
              info="Yes i can do it for you"
              onClick={() => {
                props.setClientResponder("");
                props.setUsername(Ahmad);
                setMsgContainer(CustomMessageBoxClientAhmad);
              }}
            >
              <Avatar src={avatarIco} name={Ahmad} status="dnd" />
            </Conversation>

            <Conversation
              name={Ellie}
              lastSenderName={Ellie}
              info="Yes i can do it for you"
              unreadCnt={3}
              onClick={() => {
                props.setClientResponder("");
                props.setUsername(Ellie);
                setMsgContainer(CustomMessageBoxClientEllie);
              }}
            >
              <Avatar src={avatarIco} name={Ellie} status="available" />
            </Conversation>

            <Conversation
              name={Abas}
              lastSenderName={Abas}
              info="Yes i can do it for you"
              onClick={() => {
                props.setClientResponder("");
                props.setUsername(Abas);
                setMsgContainer(CustomMessageBoxClientAbas);
              }}
            >
              <Avatar src={avatarIco} name={Abas} status="dnd" />
            </Conversation>

            <Conversation
              name={Rita}
              lastSenderName={Rita}
              info="Yes i can do it for you"
              onClick={() => {
                props.setClientResponder("");
                props.setUsername(Abas);
                setMsgContainer(CustomMessageBoxClientRita);
              }}
            >
              <Avatar src={avatarIco} name={Rita} status="dnd" />
            </Conversation>
            <Conversation
              name={Shadi}
              lastSenderName={Shadi}
              info="Yes i can do it for you"
              onClick={() => {
                props.setClientResponder("");
                props.setUsername(Shadi);
                setMsgContainer(CustomMessageBoxClientShadi);
              }}
            >
              <Avatar src={avatarIco} name={Shadi} status="dnd" />
            </Conversation>

            <Conversation
              name={Sam}
              lastSenderName={Sam}
              info="Yes i can do it for you"
              onClick={() => {
                props.setClientResponder("");
                props.setUsername(Sam);
                setMsgContainer(CustomMessageBoxClientSam);
              }}
            >
              <Avatar src={avatarIco} name={Sam} status="dnd" />
            </Conversation>

            <Conversation
              name={Marios}
              lastSenderName={Marios}
              info="Yes i can do it for you"
              onClick={() => {
                props.setClientResponder("");
                props.setUsername(Marios);
                setMsgContainer(CustomMessageBoxClientMarios);
              }}
            >
              <Avatar src={avatarIco} name={Marios} status="dnd" />
            </Conversation>
            {props.chatListMapping}
          </ConversationList>
        </Sidebar>

        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar src={avatarIco} name={props.username} />
            <ConversationHeader.Content
              userName={!props.username ? "Jalal" : props.username}
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
            </MessageList.Content>
          </MessageList>
          <MessageInput
            onAttachClick={() => {
              alert("use library/function to upload here");
            }}
            onChange={(e:any) => {
              setAdminMessage(e);
            }}
            placeholder="Type message here"
            onSend={() => {
              props.sendMessage("Admin", "Admin", adminMessage);
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
