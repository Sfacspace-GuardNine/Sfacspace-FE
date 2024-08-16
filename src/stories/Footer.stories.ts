import { Meta, StoryObj } from "@storybook/react";

import Footer from "@/components/Footer";

const meta: Meta<typeof Footer> = {
  title: "components/Footer",
  tags: ["autodocs"],
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {},
};
