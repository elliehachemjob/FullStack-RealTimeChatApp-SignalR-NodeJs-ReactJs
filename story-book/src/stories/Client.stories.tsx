import React from "react";
import { storiesOf } from "@storybook/react";
import { ClientWidget } from "../components/ClientWidget";

export default {
  title: "ClientWidget",
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
  },
};

const ClientWidgetTemplate = (args: any) => <ClientWidget {...args} />;

export const FullOptions = ClientWidgetTemplate.bind({});

FullOptions.args = {
  isWidget: false,
};
