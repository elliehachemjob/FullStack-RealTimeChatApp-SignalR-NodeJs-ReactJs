import React from 'react';
import { SidebarExpansion } from '../components/SidebarExpansion';

export default {
  title: 'Extra/SidebarExpansion',
  component: SidebarExpansion,
};

const SidebarExpansionWidgetTemplate = (args: any) => (
  <SidebarExpansion {...args} />
);

export const Default = SidebarExpansionWidgetTemplate.bind({});

Default.args = {};
