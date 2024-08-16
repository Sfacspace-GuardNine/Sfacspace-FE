import { Meta, StoryObj } from "@storybook/react";

import AssistChip from "@/components/AssistChip";

const meta: Meta<typeof AssistChip> = {
  title: "components/AssistChip",
  tags: ["autodocs"],
  component: AssistChip,
};

export default meta;

type Story = StoryObj<typeof AssistChip>;

export const Default: Story = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};

export const Filled: Story = {
  args: {
    variant: "fill",
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
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};
