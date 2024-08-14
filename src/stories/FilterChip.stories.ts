import { Meta, StoryObj } from "@storybook/react";

import FilterChip from "@/components/FilterChip";

const meta: Meta<typeof FilterChip> = {
  title: "components/FilterChip",
  tags: ["autodocs"],
  component: FilterChip,
};

export default meta;

type Story = StoryObj<typeof FilterChip>;

export const Label: Story = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};

export const LabelWithIcon: Story = {
  args: {
    hasIcon: true,
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};
