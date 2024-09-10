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
    title: "검사 대기중",
    line: "1",
    text1: "순차적으로 파일 검사가 진행됩니다.",
    text2: "잠시만 대기해주시면 검사가 시작됩니다.",
    variant: "info",
    isShow: false,
  },
};

export const Error: Story = {
  args: {
    title: "Error",
    line: "2",
    text1: "오류가 발생했습니다.",
    text2: "다시 시도해주세요.",
    variant: "error",
    isShow: true,
    buttonChild: "다시 시도하기",
  },
};

export const InProgress: Story = {
  args: {
    title: "검사 중",
    line: "1",
    text1: "코드가 많을수록 처리시간이 길어집니다.",
    variant: "ing",
    isShow: false,
  },
};

export const Complete: Story = {
  args: {
    title: "프로젝트 검사 완료",
    line: "1",
    text1: "검사결과를 확인해보세요.",
    variant: "complete",
    isShow: true,
    buttonChild: "결과 보러가기",
    linkHref: "/",
  },
};
