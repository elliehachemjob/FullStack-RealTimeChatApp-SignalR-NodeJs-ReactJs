import React from "react";
import { storiesOf } from "@storybook/react";
import { LoginForm, SignUpForm } from "../components/Requirements";
import { ClientWidget } from "../components/ClientWidget";
import { AdminPanel } from "../components/AdminPanel";

const stories = storiesOf("React-Singalr-Components", module);

stories.add("LoginForm", () => {
  return <LoginForm />;
});

stories.add("SignUpForm", () => {
  return <SignUpForm />;
});

stories.add("ClientWidget", () => {
  return <ClientWidget />;
});

stories.add("AdminPanel", () => {
  return <AdminPanel />;
});
