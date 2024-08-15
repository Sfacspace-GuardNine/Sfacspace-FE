import { Meta, StoryObj } from "@storybook/react";

import TitleDefault from "@/components/TitleDefault";

const meta: Meta<typeof TitleDefault> = {
  title: "components/TitleDefault",
  tags: ["autodocs"],
  component: TitleDefault,
};

export default meta;

type Story = StoryObj<typeof TitleDefault>;

export const Default: Story = {
  args: { children: "title" },
};
