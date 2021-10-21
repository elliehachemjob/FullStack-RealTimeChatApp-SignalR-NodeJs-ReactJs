import React from "react";
import flippedimage from "../assets/images/flippedImage.png";
import normalimage from "../assets/images/normalImage.png";
import { Widget, renderCustomComponent } from "react-chat-widget";
import { sendMessage } from "../functions/eventListeners";

function ClientWidget(props) {
  return (
    <div>
      <Widget
        handleNewUserMessage={(e) => {
          sendMessage("okay", "Client", e, props.connection);
        }}
        launcher={(handleToggle) => {
          if (props.isWidget) {
            return (
              <img
                src={normalimage}
                alt="imageNot working"
                className="rcw-launcher "
                onClick={() => {
                  handleToggle();
                  props.setisWidget(false);
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
                  props.setisWidget(true);
                }}
              />
            );
          }
        }}
        title="Plugit Chat Support"
        subtitle="Welcome To Yoonit Customer Service"
        senderPlaceHolder="press send button or enter to send a message"
      />
    </div>
  );
}

export default ClientWidget;
