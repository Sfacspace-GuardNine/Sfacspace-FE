import { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/Button";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  tags: ["autodocs"],
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default Button",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};

export const Filled: Story = {
  args: {
    variant: "fill",
    children: "Fill Button",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};

export const OutLined: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};

export const Tonal: Story = {
  args: {
    variant: "tonal",
    children: "Tonal Button",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};
