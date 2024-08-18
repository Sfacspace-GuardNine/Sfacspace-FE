import { Meta, StoryObj } from "@storybook/react";

import Pagination from "@/components/Pagination";

const meta: Meta<typeof Pagination> = {
  title: "components/Pagination",
  tags: ["autodocs"],
  component: Pagination,
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Label: Story = {
  args: {
    start: 1,
    size: 5,
  },
};
