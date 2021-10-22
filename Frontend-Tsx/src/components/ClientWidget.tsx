import React from "react";
import { Widget } from "react-chat-widget";
import flippedimage from "../assets/images/normalImage.png";
import normalimage from "../assets/images/flippedImage.png";



interface Props{

 isWidget?:boolean,
 setIsWidget?: (active: boolean)=>void;
 sendMessage?:(user3:any, isAdmin:any, message:any)=>any;
}



const  ClientWidget:React.FC<Props>=(props:any)=> {
  const getCustomLauncher = (handleToggle:any) => {
    if (props.isWidget) {
      return (
        <img
          src={normalimage}
          alt="imageNot working"
          className="rcw-launcher "
          onClick={() => {
            handleToggle();
            props.setIsWidget(false);
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
            props.setIsWidget(true);
          }}
        />
      );
    }
  };

  return (
    <div>
      <Widget
        handleNewUserMessage={(e:any) => props.sendMessage("okay", "Client", e)}
        launcher={(handleToggle:any) => getCustomLauncher(handleToggle)}
        title="Plugit Chat Support"
        subtitle="Welcome To Yoonit Customer Service"
        senderPlaceHolder="press send button or enter to send a message"
      />
    </div>
  );
}

export default ClientWidget;
