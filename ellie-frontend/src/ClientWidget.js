import React from "react";
import {
  Widget,
  addResponseMessage,
  addUserMessage,
  renderCustomComponent,
} from "react-chat-widget";

function ClientWidget(props) {
  return (
    <div>
      <Widget
        handleNewUserMessage={(e) => props.sendMessage("okay", "Client", e)}
        launcher={(handleToggle) => props.getCustomLauncher(handleToggle)}
        title="Plugit Chat Support"
        subtitle="Welcome To Yoonit Customer Service"
        senderPlaceHolder="press send button or enter to send a message"
      />
    </div>
  );
}

export default ClientWidget;
