import React, {Component} from "react";
import { Widget } from "react-chat-widget";
import flippedimage from "../assets/images/normalImage.png";
import normalimage from "../assets/images/flippedImage.png";



interface Props{

 isWidget:boolean,
 setIsWidget: (active: boolean)=>void,
 sendMessage:(user3:string, isAdmin:string, message:string)=>Promise<void>,
}



class  ClientWidget extends React.Component<Props> {


   getCustomLauncher = (handleToggle:any) => {
    if (this.props.isWidget) {
      return (
        <img
          src={normalimage}
          alt="imageNot working"
          className="rcw-launcher "
          onClick={() => {
            handleToggle();
            this.props.setIsWidget(false);
          }}
        />
      );
    } else {
      return (
        <img
          src={flippedimage}
          alt="imageNot working"
          className="rcw-launcher "
          onClick={() => {
            handleToggle();
            this.props.setIsWidget(true);
          }}
        />
      );
    }
  };
 render(){
  return (
    <div>
      <Widget
        handleNewUserMessage={(e:any) => this.props.sendMessage("okay", "Client", e)}
        launcher={(handleToggle:any) => this.getCustomLauncher(handleToggle)}
        title="Plugit Chat Support"
        subtitle="Welcome To Yoonit Customer Service"
        senderPlaceHolder="press send button or enter to send a message"
      />
    </div>
  );
}}

export default ClientWidget;
