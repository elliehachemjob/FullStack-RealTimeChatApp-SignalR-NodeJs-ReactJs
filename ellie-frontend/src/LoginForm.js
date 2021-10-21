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

const LoginForm = (props) => {
  const loginHandler = () => {
    axios
      .post(`http://localhost:1589/api/users/login`, {
        Email: user1,
        Auth: password1,
        IsAdmin: 0,
      })
      .then((res) => {
        console.log(` data is ${JSON.stringify(res)}`);
        if (res.data === "Logged In Successfully") {
          alert("sucess");
          props.joinRoom(user1);
        } else if (res.data === "Make sure email and password are correct") {
          alert("Make sure email and password are correct ");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const [user1, setUser1] = useState();
  const [password1, setPassword1] = useState();
  const [timer, setTimer] = useState(null);
  return (
    <Level>
      <Level.Item textAlign="centered">
        <Container
          style={{
            maxWidth: 400,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Card>
            <Section backgroundColor="primary">
              <Title style={{ color: "white" }}>Plugit Support Login</Title>
            </Section>
            <Card.Content>
              <Field>
                <Control iconLeft iconRight>
                  <Input
                    //  disabled={loading}
                    type="email"
                    placeholder="Email"
                    value={user1}
                    onChange={(e) => setUser1(e.target.value)}
                  />

                  <Icon size="small" align="left">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </Icon>
                  <Icon size="small" align="right">
                    <FontAwesomeIcon icon={faCheck} />
                  </Icon>
                </Control>
              </Field>
              <Field>
                <Control iconLeft>
                  <Input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword1(e.target.value)}
                    value={password1}
                  />

                  <Icon size="small" align="left">
                    <FontAwesomeIcon icon={faLock} />
                  </Icon>
                </Control>
              </Field>
              <Field>
                <Control>
                  <Label>
                    <Checkbox
                    //  disabled={loading}
                    />{" "}
                    Remember me
                  </Label>
                  <Label>
                    <Link
                      style={{
                        paddingLeft: 175,
                        top: 120,
                        right: 85,
                        position: "relative",
                      }}
                      to="/SignUpForm"
                    >
                      Create New Account
                    </Link>
                  </Label>
                </Control>
              </Field>
              <Field>
                <Control>
                  <Button
                    onClick={() => {
                      loginHandler();
                    }}
                    color="primary"
                  >
                    Login
                  </Button>
                </Control>
              </Field>
            </Card.Content>
          </Card>
        </Container>
      </Level.Item>
    </Level>
  );
};

export default LoginForm;
