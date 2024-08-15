import { Meta, StoryObj } from "@storybook/react";

import CheckedFiles from "@/components/CheckedFiles";

const meta: Meta<typeof CheckedFiles> = {
  title: "components/CheckedFiles",
  tags: ["autodocs"],
  component: CheckedFiles,
};

export default meta;

type Story = StoryObj<typeof CheckedFiles>;

export const Default: Story = {
  args: {
    files: [
      {
        fileName: "file name",
        subTitle: "file sub title",
        dateAt: new Date(),
      },
      {
        fileName: "file name",
        subTitle: "file sub title",
        dateAt: new Date(),
      },
      {
        fileName: "file name",
        subTitle: "file sub title",
        dateAt: new Date(),
      },
      {
        fileName: "file name",
        subTitle: "file sub title",
        dateAt: new Date(),
      },
      {
        fileName: "file name",
        subTitle: "file sub title",
        dateAt: new Date(),
      },
    ],
  },
};
