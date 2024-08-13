import { Meta, StoryObj } from "@storybook/react";

import Infobox from "@/components/Infobox";

const meta: Meta<typeof Infobox> = {
  title: "components/Infobox",
  tags: ["autodocs"],
  component: Infobox,
};

export default meta;

type Story = StoryObj<typeof Infobox>;

export const Default: Story = {
  args: { warning: 0, error: 0, success: 0 },
};
