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

const SignUpForm = (props) => {
  const signUpHandler = () => {
    axios
      .post(`http://localhost:1589/api/users`, {
        Email: user2,
        Auth: password2,
        IsAdmin: 0,
      })
      .then((res) => {
        console.log(` data is ${JSON.stringify(res)}`);
        if (res.data === "Added Successfully") {
          alert("register success");
          props.joinRoom(user2);
        } else if (res.data === "Email Already Exist") {
          alert("email already exist");
        }
      })
      .catch((e) => {
        console.log(e);
        if (e) {
          alert("already exist");
        }
      });
  };

  const [user2, setUser2] = useState();
  const [password2, setPassword2] = useState();
  const [sendEmailVerification, setSendEmailVerification] = useState();
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
              <Title style={{ color: "white" }}>Plugit Support Sign Up</Title>
            </Section>
            <Card.Content>
              <Field>
                <Control iconLeft iconRight>
                  <Input
                    // enabled={loading}
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
                      setUser2(e.target.value);
                    }}
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
                    onChange={(e) => setPassword2(e.target.value)}
                    value={password2}
                  />
                  <Icon size="small" align="left">
                    <FontAwesomeIcon icon={faLock} />
                  </Icon>
                </Control>
              </Field>
              <Field>
                <Control iconLeft>
                  <Input
                    type="email"
                    placeholder="Send Email Verification"
                    onChange={(e) => setSendEmailVerification(e.target.value)}
                    value={sendEmailVerification}
                  />
                  <Icon size="small" align="left">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Icon>
                </Control>
              </Field>
              <Field>
                <Control>
                  <Label>
                    <Checkbox
                    // disabled={loading}
                    />{" "}
                    Remember me
                  </Label>
                </Control>
              </Field>
              <Field>
                <Control>
                  <Button
                    // state={loading ? "loading" : undefined}
                    onClick={() => {
                      signUpHandler();
                      // setLoading(true);
                    }}
                    color="primary"
                  >
                    SignUp
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

export default SignUpForm;
