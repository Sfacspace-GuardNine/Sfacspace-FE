import { Meta, StoryObj } from "@storybook/react";

import Alert from "@/components/Alert";

const meta: Meta<typeof Alert> = {
  title: "components/Alert",
  tags: ["autodocs"],
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    title: "정보 알림",
    line: "1",
    text1: "이것은 정보 메시지입니다.",
    variant: "info",
    isShow: true,
  },
};

export const Error: Story = {
  args: {
    title: "에러 발생",
    line: "2",
    text1: "문제가 발생했습니다.",
    text2: "다시 시도해주세요.",
    variant: "error",
    isShow: true,
  },
};

export const InProgress: Story = {
  args: {
    title: "진행 중",
    line: "1",
    text1: "작업이 진행 중입니다.",
    variant: "ing",
    isShow: true,
  },
};

export const Complete: Story = {
  args: {
    title: "작업 완료",
    line: "1",
    text1: "작업이 완료되었습니다.",
    variant: "complete",
    isShow: true,
  },
};
