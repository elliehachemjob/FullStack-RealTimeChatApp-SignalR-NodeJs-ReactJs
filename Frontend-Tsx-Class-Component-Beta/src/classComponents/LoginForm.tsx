
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
import { faCheck, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";



interface Props{
  joinRoom:(user:string)=>Promise<void>
  }



  class  LoginForm extends React.Component<Props> {
   
      state = {
        user1: "",
       password1:"",  
   }
     
   loginHandler = () => {
    axios
      .post(`http://localhost:1589/api/users/login`, {
        Email: this.state.user1,
        Auth: this.state.password1,
        IsAdmin: 0,
      })
      .then((res) => {
        console.log(` data is ${JSON.stringify(res)}`);
        // @ts-ignore
        if (  res.data === "Logged In Successfully") {
          alert("sucess");
          this.props.joinRoom(this.state.user1);
          // @ts-ignore
        } else if (res.data === "Make sure email and password are correct") {
          alert("Make sure email and password are correct ");
        }
      })
      .catch((e) => {
        console.log(e);
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
              <Title style={{ color: "white" }}>Plugit Support Login</Title>
            </Section>
            <Card.Content>
              <Field>
                <Control iconLeft iconRight>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={this.state.user1}
                    onChange={(e:any) => this.setState({user1:e.target.value})}
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
                    onChange={(e:any) => this.setState({password1:e.target.value})}
                    value={this.state.password1}
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
                      this.loginHandler();
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
  )
}}

export default LoginForm;
