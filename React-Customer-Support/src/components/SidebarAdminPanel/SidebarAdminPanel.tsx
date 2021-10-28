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
  title?: string;
  position?: string;
  data?: string;
}

export const SidebarAdminPanel: React.FC<Props> = (props: any): any => {
  return (
    <Sidebar position={!props.position ? 'right' : props.position}>
      {!props.data ? (
        <div style={{ position: 'relative', top: '10px' }}> Add data here </div>
      ) : (
        props.data
      )}
    </Sidebar>
  );
};
