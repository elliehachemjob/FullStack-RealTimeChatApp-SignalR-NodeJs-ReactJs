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
import ClientWidget from "./ClientWidget";
import AdminPanel from "./AdminPanel";

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
  const [connection, setConnection] = useState();
  const [users, setUsers] = useState([]);
  const reduxMessages = useSelector(storedMessages);
  const [isWidget, setisWidget] = useState(false);
  const [adminResponder, setAdminResponder] = useState();
  const [username, setUsername] = useState("");
  const [clientResponder, setClientResponder] = useState("");
  const [clientMessageArray, setClientMessageArray] = useState([]);
  const [adminMessageArray, setAdminMessageArray] = useState([]);

  const CustomMessageBoxClient = () => {
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
          <AdminPanel
            username={username}
            setUsername={setUsername}
            setClientResponder={setClientResponder}
            chatListMapping={chatListMapping}
            sendMessage={sendMessage}
            clientMessageArray={clientMessageArray}
            adminMessageArray={adminMessageArray}
            CustomMessageBoxClient={CustomMessageBoxClient}
            CustomMessageBoxAdmin1={CustomMessageBoxAdmin1}
          />
          <ClientWidget
            getCustomLauncher={getCustomLauncher}
            sendMessage={sendMessage}
          />
        </div>
      )}
    </div>
  );
};

export default App;
