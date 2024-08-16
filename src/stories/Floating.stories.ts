import { Meta, StoryObj } from "@storybook/react";

import Floating from "@/components/Floating";

const meta: Meta<typeof Floating> = {
  title: "components/Floating",
  tags: ["autodocs"],
  component: Floating,
};

export default meta;
type Story = StoryObj<typeof Floating>;

export const Ask: Story = {
  args: {
    variant: "ask",
  },
};

export const Top: Story = {
  args: {
    variant: "top",
  },
};
