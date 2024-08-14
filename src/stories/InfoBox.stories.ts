import { Meta, StoryObj } from "@storybook/react";

import InfoBox from "@/components/InfoBox";

const meta: Meta<typeof InfoBox> = {
  title: "components/InfoBox",
  tags: ["autodocs"],
  component: InfoBox,
};

export default meta;

type Story = StoryObj<typeof InfoBox>;

export const Default: Story = {
  args: { error: 12, warning: 8, success: 23 },
};
