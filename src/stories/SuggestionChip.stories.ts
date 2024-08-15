import { Meta, StoryObj } from "@storybook/react";

import SuggestionChip from "@/components/SuggestionChip";

const meta: Meta<typeof SuggestionChip> = {
  title: "components/SuggestionChip",
  tags: ["autodocs"],
  component: SuggestionChip,
};

export default meta;

type Story = StoryObj<typeof SuggestionChip>;

export const New: Story = {
  args: {
    variant: "new",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};

export const Hot: Story = {
  args: {
    variant: "hot",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};

export const Clipping0: Story = {
  args: {
    variant: "gray",
  },
};

export const Clipping1: Story = {
  args: {
    variant: "purple",
  },
};

export const Clipping2: Story = {
  args: {
    variant: "pink",
  },
};
