import React from "react";
import { storiesOf } from "@storybook/react";
import { ClientWidget } from "../components/ClientWidget";

// const stories = storiesOf("ClientWidget", module);

// stories.add("ClientWidget", () => {
//   return <ClientWidget />;
// });
export default {
  title: "YourComponent",
  component: ClientWidget,
};

const ClientWidgetTemplate = (args) => <ClientWidget {...args} />;

export const green = ClientWidgetTemplate.bind({});

green.args = {
  isWidget: false,
};
