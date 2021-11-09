import React from "react";
import { AdminPanel } from "../components/AdminPanel";

export default {
  title: "Panels/AdminPanel",
  component: AdminPanel,
  argTypes: {
    username: {
      description: "Sets The Username Of The Header",
    },
  },
};

const AdminWidgetTemplate = (args: any) => <AdminPanel {...args} />;

export const Default = AdminWidgetTemplate.bind({});

Default.args = {
  username: "",
};
