import { Meta, StoryObj } from "@storybook/react";

import ToolTip from "@/components/ToolTip";

const meta: Meta<typeof ToolTip> = {
  title: "components/ToolTip",
  tags: ["autodocs"],
  component: ToolTip,
};

export default meta;

type Story = StoryObj<typeof ToolTip>;

export const Default: Story = {
  args: {
    children: "Tool Tip",
  },
};
