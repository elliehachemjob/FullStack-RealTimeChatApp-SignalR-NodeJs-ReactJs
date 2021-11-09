import React from 'react';
import { VoiceCall } from '../components/VoiceCall';

export default {
  title: 'Extra/VoiceCall',
  component: VoiceCall,
};

const VoiceCallTemplate = (args: any) => <VoiceCall {...args} />;

export const Default = VoiceCallTemplate.bind({});

Default.args = {};
