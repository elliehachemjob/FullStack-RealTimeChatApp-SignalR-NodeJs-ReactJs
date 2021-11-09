import React from "react";
import { ClientWidget } from "../components/ClientWidget";

export default {
  title: "Widgets/ClientWidget",
  component: ClientWidget,
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
    setIsWidget: {
      description: "State To Set the Widget Value",
      table: {
        type: {
          summary: "Click For Summary",
          detail: "There is Either False Or True",
        },
      },
    },

    sendMessage: {
      description: "You need to set in Singalr",
      table: {
        type: {
          summary: "To send a message to user ",
          detail:
            "props provided are user3: string,isAdmin: string ,message: string, but again you can change it anytime",
        },
      },
    },
  },
};

const ClientWidgetTemplate = (args: any) => <ClientWidget {...args} />;

export const Default = ClientWidgetTemplate.bind({});

Default.args = {
  isWidget: false,
};
