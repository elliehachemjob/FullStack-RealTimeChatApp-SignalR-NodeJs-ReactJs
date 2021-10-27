import React, { useState } from 'react';
import './App.css';
import './styles.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
  Conversation,
  ConversationHeader,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
  ConversationList,
  Sidebar,
  Search,
  ExpansionPanel,
} from '@chatscope/chat-ui-kit-react';

interface message {
  message: string;
}

interface Props {
  username: string;
  setUsername: (username: string) => void;
  setClientResponder: (response: string) => void;
  chatListMapping: any[];
  clientMessageArray: message[];
  adminMessageArray: message[];
  sendMessage: (
    user3: string,
    isAdmin: string,
    message: string
  ) => Promise<void>;
}

export const AdminPanel: React.FC<Props> = (props: any): any => {
  interface message {
    message: string;
  }

  const clientMsgs = [];
  const adminMsgs = [
    { message: 'hey' },
    { message: 'admin here' },
    { message: '1' },
  ];

  const avatarIco: string =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEUOHCyclYufmI0AECZvbGkAACCjm5AIGCoxOUIAEycAFSgLGisNHCwEFykDFyljY2N9enUlLjkACCKWkIc+Q0lmZmWIhH0bJjN/e3YVIjGSjYRAREpbXF0tND54dXGEgHpKTVFTVVcfARIMAAADVklEQVR4nO3ciXaiMABA0ZA4lhBEcV+r/v9PTtA6FUVGLXOyzLtf4DtktVghAAAAAAAAAAAAAAAAAAAAAABAuIwej9XAuP4Y/4xR5XY+6U11pI1GL4ZrmSQyGaXZIHf9cTqXa7Gt+ipSfqZ64PoTdcuoYjj56js3jtJxRM/RqMUwueo7Ny6nqohjPtr1Zbi+6Ts1JqNpFsGak2eLxr5z4zItAp+PRtfn313jaT66/pTvM2p1N//uGvv7YOdjNf/ant/VWJ3qABsv+/szzmtOWHtHrldP950a7XwM6QxglJk9Mz7rjcvpOJCxWs2/v60vzY37qc78b7R9s1fGZ60xWW58PwMYu7+/Oj5vGr0+A9yer99qrM4AheuSZnZ/n8kf9p0a7RnAyzVHly+vnw8bq/no3faYbd5dX5obe749xNy8s0G0NW6166a6bNttYJJMxq6b6lSv68L+L9dNdRRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FL5Oxl4oR8p1U13XhXJdevb6ZbeFUo5K396E7rJQyvlBfLguutVdoUyWB+PfO9BdFUopZztV+NfXUaHs749KebbCXHTwFrScfKbGs5e7r5iy/7M8uR7ulNe/0Bt//uTHQNXq6evwvMjz+buJMumlYw9Xz1sfi7cS7ePbikB+XJntXk+Uk9FmpT0fnt+K3frFxzeZpdrLze+RbPdKX39+XKmPkPqsLJ0825d82tUlmOH5LZs+k2gf37DMwlhd7mSbJx7f/mBXl8CG5x+5PvzlcCP3UxXi8Pymju17xjys1bOJaj2Ey6O/h+tnGT1s+38taaArzLU8m7Ukpt59P/GGvO0+HEWhMC13qTgKRV48TIykUBgxepAYS6Ew+b45MZpCu2k0XxfjKRRm1ZgYUaEoyqbEmArtjbjhv4FEVdh46Y+rsCkxskKhN7eX/tgKhTrEXmgTZeSFuap/rxFf4e33GjEW1i/9MRbWL/1RFopc9/pxF15/rxFpoR2ol0t/rIX2Rvx16Y+20F4Xz5f+eAvtUzxdFyMuFKaw10Xp2zuHnRqU8/5chf53mVaDxSHqRyiqgRp5IAAAAAAAAAAAAAAAAAAAAAAA/4Hf0gU2cK/EibwAAAAASUVORK5CYII=';

  const CustomMessageBoxClient: any = (): any => {
    return (
      <div>
        {clientMsgs.map((m: any) => (
          <div>
            <Message
              model={{
                message: m.message,
                sentTime: '15 mins ago',
                sender: props.username,
                direction: 'incoming',
                position: 'single',
              }}
            >
              <Avatar src={avatarIco} name={props.username} />
            </Message>
          </div>
        ))}
        <div>
          {adminMsgs.map((m: any) => (
            <div>
              <Message
                model={{
                  message: m.message,
                  sentTime: '15 mins ago',
                  sender: props.username,
                  direction: 'outgoing',
                  position: 'single',
                }}
              >
                <Avatar src={avatarIco} name={props.username} />
              </Message>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const [adminMessage, setAdminMessage] = useState<string>('');
  const [msgContainer, setMsgContainer] = useState<any[]>(
    CustomMessageBoxClient
  );

  const names: string[] = [
    'Jalal',
    'Ahmad',
    'Ellie',
    'Abas',
    'Rita',
    'Shadi',
    'Sam',
    'Marios',
  ];

  const msgs: string[][] = [
    ['hey', 'How is the project going'],
    ['I talked to you yesterday', 'Did you do redux'],
    ['Good morning', 'There is an issue here'],
    ['Issue', 'ticket 2021'],
    ['There is a customer complaining', 'need help'],
    ['How are you', 'what is happening', 'was calling you from mins '],
  ];

  const CustomMessageBoxClientJalal: any = (): any => {
    return (
      <div>
        {msgs[0].map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: '15 mins ago',
                sender: props.username,
                direction: 'outgoing',
                position: 'single',
              }}
            >
              <Avatar src={avatarIco} name={props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  };

  const CustomMessageBoxClientAhmad: any = (): any => {
    return (
      <div>
        {msgs[1].map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: '15 mins ago',
                sender: props.username,
                direction: 'outgoing',
                position: 'single',
              }}
            >
              <Avatar src={avatarIco} name={props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  };

  const CustomMessageBoxClientEllie: any = (): any => {
    return (
      <div>
        {msgs[2].map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: '15 mins ago',
                sender: props.username,
                direction: 'outgoing',
                position: 'single',
              }}
            >
              <Avatar src={avatarIco} name={props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  };

  const CustomMessageBoxClientAbas: any = (): any => {
    return (
      <div>
        {msgs[3].map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: '15 mins ago',
                sender: props.username,
                direction: 'outgoing',
                position: 'single',
              }}
            >
              <Avatar src={avatarIco} name={props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  };

  const CustomMessageBoxClientRita: any = (): any => {
    return (
      <div>
        {msgs[4].map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: '15 mins ago',
                sender: props.username,
                direction: 'outgoing',
                position: 'single',
              }}
            >
              <Avatar src={avatarIco} name={props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  };

  const CustomMessageBoxClientShadi: any = (): any => {
    return (
      <div>
        {msgs[5].map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: '15 mins ago',
                sender: props.username,
                direction: 'outgoing',
                position: 'single',
              }}
            >
              <Avatar src={avatarIco} name={props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  };

  const CustomMessageBoxClientSam: any = (): any => {
    return (
      <div>
        {msgs[6].map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: '15 mins ago',
                sender: props.username,
                direction: 'outgoing',
                position: 'single',
              }}
            >
              <Avatar src={avatarIco} name={props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  };

  const CustomMessageBoxClientMarios: any = (): any => {
    return (
      <div>
        {msgs[7].map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: '15 mins ago',
                sender: props.username,
                direction: 'outgoing',
                position: 'single',
              }}
            >
              <Avatar src={avatarIco} name={props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      style={{
        height: '600px',
        position: 'relative',
      }}
    >
      <MainContainer responsive>
        <Sidebar position="left" scrollable={false}>
          <Search placeholder="Search..." />
          <ConversationList>
            <Conversation
              name={names[0]}
              lastSenderName={names[0]}
              info="Yes i can do it for you"
              onClick={() => {
                props.setUsername(names[0]);
                setMsgContainer(CustomMessageBoxClientJalal);
              }}
            >
              <Avatar src={avatarIco} name={names[0]} status="available" />
            </Conversation>

            <Conversation
              name={names[1]}
              lastSenderName={names[1]}
              info="Yes i can do it for you"
              onClick={() => {
                props.setClientResponder('');
                props.setUsername(names[1]);
                setMsgContainer(CustomMessageBoxClientAhmad);
              }}
            >
              <Avatar src={avatarIco} name={names[1]} status="dnd" />
            </Conversation>

            <Conversation
              name={names[2]}
              lastSenderName={names[2]}
              info="Yes i can do it for you"
              unreadCnt={3}
              onClick={() => {
                props.setClientResponder('');
                props.setUsername(names[2]);
                setMsgContainer(CustomMessageBoxClientEllie);
              }}
            >
              <Avatar src={avatarIco} name={names[2]} status="available" />
            </Conversation>

            <Conversation
              name={names[3]}
              lastSenderName={names[3]}
              info="Yes i can do it for you"
              onClick={() => {
                props.setClientResponder('');
                props.setUsername(names[3]);
                setMsgContainer(CustomMessageBoxClientAbas);
              }}
            >
              <Avatar src={avatarIco} name={names[3]} status="dnd" />
            </Conversation>

            <Conversation
              name={names[4]}
              lastSenderName={names[4]}
              info="Yes i can do it for you"
              onClick={() => {
                props.setClientResponder('');
                props.setUsername(names[4]);
                setMsgContainer(CustomMessageBoxClientRita);
              }}
            >
              <Avatar src={avatarIco} name={names[4]} status="dnd" />
            </Conversation>
            <Conversation
              name={names[5]}
              lastSenderName={names[5]}
              info="Yes i can do it for you"
              onClick={() => {
                props.setClientResponder('');
                props.setUsername(names[5]);
                setMsgContainer(CustomMessageBoxClientShadi);
              }}
            >
              <Avatar src={avatarIco} name={names[5]} status="dnd" />
            </Conversation>

            <Conversation
              name={names[6]}
              lastSenderName={names[6]}
              info="Yes i can do it for you"
              onClick={() => {
                props.setClientResponder('');
                props.setUsername(names[6]);
                setMsgContainer(CustomMessageBoxClientSam);
              }}
            >
              <Avatar src={avatarIco} name={names[6]} status="dnd" />
            </Conversation>

            <Conversation
              name={names[7]}
              lastSenderName={names[7]}
              info="Yes i can do it for you"
              onClick={() => {
                props.setClientResponder('');
                props.setUsername(names[7]);
                setMsgContainer(CustomMessageBoxClientMarios);
              }}
            >
              <Avatar src={avatarIco} name={names[7]} status="dnd" />
            </Conversation>
            {props.chatListMapping}
          </ConversationList>
        </Sidebar>

        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar src={avatarIco} name={props.username} />
            <ConversationHeader.Content
              userName={!props.username ? 'Jalal' : props.username}
              info="Active 10 mins ago"
            />
            <ConversationHeader.Actions>
              <VoiceCallButton />
              <VideoCallButton />
              <InfoButton />
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList>
            <MessageList.Content
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                textAlign: 'center',
                fontSize: '1.2em',
              }}
            >
              {msgContainer}
            </MessageList.Content>
          </MessageList>
          <MessageInput
            onAttachClick={() => {
              alert('use library/function to upload here');
            }}
            onChange={(e: any) => {
              setAdminMessage(e);
            }}
            placeholder="Type message here"
            onSend={() => {
              props.sendMessage('Admin', 'Admin', adminMessage);
            }}
          />
        </ChatContainer>

        <Sidebar position="right">
          <ExpansionPanel open title="INFO">
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
          </ExpansionPanel>
          <ExpansionPanel title="CUSTOMIZATION">
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
          </ExpansionPanel>
          <ExpansionPanel title="MEDIA">
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
          </ExpansionPanel>
          <ExpansionPanel title="SURVEY">
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
          </ExpansionPanel>
          <ExpansionPanel title="SETTINGS">
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
            <p>DynamicData</p>
          </ExpansionPanel>
        </Sidebar>
      </MainContainer>
    </div>
  );
};
