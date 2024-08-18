import { Meta, StoryObj } from "@storybook/react";

import CardHovered from "@/components/CardHovered";

const meta: Meta<typeof CardHovered> = {
  title: "components/CardHovered",
  tags: ["autodocs"],
  component: CardHovered,
};

export default meta;

type Story = StoryObj<typeof CardHovered>;

export const Default: Story = {
  args: {
    title: "제목",
    createdAt: new Date("2024-08-16T00:00:00"),
  },
};
