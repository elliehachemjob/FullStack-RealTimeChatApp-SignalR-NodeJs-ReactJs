import React, { useRef, useEffect, useState } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import axios from "axios";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { messageSave, storedMessages, clearMessages } from "./messagesReducer";
import {
  Widget,
  addResponseMessage,
  addUserMessage,
  renderCustomComponent,
} from "react-chat-widget";
import flippedimage from "./flippedImage.png";
import normalimage from "./normalPlugit.png";

import {
  Field,
  Control,
  Input,
  Icon,
  Container,
  Card,
  Level,
  Title,
  Section,
  Label,
  Checkbox,
} from "rbx";
import {
  faAddressBook,
  faArrowRight,
  faCheck,
  faEnvelope,
  faEnvelopeOpenText,
  faLock,
  faRegistered,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
  AvatarGroup,
  Button,
  Conversation,
  ConversationHeader,
  StarButton,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
  ConversationList,
  InputToolbox,
  Loader,
  TypingIndicator,
  StatusList,
  Status,
  Sidebar,
  Search,
  MessageSeparator,
  action,
  ExpansionPanel,
  MessageGroup,
} from "@chatscope/chat-ui-kit-react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const App = () => {
  const CustomMessageBoxAdmin1 = () => {
    console.log(`adminMessageArray ${JSON.stringify(adminMessageArray)}`);

    return (
      <div>
        <div>
          {adminMessageArray.map((m) => (
            <div>
              <Message
                model={{
                  message: m.message,
                  sentTime: "15 mins ago",
                  sender: username,
                  direction: "outgoing",
                  position: "single",
                }}
              >
                <Avatar src={avatarIco} name={username} />
              </Message>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const avatarIco =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEUOHCyclYufmI0AECZvbGkAACCjm5AIGCoxOUIAEycAFSgLGisNHCwEFykDFyljY2N9enUlLjkACCKWkIc+Q0lmZmWIhH0bJjN/e3YVIjGSjYRAREpbXF0tND54dXGEgHpKTVFTVVcfARIMAAADVklEQVR4nO3ciXaiMABA0ZA4lhBEcV+r/v9PTtA6FUVGLXOyzLtf4DtktVghAAAAAAAAAAAAAAAAAAAAAABAuIwej9XAuP4Y/4xR5XY+6U11pI1GL4ZrmSQyGaXZIHf9cTqXa7Gt+ipSfqZ64PoTdcuoYjj56js3jtJxRM/RqMUwueo7Ny6nqohjPtr1Zbi+6Ts1JqNpFsGak2eLxr5z4zItAp+PRtfn313jaT66/pTvM2p1N//uGvv7YOdjNf/ant/VWJ3qABsv+/szzmtOWHtHrldP950a7XwM6QxglJk9Mz7rjcvpOJCxWs2/v60vzY37qc78b7R9s1fGZ60xWW58PwMYu7+/Oj5vGr0+A9yer99qrM4AheuSZnZ/n8kf9p0a7RnAyzVHly+vnw8bq/no3faYbd5dX5obe749xNy8s0G0NW6166a6bNttYJJMxq6b6lSv68L+L9dNdRRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FL5Oxl4oR8p1U13XhXJdevb6ZbeFUo5K396E7rJQyvlBfLguutVdoUyWB+PfO9BdFUopZztV+NfXUaHs749KebbCXHTwFrScfKbGs5e7r5iy/7M8uR7ulNe/0Bt//uTHQNXq6evwvMjz+buJMumlYw9Xz1sfi7cS7ePbikB+XJntXk+Uk9FmpT0fnt+K3frFxzeZpdrLze+RbPdKX39+XKmPkPqsLJ0825d82tUlmOH5LZs+k2gf37DMwlhd7mSbJx7f/mBXl8CG5x+5PvzlcCP3UxXi8Pymju17xjys1bOJaj2Ey6O/h+tnGT1s+38taaArzLU8m7Ukpt59P/GGvO0+HEWhMC13qTgKRV48TIykUBgxepAYS6Ew+b45MZpCu2k0XxfjKRRm1ZgYUaEoyqbEmArtjbjhv4FEVdh46Y+rsCkxskKhN7eX/tgKhTrEXmgTZeSFuap/rxFf4e33GjEW1i/9MRbWL/1RFopc9/pxF15/rxFpoR2ol0t/rIX2Rvx16Y+20F4Xz5f+eAvtUzxdFyMuFKaw10Xp2zuHnRqU8/5chf53mVaDxSHqRyiqgRp5IAAAAAAAAAAAAAAAAAAAAAAA/4Hf0gU2cK/EibwAAAAASUVORK5CYII=";

  const [chatListMapping, setChatListMapping] = useState([]);
  const AdminPanel = () => {
    const [adminMessage, setAdminMessage] = useState("");
    const [msgContainer, setMsgContainer] = useState(CustomMessageBoxClient);
    const [msgAdminContainer, setmsgAdminContainer] = useState(
      CustomMessageBoxAdmin1
    );

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

      console.log(`clientMessageArray ${JSON.stringify(clientMessageArray)}`);

      return (
        <div>
          {jalalMsg.map((m) => (
            <div>
              <Message
                model={{
                  message: m,
                  sentTime: "15 mins ago",
                  sender: username,
                  direction: "outgoing",
                  position: "single",
                }}
              >
                <Avatar src={avatarIco} name={username} />
              </Message>
            </div>
          ))}
        </div>
      );
    };

    const CustomMessageBoxClientAhmad = () => {
      const ahmadMsg = ["I talked to you yesterday", "Did you do redux"];

      console.log(`clientMessageArray ${JSON.stringify(clientMessageArray)}`);

      return (
        <div>
          {ahmadMsg.map((m) => (
            <div>
              <Message
                model={{
                  message: m,
                  sentTime: "15 mins ago",
                  sender: username,
                  direction: "outgoing",
                  position: "single",
                }}
              >
                <Avatar src={avatarIco} name={username} />
              </Message>
            </div>
          ))}
        </div>
      );
    };

    const CustomMessageBoxClientEllie = () => {
      const ellieMsg = ["Good morning", "There is an issue here"];

      console.log(`clientMessageArray ${JSON.stringify(clientMessageArray)}`);

      return (
        <div>
          {ellieMsg.map((m) => (
            <div>
              <Message
                model={{
                  message: m,
                  sentTime: "15 mins ago",
                  sender: username,
                  direction: "outgoing",
                  position: "single",
                }}
              >
                <Avatar src={avatarIco} name={username} />
              </Message>
            </div>
          ))}
        </div>
      );
    };

    const CustomMessageBoxClientAbas = () => {
      const abasMsg = ["Issue", "ticket 2021"];

      console.log(`clientMessageArray ${JSON.stringify(clientMessageArray)}`);

      return (
        <div>
          {abasMsg.map((m) => (
            <div>
              <Message
                model={{
                  message: m,
                  sentTime: "15 mins ago",
                  sender: username,
                  direction: "outgoing",
                  position: "single",
                }}
              >
                <Avatar src={avatarIco} name={username} />
              </Message>
            </div>
          ))}
        </div>
      );
    };

    const CustomMessageBoxClientRita = () => {
      const ritaMsg = ["There is a customer complaining", "need help"];

      console.log(`clientMessageArray ${JSON.stringify(clientMessageArray)}`);

      return (
        <div>
          {ritaMsg.map((m) => (
            <div>
              <Message
                model={{
                  message: m,
                  sentTime: "15 mins ago",
                  sender: username,
                  direction: "outgoing",
                  position: "single",
                }}
              >
                <Avatar src={avatarIco} name={username} />
              </Message>
            </div>
          ))}
        </div>
      );
    };

    const CustomMessageBoxClientShadi = () => {
      const shadiMsg = ["In the row", "how is the project going"];

      const abasMsg = ["Issue", "ticket 2021"];

      console.log(`clientMessageArray ${JSON.stringify(clientMessageArray)}`);

      return (
        <div>
          {shadiMsg.map((m) => (
            <div>
              <Message
                model={{
                  message: m,
                  sentTime: "15 mins ago",
                  sender: username,
                  direction: "outgoing",
                  position: "single",
                }}
              >
                <Avatar src={avatarIco} name={username} />
              </Message>
            </div>
          ))}
        </div>
      );
    };

    const CustomMessageBoxClientSam = () => {
      const samMsg = ["No Message Here"];

      const abasMsg = ["Issue", "ticket 2021"];

      console.log(`clientMessageArray ${JSON.stringify(clientMessageArray)}`);

      return (
        <div>
          {samMsg.map((m) => (
            <div>
              <Message
                model={{
                  message: m,
                  sentTime: "15 mins ago",
                  sender: username,
                  direction: "outgoing",
                  position: "single",
                }}
              >
                <Avatar src={avatarIco} name={username} />
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

      console.log(`clientMessageArray ${JSON.stringify(clientMessageArray)}`);

      return (
        <div>
          {mariosMsg.map((m) => (
            <div>
              <Message
                model={{
                  message: m,
                  sentTime: "15 mins ago",
                  sender: username,
                  direction: "outgoing",
                  position: "single",
                }}
              >
                <Avatar src={avatarIco} name={username} />
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
                  setUsername(Jalal);
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
                  setClientResponder("");
                  setUsername(Ahmad);
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
                  setClientResponder("");
                  setUsername(Ellie);
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
                  setClientResponder("");
                  setUsername(Abas);
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
                  setClientResponder("");
                  setUsername(Abas);
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
                  setClientResponder("");
                  setUsername(Shadi);
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
                  setClientResponder("");
                  setUsername(Sam);
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
                  setClientResponder("");
                  setUsername(Marios);
                  setMsgContainer(CustomMessageBoxClientMarios);
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
                console.log(adminMessage);
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
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const reduxMessages = useSelector(storedMessages);
  const [chatBox, setChatBox] = useState([<span></span>]);
  const [newBox, setNewBox] = useState([<span></span>]);

  const [isWidget, setisWidget] = useState(false);
  const [isonline, setIsOnline] = useState(false);
  const [ispending, setIsPending] = useState(false);
  const [messges2, setMessages2] = useState([]);
  const [isRender, setIsRender] = useState(false);
  const [adminResponder, setAdminResponder] = useState();
  const [username, setUsername] = useState("");
  const [clientResponder, setClientResponder] = useState("");
  const [user3, setUser3] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [clientMessageArray, setClientMessageArray] = useState([]);
  const [adminMessageArray, setAdminMessageArray] = useState([]);

  const handleNewUserMessage = (e) => {
    setIsSending(false);

    setIsRender(true);
    sendMessage("okay", "Client", e);
    setMessages2([...messges2, e]);
    console.log(` this is ${messges2}`);
  };

  const ComponentToRender = () => {
    return (
      <div className="App">
        <h1>hi </h1>
      </div>
    );
  };

  const CustomMessageBox = () => {
    if (adminResponder)
      return <div className="rcw-responder">{adminResponder}</div>;
    else {
      return <div>{adminResponder}</div>;
    }
  };

  const CustomMessageBoxClientJalal = () => {
    const jalalMsg = ["hey", "How is the project going"];

    console.log(`clientMessageArray ${JSON.stringify(clientMessageArray)}`);

    return (
      <div>
        <div>
          <Message
            model={{
              message: "hey",
              sentTime: "15 mins ago",
              sender: "Jalal",
              direction: "outgoing",
              position: "single",
            }}
          >
            <Avatar src={avatarIco} name="Jalal" />
          </Message>
        </div>
      </div>
    );
  };

  const CustomMessageBoxClient = () => {
    console.log(`clientMessageArray ${JSON.stringify(clientMessageArray)}`);

    return (
      <div>
        {clientMessageArray.map((m) => (
          <div>
            <Message
              model={{
                message: m.message,
                sentTime: "15 mins ago",
                sender: username,
                direction: "incoming",
                position: "single",
              }}
            >
              <Avatar src={avatarIco} name={username} />
            </Message>
          </div>
        ))}
      </div>
    );
  };

  const CustomMessageBoxAdmin = () => {
    if (adminResponder)
      return <div className="admin-message">{adminResponder}</div>;
    else {
      return <div>{adminResponder}</div>;
    }
  };

  useEffect(() => {
    if (isSending == 5) {
      renderCustomComponent(CustomMessageBoxAdmin);
    } else {
      renderCustomComponent(CustomMessageBoxAdmin);
    }
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

  const dispatch = useDispatch();

  const Home = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/SignUpForm">
            <SignUpForm joinRoom={joinRoom} />
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
        console.log(`this is the id ${data}`);
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
        console.log(`the user name is ${user}`);
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
      console.log("message sent");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {!connection ? (
        <div>
          <Home joinRoom={joinRoom} />
        </div>
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
