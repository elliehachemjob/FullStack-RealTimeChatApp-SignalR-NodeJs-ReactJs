import React from "react";
import { storiesOf } from "@storybook/react";
import { SignUpForm } from "../components/Forms";

const stories = storiesOf("SignUpForm", module);

stories.add("SignUpForm", () => {
  return <SignUpForm />;
});
