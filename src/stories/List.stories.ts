import { Meta, StoryObj } from "@storybook/react";

import List from "@/components/List/List";

const meta: Meta<typeof List> = {
  title: "components/List",
  tags: ["autodocs"],
  component: List,
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    items: [
      {
        type: "file",
        name: "eslint.json",
        isChecked: true,
      },
      {
        type: "file",
        name: "eslint.json",
      },
      {
        type: "folder",
        name: "public",
        status: "analyzing",
      },
      {
        type: "folder",
        name: "src",
        status: "pending",
      },
      {
        type: "file",
        name: "eslint.json",
        status: "completed",
      },
      {
        type: "file",
        name: "eslint.json",
        status: "error",
      },
      {
        type: "folder",
        name: "eslint.json",
        isChecked: true,
      },
    ],
  },
};
