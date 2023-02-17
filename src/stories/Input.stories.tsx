import { ComponentStory } from "@storybook/react";
import { useForm } from "react-hook-form";
import { Input } from "./Input";

export default {
  title: "UI/Input",
  component: Input,
  argTypes: {
    error: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    value: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    errorMsg: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Incorrect data" },
      },
    },
    register: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    validation: {
      table: {
        disable: true,
      },
    },
    hasError: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => {
  const { register } = useForm();
  return <Input {...args} name="example" register={register} />;
};

export const Primary = Template.bind({});
Primary.args = {
  value: "",
  error: false,
  errorMsg: "Incorrect data",
};
