import React from "react";
import { storiesOf } from "@storybook/react";
import { AdminPanel } from "../components/AdminPanel";

const stories = storiesOf("AdminPanel", module);

stories.add("AdminPanel", () => {
  return <AdminPanel />;
});
