import { Meta, StoryObj } from "@storybook/react";

import InfoBoxDetail from "@/components/InfoBoxDetail";

const meta: Meta<typeof InfoBoxDetail> = {
  title: "components/InfoBoxDetail",
  tags: ["autodocs"],
  component: InfoBoxDetail,
};

export default meta;

type Story = StoryObj<typeof InfoBoxDetail>;

export const Default: Story = {
  args: {
    children: "여기에 내용이 들어갑니다.",
    variant: "primary",
  },
};

export const GrayWithMultipleLines: Story = {
  args: {
    children: [
      "첫 번째 줄 텍스트입니다.",
      "두 번째 줄 텍스트입니다.",
      "세 번째 줄 텍스트입니다.",
    ],
    variant: "gray",
  },
};

export const RedWithEmptyContent: Story = {
  args: {
    children: "",
    variant: "red",
  },
};
