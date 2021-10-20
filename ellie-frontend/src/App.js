import React, { useEffect, useState } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import axios from "axios";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { messageSave, storedMessages } from "./store/messages/messagesReducer";
import { Widget, renderCustomComponent } from "react-chat-widget";
import flippedimage from "./assets/images/flippedImage.png";
import normalimage from "./assets/images/normalImage.png";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import CustomSendMsgForAdminInAdminPanel from "./components/CustomSendMsgForAdminInAdminPanel";
import CustomRecieveMsgForAdminInAdminPanel from "./components/CustomRecieveMsgForAdminInAdminPanel";
import CustomMessageBoxInAdminPanel from "./components/CustomMessageBoxInAdminPanel";
const App = () => {
  const avatarIco =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEUOHCyclYufmI0AECZvbGkAACCjm5AIGCoxOUIAEycAFSgLGisNHCwEFykDFyljY2N9enUlLjkACCKWkIc+Q0lmZmWIhH0bJjN/e3YVIjGSjYRAREpbXF0tND54dXGEgHpKTVFTVVcfARIMAAADVklEQVR4nO3ciXaiMABA0ZA4lhBEcV+r/v9PTtA6FUVGLXOyzLtf4DtktVghAAAAAAAAAAAAAAAAAAAAAABAuIwej9XAuP4Y/4xR5XY+6U11pI1GL4ZrmSQyGaXZIHf9cTqXa7Gt+ipSfqZ64PoTdcuoYjj56js3jtJxRM/RqMUwueo7Ny6nqohjPtr1Zbi+6Ts1JqNpFsGak2eLxr5z4zItAp+PRtfn313jaT66/pTvM2p1N//uGvv7YOdjNf/ant/VWJ3qABsv+/szzmtOWHtHrldP950a7XwM6QxglJk9Mz7rjcvpOJCxWs2/v60vzY37qc78b7R9s1fGZ60xWW58PwMYu7+/Oj5vGr0+A9yer99qrM4AheuSZnZ/n8kf9p0a7RnAyzVHly+vnw8bq/no3faYbd5dX5obe749xNy8s0G0NW6166a6bNttYJJMxq6b6lSv68L+L9dNdRRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FL5Oxl4oR8p1U13XhXJdevb6ZbeFUo5K396E7rJQyvlBfLguutVdoUyWB+PfO9BdFUopZztV+NfXUaHs749KebbCXHTwFrScfKbGs5e7r5iy/7M8uR7ulNe/0Bt//uTHQNXq6evwvMjz+buJMumlYw9Xz1sfi7cS7ePbikB+XJntXk+Uk9FmpT0fnt+K3frFxzeZpdrLze+RbPdKX39+XKmPkPqsLJ0825d82tUlmOH5LZs+k2gf37DMwlhd7mSbJx7f/mBXl8CG5x+5PvzlcCP3UxXi8Pymju17xjys1bOJaj2Ey6O/h+tnGT1s+38taaArzLU8m7Ukpt59P/GGvO0+HEWhMC13qTgKRV48TIykUBgxepAYS6Ew+b45MZpCu2k0XxfjKRRm1ZgYUaEoyqbEmArtjbjhv4FEVdh46Y+rsCkxskKhN7eX/tgKhTrEXmgTZeSFuap/rxFf4e33GjEW1i/9MRbWL/1RFopc9/pxF15/rxFpoR2ol0t/rIX2Rvx16Y+20F4Xz5f+eAvtUzxdFyMuFKaw10Xp2zuHnRqU8/5chf53mVaDxSHqRyiqgRp5IAAAAAAAAAAAAAAAAAAAAAAA/4Hf0gU2cK/EibwAAAAASUVORK5CYII=";

  const [chatListMapping, setChatListMapping] = useState([]);
  const AdminPanel = () => {
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

    const Jalal = "Jalal";
    const Ahmad = "Ahmad";
    const Ellie = "Ellie";
    const Abas = "Abas";
    const Rita = "Rita";
    const Shadi = "Shadi";
    const Sam = "Sam";
    const Marios = "Marios";

    const jalalMsg = ["hey", "How is the project going"];

    const ahmadMsg = ["I talked to you yesterday", "Did you do redux"];

    const ellieMsg = ["Good morning", "There is an issue here"];

    const abasMsg = ["Issue", "ticket 2021"];

    const ritaMsg = ["There is a customer complaining", "need help"];

    const shadiMsg = ["In the row", "how is the project going"];

    const samMsg = ["No Message Here"];

    const mariosMsg = [
      "How are you",
      "what is happening",
      "was calling you from mins ",
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
                name={Jalal}
                lastSenderName={Jalal}
                info="Yes i can do it for you"
                onClick={() => {
                  setUsername(Jalal);
                  setMsgContainer(
                    <CustomMessageBoxInAdminPanel
                      msg={jalalMsg}
                      name={username}
                    />
                  );
                }}
              >
                <Avatar src={avatarIco} name={Jalal} status="available" />
              </Conversation>

              <Conversation
                name={Ahmad}
                lastSenderName={Ahmad}
                info="Yes i can do it for you"
                onClick={() => {
                  setClientResponder("");
                  setUsername(Ahmad);
                  setMsgContainer(
                    <CustomMessageBoxInAdminPanel
                      msg={ahmadMsg}
                      name={username}
                    />
                  );
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
                  setClientResponder("");
                  setUsername(Ellie);
                  setMsgContainer(
                    <CustomMessageBoxInAdminPanel
                      msg={ellieMsg}
                      name={username}
                    />
                  );
                }}
              >
                <Avatar src={avatarIco} name={Ellie} status="available" />
              </Conversation>

              <Conversation
                name={Abas}
                lastSenderName={Abas}
                info="Yes i can do it for you"
                onClick={() => {
                  setClientResponder("");
                  setUsername(Abas);
                  setMsgContainer(
                    <CustomMessageBoxInAdminPanel
                      msg={abasMsg}
                      name={username}
                    />
                  );
                }}
              >
                <Avatar src={avatarIco} name={Abas} status="dnd" />
              </Conversation>

              <Conversation
                name={Rita}
                lastSenderName={Rita}
                info="Yes i can do it for you"
                onClick={() => {
                  setClientResponder("");
                  setUsername(Rita);
                  setMsgContainer(
                    <CustomMessageBoxInAdminPanel
                      msg={ritaMsg}
                      name={username}
                    />
                  );
                }}
              >
                <Avatar src={avatarIco} name={Rita} status="dnd" />
              </Conversation>
              <Conversation
                name={Shadi}
                lastSenderName={Shadi}
                info="Yes i can do it for you"
                onClick={() => {
                  setClientResponder("");
                  setUsername(Shadi);
                  setMsgContainer(
                    <CustomMessageBoxInAdminPanel
                      msg={shadiMsg}
                      name={username}
                    />
                  );
                }}
              >
                <Avatar src={avatarIco} name={Shadi} status="dnd" />
              </Conversation>

              <Conversation
                name={Sam}
                lastSenderName={Sam}
                info="Yes i can do it for you"
                onClick={() => {
                  setClientResponder("");
                  setUsername(Sam);
                  setMsgContainer(
                    <CustomMessageBoxInAdminPanel
                      msg={samMsg}
                      name={username}
                    />
                  );
                }}
              >
                <Avatar src={avatarIco} name={Sam} status="dnd" />
              </Conversation>

              <Conversation
                name={Marios}
                lastSenderName={Marios}
                info="Yes i can do it for you"
                onClick={() => {
                  setClientResponder("");
                  setUsername(Marios);
                  setMsgContainer(
                    <CustomMessageBoxInAdminPanel
                      msg={mariosMsg}
                      name={username}
                    />
                  );
                }}
              >
                <Avatar src={avatarIco} name={Marios} status="dnd" />
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
                sendMessage("Admin", "Admin", adminMessage);
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

  const [connection, setConnection] = useState();
  const [users, setUsers] = useState([]);
  const reduxMessages = useSelector(storedMessages);
  const [isWidget, setisWidget] = useState(false);
  const [isRender, setIsRender] = useState(false);
  const [adminResponder, setAdminResponder] = useState();
  const [username, setUsername] = useState("");
  const [clientResponder, setClientResponder] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [clientMessageArray, setClientMessageArray] = useState([]);
  const [adminMessageArray, setAdminMessageArray] = useState([]);
  const dispatch = useDispatch();

  const handleNewUserMessage = (e) => {
    sendMessage("okay", "Client", e);
  };

  const CustomMessageBoxAdmin = () => {
    return <div>{adminResponder}</div>;
  };

  useEffect(() => {
    renderCustomComponent(CustomMessageBoxAdmin);
  }, [adminResponder, setAdminResponder]);

  const getCustomLauncher = (handleToggle) => {
    if (isWidget) {
      return (
        <img
          src={normalimage}
          alt="imageNot working"
          className="rcw-launcher "
          onClick={() => {
            handleToggle();
            setisWidget(false);
          }}
        />
      );
    } else {
      return (
        <img
          src={flippedimage}
          alt="imageNot working"
          className="rcw-launcher "
          onClick={() => {
            handleToggle();
            setisWidget(true);
          }}
        />
      );
    }
  };

  const Routing = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/SignUpForm">
            <SignUpForm />
          </Route>
          <Route exact path="/">
            <LoginForm joinRoom={joinRoom} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };

  const joinRoom = async (user) => {
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
        dispatch(messageSave([...reduxMessages, { user, message, id }]));
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
  };

  const sendMessage = async (user3, isAdmin, message) => {
    try {
      await connection.invoke("SendMessage", user3, isAdmin, message);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {!connection ? (
        <Routing />
      ) : (
        <div>
          <Widget
            handleNewUserMessage={handleNewUserMessage}
            launcher={(handleToggle) => getCustomLauncher(handleToggle)}
            title="Plugit Chat Support"
            subtitle="Welcome To Yoonit Customer Service"
            senderPlaceHolder="press send button or enter to send a message"
          />

          <AdminPanel />
        </div>
      )}
    </div>
  );
};

export default App;
