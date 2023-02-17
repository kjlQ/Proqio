import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    backgroundColor: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#FFFFFF" },
      },
      control: "color",
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: false,
  label: "Button",
  size: "medium",
};
