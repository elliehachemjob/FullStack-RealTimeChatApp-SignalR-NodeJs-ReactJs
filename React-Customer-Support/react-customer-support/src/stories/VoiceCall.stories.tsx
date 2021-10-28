import React from 'react';
import { VoiceCall } from '../components/VoiceCall';

export default {
  title: 'Extra/VoiceCall',
  component: VoiceCall,
  argTypes: {
    username: {
      description: 'Sets The Username Of The Header',
    },
  },
};

const VoiceCallTemplate = (args: any) => <VoiceCall {...args} />;

export const Default = VoiceCallTemplate.bind({});

Default.args = {
  username: '',
};
