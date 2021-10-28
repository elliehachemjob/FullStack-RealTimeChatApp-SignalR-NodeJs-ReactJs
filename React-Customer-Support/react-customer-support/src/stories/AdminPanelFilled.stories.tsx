import React from 'react';
import { AdminPanelFilled } from '../components/AdminPanelFilled';

export default {
  title: 'FilledData/AdminPanelFilled',
  component: AdminPanelFilled,
  argTypes: {
    username: {
      description: 'Sets The Username Of The Header',
    },
  },
};

const AdminWidgetTemplate = (args: any) => <AdminPanelFilled {...args} />;

export const Default = AdminWidgetTemplate.bind({});

Default.args = {
  username: '',
};
