import { Meta, StoryObj } from "@storybook/react";

import GnbTitle from "@/components/GnbTitle";

const meta: Meta<typeof GnbTitle> = {
  title: "components/GnbTitle",
  tags: ["autodocs"],
  component: GnbTitle,
};

export default meta;

type Story = StoryObj<typeof GnbTitle>;

export const Default: Story = {
  args: { children: "title" },
};
