import React, { Component, useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  adminMsgSelector,
  clientMsgSelector,
} from "../store/messges/messagesReducer";
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
} from "@chatscope/chat-ui-kit-react";
import { render } from "@testing-library/react";


interface message{
  message:string 
}


interface Props{
  username:string,
  setUsername:(username: string)=>void,
  setClientResponder:(response: string)=>void;
  chatListMapping:any[],
  clientMessageArray:message[],
  adminMessageArray:message[],
  sendMessage:(user3:string, isAdmin:string, message:string)=>Promise<void>
  }


  class  AdminPanel extends React.Component<Props> {


   adminMsgs:message[] = useSelector(adminMsgSelector);
   clientMsgs:message[] = useSelector(clientMsgSelector);


   avatarIco:string =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEUOHCyclYufmI0AECZvbGkAACCjm5AIGCoxOUIAEycAFSgLGisNHCwEFykDFyljY2N9enUlLjkACCKWkIc+Q0lmZmWIhH0bJjN/e3YVIjGSjYRAREpbXF0tND54dXGEgHpKTVFTVVcfARIMAAADVklEQVR4nO3ciXaiMABA0ZA4lhBEcV+r/v9PTtA6FUVGLXOyzLtf4DtktVghAAAAAAAAAAAAAAAAAAAAAABAuIwej9XAuP4Y/4xR5XY+6U11pI1GL4ZrmSQyGaXZIHf9cTqXa7Gt+ipSfqZ64PoTdcuoYjj56js3jtJxRM/RqMUwueo7Ny6nqohjPtr1Zbi+6Ts1JqNpFsGak2eLxr5z4zItAp+PRtfn313jaT66/pTvM2p1N//uGvv7YOdjNf/ant/VWJ3qABsv+/szzmtOWHtHrldP950a7XwM6QxglJk9Mz7rjcvpOJCxWs2/v60vzY37qc78b7R9s1fGZ60xWW58PwMYu7+/Oj5vGr0+A9yer99qrM4AheuSZnZ/n8kf9p0a7RnAyzVHly+vnw8bq/no3faYbd5dX5obe749xNy8s0G0NW6166a6bNttYJJMxq6b6lSv68L+L9dNdRRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FL5Oxl4oR8p1U13XhXJdevb6ZbeFUo5K396E7rJQyvlBfLguutVdoUyWB+PfO9BdFUopZztV+NfXUaHs749KebbCXHTwFrScfKbGs5e7r5iy/7M8uR7ulNe/0Bt//uTHQNXq6evwvMjz+buJMumlYw9Xz1sfi7cS7ePbikB+XJntXk+Uk9FmpT0fnt+K3frFxzeZpdrLze+RbPdKX39+XKmPkPqsLJ0825d82tUlmOH5LZs+k2gf37DMwlhd7mSbJx7f/mBXl8CG5x+5PvzlcCP3UxXi8Pymju17xjys1bOJaj2Ey6O/h+tnGT1s+38taaArzLU8m7Ukpt59P/GGvO0+HEWhMC13qTgKRV48TIykUBgxepAYS6Ew+b45MZpCu2k0XxfjKRRm1ZgYUaEoyqbEmArtjbjhv4FEVdh46Y+rsCkxskKhN7eX/tgKhTrEXmgTZeSFuap/rxFf4e33GjEW1i/9MRbWL/1RFopc9/pxF15/rxFpoR2ol0t/rIX2Rvx16Y+20F4Xz5f+eAvtUzxdFyMuFKaw10Xp2zuHnRqU8/5chf53mVaDxSHqRyiqgRp5IAAAAAAAAAAAAAAAAAAAAAAA/4Hf0gU2cK/EibwAAAAASUVORK5CYII=";

     CustomMessageBoxClient=() => {
    
    return (
      <div>
        {this.clientMsgs.map((m:any) => (
          <div>
            <Message
              model={{
                message: m.message,
                sentTime: "15 mins ago",
                sender: this.props.username,
                direction: "incoming",
                position: "single",
              }}
            >
              <Avatar src={this.avatarIco} name={this.props.username} />
            </Message>
          </div>
        ))}
        <div>
          {this.adminMsgs.map((m:any) => (
            <div>
              <Message
                model={{
                  message: m.message,
                  sentTime: "15 mins ago",
                  sender: this.props.username,
                  direction: "outgoing",
                  position: "single",
                }}
              >
                <Avatar src={this.avatarIco} name={this.props.username} />
              </Message>
            </div>
          ))}
        </div>
      </div>
    );
  }

  

  state = {
    adminMessage: "",
    msgContainer:this.CustomMessageBoxClient,

}




 names: string[] = ["Jalal","Ahmad","Ellie","Abas","Rita","Shadi","Sam","Marios"]

 msgs: string[][] = [["hey", "How is the project going"],["I talked to you yesterday", "Did you do redux"],["Good morning", "There is an issue here"],["Issue", "ticket 2021"],["There is a customer complaining", "need help"], [
  "How are you",
  "what is happening",
  "was calling you from mins ",
]]

 CustomMessageBoxJalal =()=> {
    return (
      <div>
        {this.msgs[0].map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: "15 mins ago",
                sender: this.props.username,
                direction: "outgoing",
                position: "single",
              }}
            >
              <Avatar src={this.avatarIco} name={this.props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  }

   CustomMessageBoxAhmad =()=> {
     return(
      <div>
        {this.msgs[1].map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: "15 mins ago",
                sender: this.props.username,
                direction: "outgoing",
                position: "single",
              }}
            >
              <Avatar src={this.avatarIco} name={this.props.username} />
            </Message>
          </div>
        ))}
      </div>)}
    

   CustomMessageBoxEllie =()=> {
    return (
      <div>
        {this.msgs[2].map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: "15 mins ago",
                sender: this.props.username,
                direction: "outgoing",
                position: "single",
              }}
            >
              <Avatar src={this.avatarIco} name={this.props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  }

   CustomMessageBoxAbas = ()=> {

    return (
      <div>
        {this.msgs[3].map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: "15 mins ago",
                sender: this.props.username,
                direction: "outgoing",
                position: "single",
              }}
            >
              <Avatar src={this.avatarIco} name={this.props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  }

   CustomMessageBoxRita =()=> {
    return (
      <div>
        {this.msgs[4].map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: "15 mins ago",
                sender: this.props.username,
                direction: "outgoing",
                position: "single",
              }}
            >
              <Avatar src={this.avatarIco} name={this.props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  }

   CustomMessageBoxShadi =()=> {
    return (
      <div>
        {this.msgs[5].map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: "15 mins ago",
                sender: this.props.username,
                direction: "outgoing",
                position: "single",
              }}
            >
              <Avatar src={this.avatarIco} name={this.props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  }

   CustomMessageBoxSam= ()=> {
    return (
      <div>
        {this.msgs[6].map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: "15 mins ago",
                sender: this.props.username,
                direction: "outgoing",
                position: "single",
              }}
            >
              <Avatar src={this.avatarIco} name={this.props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  }

   CustomMessageBoxMarios =()=> {
    return (
      <div>
        {this.msgs[7].map((m) => (
          <div>
            <Message
              model={{
                message: m,
                sentTime: "15 mins ago",
                sender: this.props.username,
                direction: "outgoing",
                position: "single",
              }}
            >
              <Avatar src={this.avatarIco} name={this.props.username} />
            </Message>
          </div>
        ))}
      </div>
    );
  }

render(){
  return (
    <div
      style={{
        height: "600px",
        position: "relative",
      }}
    >
      <MainContainer responsive>
        <Sidebar position="left" scrollable={false}>
          <Search placeholder="Search..." />
          <ConversationList>
            <Conversation
              name={this.names[0]}
              lastSenderName={this.names[0]}
              info="Yes i can do it for you"
              onClick={() => {
                this.props.setUsername(this.names[0]);
                this.setState({msgContainer:this.CustomMessageBoxJalal});
              }}
            >
              <Avatar src={this.avatarIco} name={this.names[0]} status="available" />
            </Conversation>

            <Conversation
              name={this.names[1]}
              lastSenderName={this.names[1]}
              info="Yes i can do it for you"
              onClick={() => {
                this.props.setClientResponder("");
                this.props.setUsername(this.names[1]);
                this.setState({msgContainer:this.CustomMessageBoxAhmad});
              }}
            >
              <Avatar src={this.avatarIco} name={this.names[1]} status="dnd" />
            </Conversation>

            <Conversation
              name={this.names[2]}
              lastSenderName={this.names[2]}
              info="Yes i can do it for you"
              unreadCnt={3}
              onClick={() => {
                this.props.setClientResponder("");
                this.props.setUsername(this.names[2]);
                this.setState({msgContainer:this.CustomMessageBoxEllie})
              }}
            >
              <Avatar src={this.avatarIco} name={this.names[2]} status="available" />
            </Conversation>

            <Conversation
              name={this.names[3]}
              lastSenderName={this.names[3]}
              info="Yes i can do it for you"
              onClick={() => {
                this.props.setClientResponder("");
                this.props.setUsername(this.names[3]);
                this.setState({msgContainer:this.CustomMessageBoxAbas})
              }}
            >
              <Avatar src={this.avatarIco} name={this.names[3]} status="dnd" />
            </Conversation>

            <Conversation
              name={this.names[4]}
              lastSenderName={this.names[4]}
              info="Yes i can do it for you"
              onClick={() => {
                this.props.setClientResponder("");
                this.props.setUsername(this.names[4]);
                this.setState({msgContainer:this.CustomMessageBoxRita})
              }}
            >
              <Avatar src={this.avatarIco} name={this.names[4]} status="dnd" />
            </Conversation>
            <Conversation
              name={this.names[5]}
              lastSenderName={this.names[5]}
              info="Yes i can do it for you"
              onClick={() => {
                this.props.setClientResponder("");
                this.props.setUsername(this.names[5]);
                this.setState({msgContainer:this.CustomMessageBoxShadi})
              }}
            >
              <Avatar src={this.avatarIco} name={this.names[5]} status="dnd" />
            </Conversation>

            <Conversation
              name={this.names[6]}
              lastSenderName={this.names[6]}
              info="Yes i can do it for you"
              onClick={() => {
                this.props.setClientResponder("");
                this.props.setUsername(this.names[6]);
                this.setState({msgContainer:this.CustomMessageBoxSam})
              }}
            >
              <Avatar src={this.avatarIco} name={this.names[6]} status="dnd" />
            </Conversation>

            <Conversation
              name={this.names[7]}
              lastSenderName={this.names[7]}
              info="Yes i can do it for you"
              onClick={() => {
                this.props.setClientResponder("");
                this.props.setUsername(this.names[7]);
                this.setState({msgContainer:this.CustomMessageBoxMarios})
              }}
            >
              <Avatar src={this.avatarIco} name={this.names[7]} status="dnd" />
            </Conversation>
            {this.props.chatListMapping}
          </ConversationList>
        </Sidebar>

        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar src={this.avatarIco} name={this.props.username} />
            <ConversationHeader.Content
              userName={!this.props.username ? "Jalal" : this.props.username}
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                textAlign: "center",
                fontSize: "1.2em",
              }}
            >
              {this.state.msgContainer}
            </MessageList.Content>
          </MessageList>
          <MessageInput
            onAttachClick={() => {
              alert("use library/function to upload here");
            }}
            onChange={(e:any) => {
              this.setState({adminMessage:e});
              
            }}
            placeholder="Type message here"
            onSend={() => {
              this.props.sendMessage("Admin", "Admin", this.state.adminMessage);
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
  )
}}

export default AdminPanel;
