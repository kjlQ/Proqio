import { ComponentStory } from "@storybook/react";
import Modal from "./Modal";

export default {
  title: "UI/Modal",
  component: Modal,
  argTypes: {
    title: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    userData: {
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "" },
      },
    },
    open: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
  },
};

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  title: "Modal",
  userData: {
    email: "",
    name: "",
    surname: "",
    phone: "",
  },
};
