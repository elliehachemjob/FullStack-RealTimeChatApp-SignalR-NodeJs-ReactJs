import React from 'react';
import { VideoCall } from '../components/VideoCall';

export default {
  title: 'Extra/VideoCall',
  component: VideoCall,
};

const VideoCallTemplate = (args: any) => <VideoCall {...args} />;

export const Default = VideoCallTemplate.bind({});

Default.args = {};
