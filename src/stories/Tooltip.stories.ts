import { Meta, StoryObj } from "@storybook/react";

import Tooltip from "@/components/Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "components/Tooltip",
  tags: ["autodocs"],
  component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: "Tooltip",
  },
};
