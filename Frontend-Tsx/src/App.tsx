import "./styles.css";

import React, { useEffect, useState } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  messageSave,
  storedMessages,
  adminMsgSelector,
  clientMsgSelector,
  clientMsgsDispatcher,
  adminMsgsDispatcher,
} from "./store/messges/messagesReducer";
import { renderCustomComponent } from "react-chat-widget";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Message, Avatar, Conversation } from "@chatscope/chat-ui-kit-react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import ClientWidget from "./components/ClientWidget";
import AdminPanel from "./components/AdminPanel";


const App:React.FC<any>= ():any => {
  const avatarIco =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEUOHCyclYufmI0AECZvbGkAACCjm5AIGCoxOUIAEycAFSgLGisNHCwEFykDFyljY2N9enUlLjkACCKWkIc+Q0lmZmWIhH0bJjN/e3YVIjGSjYRAREpbXF0tND54dXGEgHpKTVFTVVcfARIMAAADVklEQVR4nO3ciXaiMABA0ZA4lhBEcV+r/v9PTtA6FUVGLXOyzLtf4DtktVghAAAAAAAAAAAAAAAAAAAAAABAuIwej9XAuP4Y/4xR5XY+6U11pI1GL4ZrmSQyGaXZIHf9cTqXa7Gt+ipSfqZ64PoTdcuoYjj56js3jtJxRM/RqMUwueo7Ny6nqohjPtr1Zbi+6Ts1JqNpFsGak2eLxr5z4zItAp+PRtfn313jaT66/pTvM2p1N//uGvv7YOdjNf/ant/VWJ3qABsv+/szzmtOWHtHrldP950a7XwM6QxglJk9Mz7rjcvpOJCxWs2/v60vzY37qc78b7R9s1fGZ60xWW58PwMYu7+/Oj5vGr0+A9yer99qrM4AheuSZnZ/n8kf9p0a7RnAyzVHly+vnw8bq/no3faYbd5dX5obe749xNy8s0G0NW6166a6bNttYJJMxq6b6lSv68L+L9dNdRRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FL5Oxl4oR8p1U13XhXJdevb6ZbeFUo5K396E7rJQyvlBfLguutVdoUyWB+PfO9BdFUopZztV+NfXUaHs749KebbCXHTwFrScfKbGs5e7r5iy/7M8uR7ulNe/0Bt//uTHQNXq6evwvMjz+buJMumlYw9Xz1sfi7cS7ePbikB+XJntXk+Uk9FmpT0fnt+K3frFxzeZpdrLze+RbPdKX39+XKmPkPqsLJ0825d82tUlmOH5LZs+k2gf37DMwlhd7mSbJx7f/mBXl8CG5x+5PvzlcCP3UxXi8Pymju17xjys1bOJaj2Ey6O/h+tnGT1s+38taaArzLU8m7Ukpt59P/GGvO0+HEWhMC13qTgKRV48TIykUBgxepAYS6Ew+b45MZpCu2k0XxfjKRRm1ZgYUaEoyqbEmArtjbjhv4FEVdh46Y+rsCkxskKhN7eX/tgKhTrEXmgTZeSFuap/rxFf4e33GjEW1i/9MRbWL/1RFopc9/pxF15/rxFpoR2ol0t/rIX2Rvx16Y+20F4Xz5f+eAvtUzxdFyMuFKaw10Xp2zuHnRqU8/5chf53mVaDxSHqRyiqgRp5IAAAAAAAAAAAAAAAAAAAAAAA/4Hf0gU2cK/EibwAAAAASUVORK5CYII=";
  const dispatch: any= useDispatch();
  const reduxMessages: string[]= useSelector(storedMessages);
  const adminMsgs: any= useSelector(adminMsgSelector);
  const clientMsgs: any = useSelector(clientMsgSelector);

  const [chatListMapping, setChatListMapping] = useState<any[]>([]);
  const [connection, setConnection] = useState<any>();
  const [users, setUsers] = useState<any>([]);
  const [adminResponder, setAdminResponder] = useState<any>();
  const [username, setUsername] = useState<any>("");
  const [clientResponder, setClientResponder] = useState<any>("");
  const [clientMessageArray, setClientMessageArray] = useState<any>([]);
  const [adminMessageArray, setAdminMessageArray] = useState<any[]>([]);

  const [isWidget, setIsWidget] = useState<any>(false);



  const CustomMessageBoxAdmin:React.FC<any> = ():any => {

    if (adminResponder)
      return <div className="admin-message">{adminResponder}</div>;
    else {
      return <div>{adminResponder}</div>;
    }
  };

  useEffect(() => {
    renderCustomComponent(CustomMessageBoxAdmin,adminResponder);
  }, [adminResponder, setAdminResponder]);
  const Home:React.FC = () :any=> {
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


  const joinRoom = async (user:any) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:44382/chat")
        .build();

      connection.on("ReceiveMessage", (user, message, id, isAdmin, user3) => {
  

        dispatch(messageSave([...reduxMessages, { user, message, id }]));
        if (isAdmin === "Admin") {
          setAdminResponder(message);
          setAdminMessageArray((adminMessageArray) => [...adminMessageArray  ,  { message } ]);
        } else if (isAdmin === "Client") {
          setClientResponder(message);

          dispatch(clientMsgsDispatcher("hi"));
          console.log(`clientmsgs are ${JSON.stringify(clientMsgs)}`);
        }

        setUsername(user);
      });

      connection.onclose((e) => {
        setConnection(undefined);
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

  const sendMessage = async (user3:any, isAdmin:any, message:any) => {
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
          <Home  />
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
          />
          <ClientWidget
            setIsWidget={setIsWidget}
            sendMessage={sendMessage}
            isWidget={isWidget}
          />
        </div>
      )}
    </div>
  );
};

export default App;
