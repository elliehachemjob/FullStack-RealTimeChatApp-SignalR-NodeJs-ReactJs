import React from "react";
import { storiesOf } from "@storybook/react";
import { SignUpForm } from "../components/Forms";

export default {
  title: "Forms/SignUpForm",
  component: SignUpForm,
};

const SignUpFormTemplate = (args: any) => <SignUpForm {...args} />;

export const Default = SignUpFormTemplate.bind({});

Default.args = {};
