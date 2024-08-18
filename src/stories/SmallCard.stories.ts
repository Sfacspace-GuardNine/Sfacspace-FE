import { Meta, StoryObj } from "@storybook/react";

import SmallCard from "@/components/SmallCard";

const meta: Meta<typeof SmallCard> = {
  title: "components/SmallCard",
  tags: ["autodocs"],
  component: SmallCard,
};

export default meta;

type Story = StoryObj<typeof SmallCard>;

export const Default: Story = {
  args: {
    title: "기본 제목입니다.",
    description: "이것은 기본 설명입니다.",
    daysAgo: 3,
  },
};

export const OutlinedVariant: Story = {
  args: {
    variant: "outlined",
    title: "아웃라인드 변형 제목입니다.",
    description: "아웃라인드 변형에 대한 설명입니다.",
    daysAgo: 5,
  },
};

export const ElevatedVariant: Story = {
  args: {
    variant: "elevated",
    title: "엘리베이티드 변형 제목입니다.",
    description: "엘리베이티드 변형에 대한 설명입니다.",
    daysAgo: 2,
    pinButtonProps: {
      onClick: () => alert("Pin 버튼 클릭됨!"),
    },
  },
};

export const FilledVariant: Story = {
  args: {
    variant: "filled",
    title: "필드 변형 제목입니다.",
    description: "필드 변형에 대한 설명입니다.",
    daysAgo: 1,
    shareButtonProps: {
      onClick: () => alert("Share 버튼 클릭됨!"),
    },
  },
};
