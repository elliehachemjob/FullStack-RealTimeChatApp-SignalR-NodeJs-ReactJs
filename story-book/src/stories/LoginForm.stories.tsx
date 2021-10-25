import React from "react";
import { storiesOf } from "@storybook/react";
import { LoginForm } from "../components/Forms";

const stories = storiesOf("LoginForm", module);

stories.add("LoginForm", () => {
  return <LoginForm />;
});
