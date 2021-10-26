import React from "react";
import { storiesOf } from "@storybook/react";
import { AdminPanel } from "../components/AdminPanel";

// const stories = storiesOf("AdminPanel", module);

// stories.add("AdminPanel", () => {
//   return <AdminPanel />;
// });

export default {
  title: "AdminPanel",
  component: AdminPanel,
  argTypes: {
    isWidget: {
      description: "Changes Widget Animation",
      table: {
        type: {
          summary: "Click For Summary",
          detail: "Changes Widget Animation When Someone Togggles it",
        },
      },
    },
  },
};

const AdminWidgetTemplate = (args: any) => <AdminPanel {...args} />;

export const FullOptions = AdminWidgetTemplate.bind({});

FullOptions.args = {
  username: "",
};
