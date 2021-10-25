import React from "react";
import { storiesOf } from "@storybook/react";
import { ClientWidget } from "../components/ClientWidget";
import PropsTypes from "prop-types";
// const stories = storiesOf("ClientWidget", module);

// stories.add("ClientWidget", () => {
//   return <ClientWidget />;
// });
export default {
  title: "ClientWidget",
  component: ClientWidget,
  argTypes: {
    isWidget: {
      description: "Changes Widget Animation",
      table: {
        type: {
          summary: "Click For Summary",
          detail: "Changes Widget Animation When Someone Togggles it",
        },
      },
    },
  },
};

const ClientWidgetTemplate = (args: any) => <ClientWidget {...args} />;

export const FullOptions = ClientWidgetTemplate.bind({});

// ClientWidget.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   isWidget: PropsTypes.bool,
// };

// ClientWidget.defaultProps = {
//   isWidget: false,
// };

FullOptions.args = {
  /**
   * Is this the principal call to action on the page?
   */
  isWidget: false,
};
