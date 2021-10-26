import React from "react";
import { storiesOf } from "@storybook/react";
import { SignUpForm } from "../components/Forms";

export default {
  title: "Forms/SignUpForm",
  component: SignUpForm,
  argTypes: {
    onClick: {
      description: "To SignUp Check Summary ",
      table: {
        type: {
          summary: "Click For Summary",
          detail:
            "The component is set to take the state of the user,password and sendemailverification then it use them to connect to api using axios after  the user is not found in the  database and confirmation  it then uses the joinroom prop method which allow you to join room/connect  ",
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
            "The component is set to take the state of the user and password then it use them to connect to api using axios after the confirmation and the user is not found in the  database it then uses the joinroom prop method which allow you to join room/connect  ",
        },
      },
    },
  },
};

const SignUpFormTemplate = (args: any) => <SignUpForm {...args} />;

export const Default = SignUpFormTemplate.bind({});

Default.args = {};
