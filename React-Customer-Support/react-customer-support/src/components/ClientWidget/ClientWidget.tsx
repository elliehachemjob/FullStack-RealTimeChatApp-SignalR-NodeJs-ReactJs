import React from 'react';
import './App.css';
import { Widget } from 'react-chat-widget';
import flippedimage from './normalImage.png';
import normalimage from './flippedImage.png';

interface Props {
  isWidget: boolean;
  setIsWidget: (active: boolean) => void;
  sendMessage?: (user: string, isAdmin: string) => Promise<void>;
  normalimage?: string;
  flippedimage?: string;
  normalimageAlt?: string;
  flippedimageAlt?: string;
  normalImageStyle?: {};
  flippedImageStyle?: {};
  title?: string;
  subtitle?: string;
}

export const ClientWidget: React.FC<Props> = (props: any): any => {
  const getCustomLauncher = (handleToggle: any) => {
    if (props.isWidget) {
      return (
        <img
          src={props.normalimage ? props.normalimage : normalimage}
          alt={props.normalimageAlt ? props.normalimageAlt : 'imageNot working'}
          className={
            props.normalImageStyle ? props.normalImageStyle : 'rcw-launcher'
          }
          onClick={() => {
            handleToggle();
            props.setIsWidget(false);
          }}
        />
      );
    } else {
      return (
        <img
          src={props.flippedimage ? props.flippedimage : flippedimage}
          alt={
            props.flippedimageAlt ? props.flippedimageAlt : 'imageNot working'
          }
          className={
            props.flippedImageStyle ? props.flippedImageStyle : 'rcw-launcher'
          }
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
          props.sendMessage(props.user, props.isAdmin, e)
        }
        launcher={(handleToggle: any) => getCustomLauncher(handleToggle)}
        title={props.title ? props.title : 'Plugit Chat Support'}
        subtitle={
          props.subtitle ? props.subtitle : 'Welcome To Yoonit Customer Service'
        }
        senderPlaceHolder="press send button or enter to send a message"
      />
    </div>
  );
};
