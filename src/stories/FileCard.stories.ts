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
    link: "/default-link",
    repoId: "123456",
    createdAt: "2024-03-18T04:32:57Z",
    children: "검사하기",
  },
};

export const Detected: Story = {
  args: {
    variant: "detected",
    title: "검사 완료된 레포지토리",
    link: "/detected-link",
    repoId: "789012",
    createdAt: "2024-04-18T04:32:57Z",
    children: "결과보기",
  },
};

export const Detecting: Story = {
  args: {
    variant: "detecting",
    title: "검사 중인 레포지토리",
    link: "/detecting-link",
    repoId: "345678",
    createdAt: "2024-05-18T04:32:57Z",
    children: "검사하기",
  },
};
