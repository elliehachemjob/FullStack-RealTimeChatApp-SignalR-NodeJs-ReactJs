import React from 'react';
import { AdminPanelFilled } from '../components/AdminPanelFilled';

export default {
  title: 'FilledData/AdminPanelFilled',
  component: AdminPanelFilled,
  argTypes: {
    username: {
      description: 'Sets The Username Of The Header',
    },
    table: {
      type: {
        summary: 'Click For Summary',
        detail:
          'The component is set to take the state of the user and password then it use them to connect to api using axios after the confirmation of password in database it then uses the joinroom prop method which allow you to join room/connect  ',
      },
    },
  },
};

const AdminWidgetTemplate = (args: any) => <AdminPanelFilled {...args} />;

export const Default = AdminWidgetTemplate.bind({});

Default.args = {
  username: '',
};
