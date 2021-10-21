import React, { useEffect, useState } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import axios from "axios";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { messageSave, storedMessages } from "./store/messages/messagesReducer";
import { usernameSelector } from "./store/auth/authReducer";

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
import { joinRoom, sendMessage } from "./functions/eventListeners";
import ClientWidget from "./components/ClientWidget";
import AdminPanel from "./components/AdminPanel";

const App = () => {
  //for admin panel
  const dispatch = useDispatch();
  const user = useSelector(usernameSelector);
  const reduxMessages = useSelector(storedMessages);
  const avatarIco =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEUOHCyclYufmI0AECZvbGkAACCjm5AIGCoxOUIAEycAFSgLGisNHCwEFykDFyljY2N9enUlLjkACCKWkIc+Q0lmZmWIhH0bJjN/e3YVIjGSjYRAREpbXF0tND54dXGEgHpKTVFTVVcfARIMAAADVklEQVR4nO3ciXaiMABA0ZA4lhBEcV+r/v9PTtA6FUVGLXOyzLtf4DtktVghAAAAAAAAAAAAAAAAAAAAAABAuIwej9XAuP4Y/4xR5XY+6U11pI1GL4ZrmSQyGaXZIHf9cTqXa7Gt+ipSfqZ64PoTdcuoYjj56js3jtJxRM/RqMUwueo7Ny6nqohjPtr1Zbi+6Ts1JqNpFsGak2eLxr5z4zItAp+PRtfn313jaT66/pTvM2p1N//uGvv7YOdjNf/ant/VWJ3qABsv+/szzmtOWHtHrldP950a7XwM6QxglJk9Mz7rjcvpOJCxWs2/v60vzY37qc78b7R9s1fGZ60xWW58PwMYu7+/Oj5vGr0+A9yer99qrM4AheuSZnZ/n8kf9p0a7RnAyzVHly+vnw8bq/no3faYbd5dX5obe749xNy8s0G0NW6166a6bNttYJJMxq6b6lSv68L+L9dNdRRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FL5Oxl4oR8p1U13XhXJdevb6ZbeFUo5K396E7rJQyvlBfLguutVdoUyWB+PfO9BdFUopZztV+NfXUaHs749KebbCXHTwFrScfKbGs5e7r5iy/7M8uR7ulNe/0Bt//uTHQNXq6evwvMjz+buJMumlYw9Xz1sfi7cS7ePbikB+XJntXk+Uk9FmpT0fnt+K3frFxzeZpdrLze+RbPdKX39+XKmPkPqsLJ0825d82tUlmOH5LZs+k2gf37DMwlhd7mSbJx7f/mBXl8CG5x+5PvzlcCP3UxXi8Pymju17xjys1bOJaj2Ey6O/h+tnGT1s+38taaArzLU8m7Ukpt59P/GGvO0+HEWhMC13qTgKRV48TIykUBgxepAYS6Ew+b45MZpCu2k0XxfjKRRm1ZgYUaEoyqbEmArtjbjhv4FEVdh46Y+rsCkxskKhN7eX/tgKhTrEXmgTZeSFuap/rxFf4e33GjEW1i/9MRbWL/1RFopc9/pxF15/rxFpoR2ol0t/rIX2Rvx16Y+20F4Xz5f+eAvtUzxdFyMuFKaw10Xp2zuHnRqU8/5chf53mVaDxSHqRyiqgRp5IAAAAAAAAAAAAAAAAAAAAAAA/4Hf0gU2cK/EibwAAAAASUVORK5CYII=";
  const [clientResponder, setClientResponder] = useState("");
  const [chatListMapping, setChatListMapping] = useState([]);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [clientMessageArray, setClientMessageArray] = useState([]);
  const [adminMessageArray, setAdminMessageArray] = useState([]);

  // for widget
  const [adminResponder, setAdminResponder] = useState();
  const [isWidget, setisWidget] = useState(false);
  const [connection, setConnection] = useState(); // also for admin
  const CustomMessageBoxAdmin = () => {
    return <div>{adminResponder}</div>;
  };

  useEffect(() => {
    renderCustomComponent(CustomMessageBoxAdmin);
  }, [adminResponder, setAdminResponder]);

  const Routing = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/SignUpForm">
            <SignUpForm />
          </Route>
          <Route exact path="/">
            <LoginForm
              joinRoom={joinRoom(
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
              )}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };

  return (
    <div>
      {!connection ? (
        <Routing />
      ) : (
        <div>
          <ClientWidget
            setisWidget={setisWidget}
            isWidget={isWidget}
            sendMessage={sendMessage(connection)}
          />
          <AdminPanel />
        </div>
      )}
    </div>
  );
};

export default App;
