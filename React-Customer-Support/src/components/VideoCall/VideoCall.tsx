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

interface Props {
  onClick: () => any;
}

export const VideoCall: React.FC<Props> = (props: any): any => {
  return (
    <VideoCallButton
      onClick={() => {
        props.onClick();
      }}
    />
  );
};
