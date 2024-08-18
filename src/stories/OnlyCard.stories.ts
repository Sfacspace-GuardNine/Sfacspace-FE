import { Meta, StoryObj } from "@storybook/react";

import OnlyCard from "@/components/OnlyCard";

const meta: Meta<typeof OnlyCard> = {
  title: "components/OnlyCard",
  tags: ["autodocs"],
  component: OnlyCard,
};

export default meta;

type Story = StoryObj<typeof OnlyCard>;

export const Default: Story = {
  args: {
    title: "[취약성 경고] Microsoft의 여러 보안 취약점에 대한 CNNVD의 보고서",
    description: "여기에 설명이 들어갑니다.",
    daysAgo: 3,
  },
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    title: "엘리베이티드 카드 제목",
    description: "엘리베이티드 상태의 설명입니다.",
    daysAgo: 5,
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    title: "아웃라인 카드 제목",
    description: "아웃라인 상태의 설명입니다.",
    daysAgo: 10,
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    title: "필드 카드 제목",
    description: "필드 상태의 설명입니다.",
    daysAgo: 1,
  },
};
