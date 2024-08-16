import { Meta, StoryObj } from "@storybook/react";

import ProgressBar from "@/components/ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "components/ProgressBar",
  tags: ["autodocs"],
  component: ProgressBar,
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Progress0: Story = {
  args: { value: 0 },
};

export const Progress25: Story = {
  args: { value: 25 },
};
export const Progress50: Story = {
  args: { value: 50 },
};
export const Progress100: Story = {
  args: { value: 100 },
};
