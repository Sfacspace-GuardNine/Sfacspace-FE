import { Meta, StoryObj } from "@storybook/react";

import Switch from "@/components/Switch";

const meta: Meta<typeof Switch> = {
  title: "components/Switch",
  tags: ["autodocs"],
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: { checked: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const HasIcon: Story = {
  args: { hasIcon: true },
};
