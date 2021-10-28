import React from 'react';
import { SidebarAdminPanel } from '../components/SidebarAdminPanel';

export default {
  title: 'Extra/SidebarAdminPanel',
  component: SidebarAdminPanel,
};

const SidebarAdminPanelTemplate = (args: any) => (
  <SidebarAdminPanel {...args} />
);

export const Default = SidebarAdminPanelTemplate.bind({});

Default.args = {};
