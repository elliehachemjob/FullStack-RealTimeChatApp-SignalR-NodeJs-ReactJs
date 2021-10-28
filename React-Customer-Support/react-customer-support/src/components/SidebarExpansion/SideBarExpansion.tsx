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
  title: string;
  position: string;
  expanstionPanelData1?: any;
  expanstionPanelData2?: any;
  expanstionPanelData3?: any;
  expanstionPanelData4?: any;
}

export const SidebarExpansion: React.FC<Props> = (props: any): any => {
  return (
    <Sidebar position={!props.title ? 'right' : props.title}>
      <ExpansionPanel open title={!props.title ? 'Info' : props.title}>
        <p>
          {!props.expanstionPanelData1
            ? 'dynamic data'
            : props.expanstionPanelData1}
        </p>
        <p>
          {!props.expanstionPanelData2
            ? 'dynamic data'
            : props.expanstionPanelData2}
        </p>
        <p>
          {!props.expanstionPanelData3
            ? 'dynamic data'
            : props.expanstionPanelData3}
        </p>
        <p>
          {!props.expanstionPanelData4
            ? 'dynamic data'
            : props.expanstionPanelData4}
        </p>
      </ExpansionPanel>
    </Sidebar>
  );
};
