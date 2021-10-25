import React from "react";
import "./App.css";
import { Widget } from "react-chat-widget";
import flippedimage from "./normalImage.png";
import normalimage from "./flippedImage.png";
import PropTypes from "prop-types";

interface Props {
  isWidget: boolean;
  setIsWidget: (active: boolean) => void;
  sendMessage: (
    user3: string,
    isAdmin: string,
    message: string
  ) => Promise<void>;
}

export const ClientWidget: React.FC<Props> = (props: any): any => {
  // ClientWidget.propTypes = {
  //   isWidget: PropTypes.bool.isRequired,
  // };

  const getCustomLauncher = (handleToggle: any) => {
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
        handleNewUserMessage={(e: any) =>
          props.sendMessage("okay", "Client", e)
        }
        launcher={(handleToggle: any) => getCustomLauncher(handleToggle)}
        title="Plugit Chat Support"
        subtitle="Welcome To Yoonit Customer Service"
        senderPlaceHolder="press send button or enter to send a message"
      />
    </div>
  );
};
