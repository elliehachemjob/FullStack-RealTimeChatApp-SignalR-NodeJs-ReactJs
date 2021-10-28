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
  username: string;
  chatListAppend: any[];
  sendMessage: (
    user: string,
    isAdmin: string,
    message: string
  ) => Promise<void>;
  avatarIco: string;
  onAttachClick: () => void;
  onChange: () => void;
  sidebarPosition: string;
  sidebarScrollable: boolean;
  mainDivstyle: {};
  messageListContentStyle: {};
}

export const VoiceCall: React.FC<Props> = (props: any): any => {
  return <div>Voice Call Component</div>;
};
