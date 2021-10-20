import "../App.css";
import React, { useEffect, useRef, useState } from "react";
import {
  faArrowRight,
  faCheck,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  Card,
  Checkbox,
  Container,
  Control,
  Field,
  Icon,
  Input,
  Label,
  Level,
  Section,
  Title,
  Button,
} from "rbx";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const LoginForm = (props) => {
  const [user1, setUser1] = useState();
  const [password1, setPassword1] = useState();
  const [timer, setTimer] = useState(null);

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
                    <Checkbox /> Remember me
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
