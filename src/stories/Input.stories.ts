import { Meta, StoryObj } from "@storybook/react";

import Input from "@/components/Input";

const meta: Meta<typeof Input> = {
  title: "components/Input",
  tags: ["autodocs"],
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    disabled: false,
    variant: "default",
    placeholder: "Example",
  },
};
