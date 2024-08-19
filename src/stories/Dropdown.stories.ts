import { Meta, StoryObj } from "@storybook/react";

import Dropdown from "@/components/Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "components/Dropdown",
  tags: ["autodocs"],
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    name: "Sort",
  },
};
