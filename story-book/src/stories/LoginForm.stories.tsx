import React from "react";
import { LoginForm } from "../components/Forms";

export default {
  title: "Forms/LoginForm",
  component: LoginForm,
  argTypes: {
    onClick: {
      description: "To Login Check Summary ",
      table: {
        type: {
          summary: "Click For Summary",
          detail:
            "The component is set to take the state of the user and password then it use them to connect to api using axios after the confirmation of password in database it then uses the joinroom prop method which allow you to join room/connect  ",
        },
      },
    },
    joinRoom: {
      description:
        "just a function that allows you to connect to room/server etc you should be making one  ",
      table: {
        type: {
          summary: "Click For Summary",
          detail:
            "The component is set to take the state of the user and password then it use them to connect to api using axios after the confirmation  in database it then uses the joinroom prop method which allow you to join room/connect  ",
        },
      },
    },
  },
};

const LoginFormTemplate = (args: any) => <LoginForm {...args} />;

export const Default = LoginFormTemplate.bind({});

Default.args = {};
