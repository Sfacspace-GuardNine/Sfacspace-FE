import { Meta, StoryObj } from "@storybook/react";

import FileCard from "@/components/FileCard";

const meta: Meta<typeof FileCard> = {
  title: "components/FileCard",
  tags: ["autodocs"],
  component: FileCard,
};

export default meta;

type Story = StoryObj<typeof FileCard>;

export const Default: Story = {
  args: {
    variant: "default",
    title: "기본 제목입니다.",
    caption: "Caption",
    link: "",
  },
};

export const Detected: Story = {
  args: {
    variant: "detected",
    title: "00.00.00",
    caption: "Caption",
    link: "",
  },
};
