import { Meta, StoryObj } from "@storybook/react";

import ImageCard from "@/components/ImageCard";

const meta: Meta<typeof ImageCard> = {
  title: "components/ImageCard",
  tags: ["autodocs"],
  component: ImageCard,
};

export default meta;

type Story = StoryObj<typeof ImageCard>;

export const Default: Story = {
  args: {
    title:
      "[취약성 경고] Microsoft의 여러 보안 취약점에 대한 CNNVD의 보고서입니다.",
    description: "자세한 글 내용입니다.",
    author: "Microsoft",
    daysAgo: 2,
  },
};

export const LongTitleWithOutlined: Story = {
  args: {
    variant: "outlined",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid porro sed, nemo earum laudantium nihil, aperiam placeat eveniet illum animi quaerat culpa totam. Autem qui nemo magnam odio esse.",
    description: "아웃라인드 상태의 설명입니다.",
    author: "Microsoft",
    daysAgo: 5,
    pinButtonProps: {
      onClick: () => alert("Pin 버튼 클릭됨!"),
    },
  },
};

export const LongDesWithFilled: Story = {
  args: {
    variant: "filled",
    title: "필드 상태의 제목입니다.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid porro sed, nemo earum laudantium nihil, aperiam placeat eveniet illum animi quaerat culpa totam. Autem qui nemo magnam odio esse.",
    author: "Microsoft",
    daysAgo: 5,
    shareButtonProps: {
      onClick: () => alert("Share 버튼 클릭됨!"),
    },
  },
};
