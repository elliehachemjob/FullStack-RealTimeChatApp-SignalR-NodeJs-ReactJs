import React, { useState } from 'react';
import axios from 'axios';
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
} from 'rbx';
import {
  faCheck,
  faEnvelope,
  faLock,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

interface Props {
  joinRoom: (user: string) => Promise<void>;
  user: string;
  setUser: (active: string) => void;
  password: string;
  setPassword: (active: string) => void;
  loginHandler: () => void;
  title?: string;
  type: string;
  placeholder: string;
}

export const LoginForm: React.FC<Props> = (props: any): any => {
  return (
    <Level>
      <Level.Item textAlign="centered">
        <Container
          style={{
            maxWidth: 400,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Card>
            <Section backgroundColor="primary">
              <Title style={{ color: 'white' }}>
                {props.title ? props.title : 'No title'}
              </Title>
            </Section>
            <Card.Content>
              <Field>
                <Control iconLeft iconRight>
                  <Input
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.user}
                    onChange={(e: any) => props.setUser(e.target.value)}
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
                    onChange={(e: any) => props.setPassword(e.target.value)}
                    value={props.password}
                  />

                  <Icon size="small" align="left">
                    <FontAwesomeIcon icon={faLock} />
                  </Icon>
                </Control>
              </Field>
              <Field>
                <Control>
                  <Label>
                    <Checkbox />
                    Remember me
                  </Label>
                  <Label></Label>
                </Control>
              </Field>
              <Field>
                <Control>
                  <Button
                    onClick={() => {
                      props.loginHandler();
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

export const SignUpForm: React.FC<Props> = (props: any): any => {
  const signUpHandler = () => {
    axios
      .post(`http://localhost:1589/api/users`, {
        Email: user2,
        Auth: password2,
        IsAdmin: 0,
      })
      .then((res) => {
        console.log(` data is ${JSON.stringify(res)}`);
        // @ts-ignore
        if (res.data === 'Added Successfully') {
          alert('register success');
          props.joinRoom(user2);
          // @ts-ignore
        } else if (res.data === 'Email Already Exist') {
          alert('email already exist');
        }
      })
      .catch((e) => {
        console.log(e);
        if (e) {
          alert('already exist');
        }
      });
  };

  const [user2, setUser2] = useState<string>();
  const [password2, setPassword2] = useState<string>();
  const [sendEmailVerification, setSendEmailVerification] = useState<string>();

  return (
    <Level>
      <Level.Item textAlign="centered">
        <Container
          style={{
            maxWidth: 400,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Card>
            <Section backgroundColor="primary">
              <Title style={{ color: 'white' }}>Plugit Support Sign Up</Title>
            </Section>
            <Card.Content>
              <Field>
                <Control iconLeft iconRight>
                  <Input
                    // enabled={loading}
                    type="email"
                    placeholder="Email"
                    onChange={(e: any) => {
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
                    onChange={(e: any) => setPassword2(e.target.value)}
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
                    onChange={(e: any) =>
                      setSendEmailVerification(e.target.value)
                    }
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
                    <Checkbox />
                    Remember me
                  </Label>
                </Control>
              </Field>
              <Field>
                <Control>
                  <Button
                    onClick={() => {
                      signUpHandler();
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
