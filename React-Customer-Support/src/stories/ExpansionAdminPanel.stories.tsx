import React from 'react';
import { ExpansionAdminPanel } from '../components/ExpansionAdminPanel';

export default {
  title: 'Extra/ExpansionAdminPanel',
  component: ExpansionAdminPanel,
};

const ExpansionAdminPanelWidgetTemplate = (args: any) => (
  <ExpansionAdminPanel {...args} />
);

export const Default = ExpansionAdminPanelWidgetTemplate.bind({});

Default.args = {};
