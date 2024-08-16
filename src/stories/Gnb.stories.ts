import { Meta, StoryObj } from "@storybook/react";

import Gnb from "@/components/Gnb";

const meta: Meta<typeof Gnb> = {
  title: "components/Gnb",
  tags: ["autodocs"],
  component: Gnb,
};

export default meta;

type Story = StoryObj<typeof Gnb>;

export const Default: Story = {
  args: {},
};
