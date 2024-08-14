import { Meta, StoryObj } from "@storybook/react";

import SuggestionChip from "@/components/SuggestionChip";

const meta: Meta<typeof SuggestionChip> = {
  title: "components/SuggestionChip",
  tags: ["autodocs"],
  component: SuggestionChip,
};

export default meta;

type Story = StoryObj<typeof SuggestionChip>;

export const Default: Story = {};

export const New: Story = {
  args: {
    variant: "new",
  },
};

export const Hot: Story = {
  args: {
    variant: "hot",
  },
};

export const Clipping0: Story = {
  args: {
    variant: "clipping0",
  },
};

export const Clipping1: Story = {
  args: {
    variant: "clipping1",
  },
};

export const Clipping2: Story = {
  args: {
    variant: "clipping2",
  },
};
