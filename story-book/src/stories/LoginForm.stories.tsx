import React from "react";
import { storiesOf } from "@storybook/react";
import { LoginForm } from "../components/Forms";

export default {
  title: "Forms/LoginForm",
  component: LoginForm,
};

const LoginFormTemplate = (args: any) => <LoginForm {...args} />;

export const Default = LoginFormTemplate.bind({});

Default.args = {};
