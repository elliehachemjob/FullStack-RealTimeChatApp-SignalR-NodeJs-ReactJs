import React from 'react';
import { SidebarExpansion } from '../components/SidebarExpansion';

export default {
  title: 'Extra/SidebarExpansion',
  component: SidebarExpansion,
  argTypes: {
    title: {
      description: 'Sets The Title of the SidebarExpansion ',
    },
    position: {
      description: 'Sets The position of the SidebarExpansion ',
    },
    expanstionPanelData1: {
      description: 'Sets The  Data of the first div in the SidebarExpansion 1',
    },
    expanstionPanelData2: {
      description: 'Sets The  Data of the first div in the SidebarExpansion 2',
    },
    expanstionPanelData3: {
      description: 'Sets The  Data of the first div in the SidebarExpansion 3',
    },
    expanstionPanelData4: {
      description: 'Sets The  Data of the first div in the SidebarExpansion 4',
    },
  },
};

const SidebarExpansionWidgetTemplate = (args: any) => (
  <SidebarExpansion {...args} />
);

export const Default = SidebarExpansionWidgetTemplate.bind({});

Default.args = {};
