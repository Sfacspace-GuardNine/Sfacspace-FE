import { Meta, StoryObj } from "@storybook/react";

import InputChip from "@/components/InputChip";

const meta: Meta<typeof InputChip> = {
  title: "components/InputChip",
  tags: ["autodocs"],
  component: InputChip,
};

export default meta;

type Story = StoryObj<typeof InputChip>;

export const Default: Story = {
  args: {
    children: "Default InputChip",
    text: "file name",
  },
};

export const Dark: Story = {
  args: {
    variant: "dark",
    text: "file name",
  },
};

export const Light: Story = {
  args: {
    variant: "light",
    text: "file name",
  },
};
