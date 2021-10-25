import React from "react";
import { storiesOf } from "@storybook/react";
import { ClientWidget } from "../components/ClientWidget";

// const stories = storiesOf("ClientWidget", module);

// stories.add("ClientWidget", () => {
//   return <ClientWidget />;
// });
export default {
  title: "ClientWidget",
  component: ClientWidget,
};

const ClientWidgetTemplate = (args) => <ClientWidget {...args} />;

export const FullOptions = ClientWidgetTemplate.bind({});

FullOptions.args = {
  isWidget: false,
};
