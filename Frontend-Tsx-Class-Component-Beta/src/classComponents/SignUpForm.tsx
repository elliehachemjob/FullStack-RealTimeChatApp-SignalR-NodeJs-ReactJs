import React, { Component, useState } from "react";
import axios from "axios";
import "../App.css";

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
  Button,
} from "rbx";
import {
  faArrowRight,
  faCheck,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";



interface Props{
    joinRoom:(user:string)=>Promise<void>
    }


class  SignUpForm extends React.Component<Props> {
     
        state = {
             user2: "",
            password2:"",
            sendEmailVerification:""
        }

 


   signUpHandler = () => {
    axios
      .post(`http://localhost:1589/api/users`, {
        Email: this.state.user2,
        Auth: this.state.password2,
        IsAdmin: 0,
      })
      .then((res) => {
        console.log(` data is ${JSON.stringify(res)}`);
                // @ts-ignore
        if (res.data === "Added Successfully") {
          alert("register success");
          this.props.joinRoom(this.state.user2);
                  // @ts-ignore
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


  render(){
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
                    onChange={(e:any) => {
                      this.setState({user2:e.target.value});
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
                    onChange={(e:any) => this.setState({password2:e.target.value})}
                    value={this.state.password2}
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
                    onChange={(e:any) => this.setState({sendEmailVerification:e.target.value})}
                    value={this.state.sendEmailVerification}
                  />
                  <Icon size="small" align="left">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Icon>
                </Control>
              </Field>
              <Field>
                <Control>
                  <Label>
                    <Checkbox />
                    Remember me
                  </Label>
                </Control>
              </Field>
              <Field>
                <Control>
                  <Button
                    onClick={() => {
                      this.signUpHandler();
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
}
}
export default SignUpForm;
