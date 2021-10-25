import React from "react";
import { storiesOf } from "@storybook/react";
import { ClientWidget } from "../components/ClientWidget";

const stories = storiesOf("ClientWidget", module);

stories.add("ClientWidget", () => {
  return <ClientWidget />;
});
