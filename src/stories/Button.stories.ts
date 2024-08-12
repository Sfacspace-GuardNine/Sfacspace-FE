import { Meta, StoryObj } from "@storybook/react";

import Button from "@/components/Button";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  tags: ["autodocs"],
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "기본",
    disabled: false,
    variant: "primary",
  },
};

export const DefaultDisabled: Story = {
  args: {
    children: "기본 비활성화",
    disabled: true,
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "보조 버튼",
    disabled: false,
    variant: "secondary",
  },
};
