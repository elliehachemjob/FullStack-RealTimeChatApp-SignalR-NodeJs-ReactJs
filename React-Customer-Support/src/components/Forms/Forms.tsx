import React from 'react';
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
  loginHandler?: () => void;
  title?: string;
  fieldOneType?: string;
  fieldOnePlaceholder?: string;
  containerStyle?: {};
  fieldOneIcon?: any;
  fieldTwoIcon?: any;
  textAlign?: string;
  loginHandlertitle?: string;
  signUpHandlertitle?: string;
  rememberMe?: string;
  checkIcon?: any;
  titleColor?: string;
  fieldOneLeft?: boolean;
  fieldOneRight?: boolean;
  fieldTwoIconLeft?: boolean;
  titleBackground?: string;
  fieldTwoType?: string;
  fieldTwoPlaceholder?: string;
  checkIconSize?: string;
  checkIconAlign?: string;
  faEnvelopeSize?: string;
  faEnvelopeAlign?: string;
  sendEmailVerification?: string;
  setSendEmailVerification?: (active: string) => void;
  fieldThreeType?: string;
  fieldThreePlaceholder?: string;
  signUpHandler?: () => void;
}

export const LoginForm: React.FC<Props> = (props: any): any => {
  return (
    <Level>
      <Level.Item textAlign={props.textAlign ? props.textAlign : 'centered'}>
        <Container
          style={
            props.containerStyle
              ? props.containerStyle
              : {
                  maxWidth: 400,
                  height: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }
          }
        >
          <Card>
            <Section
              backgroundColor={
                props.titleBackground ? props.titleBackground : 'primary'
              }
            >
              <Title
                style={props.titleColor ? props.titleColor : { color: 'white' }}
              >
                {props.title ? props.title : 'Plugit Support Login'}
              </Title>
            </Section>
            <Card.Content>
              <Field>
                <Control
                  iconLeft={props.fieldOneIconLeft ? props.emailIconLeft : true}
                  iconRight={
                    props.fieldOneIconRight ? props.fieldOneIconRight : true
                  }
                >
                  <Input
                    type={props.fieldOneType ? props.fieldOneType : 'email'}
                    placeholder={
                      props.fieldOnePlaceholder
                        ? props.fieldOnePlaceholder
                        : 'email'
                    }
                    value={props.user}
                    onChange={(e: any) => props.setUser(e.target.value)}
                  />

                  <Icon
                    size={props.faEnvelopeSize ? props.faEnvelopeSize : 'small'}
                    align={
                      props.faEnvelopeAlign ? props.faEnvelopeAlign : 'left'
                    }
                  >
                    <FontAwesomeIcon
                      icon={
                        props.fieldOneIcon ? props.fieldOneIcon : faEnvelope
                      }
                    />
                  </Icon>
                  <Icon
                    size={props.checkIconSize ? props.checkIconSize : 'small'}
                    align={
                      props.checkIconAlign ? props.checkIconAlign : 'right'
                    }
                  >
                    <FontAwesomeIcon
                      icon={props.checkIcon ? props.checkIcon : faCheck}
                    />
                  </Icon>
                </Control>
              </Field>
              <Field>
                <Control
                  iconLeft={
                    props.fieldTwoIconLeft ? props.fieldTwoIconLeft : true
                  }
                >
                  <Input
                    type={props.fieldTwoType ? props.fieldTwoType : 'password'}
                    placeholder={
                      props.fieldTwoPlaceholder
                        ? props.fieldTwoPlaceholder
                        : 'password'
                    }
                    onChange={(e: any) => props.setPassword(e.target.value)}
                    value={props.password}
                  />
                  <Icon
                    size={props.faLockSize ? props.faLockSize : 'small'}
                    align={props.faLockAlign ? props.faLockAlign : 'left'}
                  >
                    <FontAwesomeIcon
                      icon={props.fieldTwoIcon ? props.fieldTwoIcon : faLock}
                    />
                  </Icon>
                </Control>
              </Field>
              <Field>
                <Control>
                  <Label>
                    <Checkbox />
                    {props.rememberMe ? props.rememberMe : 'Remember me'}
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
                    {props.loginHandlertitle
                      ? props.loginHandlertitle
                      : 'Login'}
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
  return (
    <Level>
      <Level.Item textAlign={props.textAlign ? props.textAlign : 'centered'}>
        <Container
          style={
            props.containerStyle
              ? props.containerStyle
              : {
                  maxWidth: 400,
                  height: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }
          }
        >
          <Card>
            <Section
              backgroundColor={
                props.titleBackground ? props.titleBackground : 'primary'
              }
            >
              <Title
                style={props.titleColor ? props.titleColor : { color: 'white' }}
              >
                {props.title ? props.title : 'Plugit Support Sign Up'}
              </Title>
            </Section>
            <Card.Content>
              <Field>
                <Control
                  iconLeft={props.fieldOneIconLeft ? props.emailIconLeft : true}
                  iconRight={
                    props.fieldOneIconRight ? props.fieldOneIconRight : true
                  }
                >
                  <Input
                    type={props.fieldOneType ? props.fieldOneType : 'email'}
                    placeholder={
                      props.fieldOnePlaceholder
                        ? props.fieldOnePlaceholder
                        : 'email'
                    }
                    value={props.user}
                    onChange={(e: any) => props.setUser(e.target.value)}
                  />

                  <Icon
                    size={props.faEnvelopeSize ? props.faEnvelopeSize : 'small'}
                    align={
                      props.faEnvelopeAlign ? props.faEnvelopeAlign : 'left'
                    }
                  >
                    <FontAwesomeIcon
                      icon={
                        props.fieldOneIcon ? props.fieldOneIcon : faEnvelope
                      }
                    />
                  </Icon>
                  <Icon
                    size={props.checkIconSize ? props.checkIconSize : 'small'}
                    align={
                      props.checkIconAlign ? props.checkIconAlign : 'right'
                    }
                  >
                    <FontAwesomeIcon
                      icon={props.checkIcon ? props.checkIcon : faCheck}
                    />
                  </Icon>
                </Control>
              </Field>
              <Field>
                <Control
                  iconLeft={
                    props.fieldTwoIconLeft ? props.fieldTwoIconLeft : true
                  }
                >
                  <Input
                    type={props.fieldTwoType ? props.fieldTwoType : 'password'}
                    placeholder={
                      props.fieldTwoPlaceholder
                        ? props.fieldTwoPlaceholder
                        : 'password'
                    }
                    onChange={(e: any) => props.setPassword(e.target.value)}
                    value={props.password}
                  />
                  <Icon
                    size={props.faLockSize ? props.faLockSize : 'small'}
                    align={props.faLockAlign ? props.faLockAlign : 'left'}
                  >
                    <FontAwesomeIcon
                      icon={props.fieldTwoIcon ? props.fieldTwoIcon : faLock}
                    />
                  </Icon>
                </Control>
              </Field>
              <Field>
                <Control iconLeft>
                  <Input
                    type={
                      props.fieldThreeType ? props.fieldThreeType : 'password'
                    }
                    placeholder={
                      props.fieldThreePlaceholder
                        ? props.fieldThreePlaceholder
                        : 'Send Email Verification'
                    }
                    onChange={(e: any) =>
                      props.setSendEmailVerification(e.target.value)
                    }
                    value={props.sendEmailVerification}
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
                    {props.rememberMe ? props.rememberMe : 'Remember me'}
                  </Label>
                  <Label></Label>
                </Control>
              </Field>
              <Field>
                <Control>
                  <Button
                    onClick={() => {
                      props.signUpHandler();
                    }}
                    color="primary"
                  >
                    {props.signUpHandlertitle
                      ? props.signUpHandlertitle
                      : 'SignUp'}
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
