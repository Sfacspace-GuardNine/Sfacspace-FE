import { Meta, StoryObj } from "@storybook/react";

import ClippingCard from "@/components/ClippingCard";

const meta: Meta<typeof ClippingCard> = {
  title: "components/ClippingCard",
  tags: ["autodocs"],
  component: ClippingCard,
};

export default meta;

type Story = StoryObj<typeof ClippingCard>;

export const Purple: Story = {
  args: {
    variant: "purple",
    label: "취약성 알림",
    date: new Date(),
    children: "Microsoft의 여러  보안 취약점에 대한 CNNVD의 보고서",
  },
};

export const Pink: Story = {
  args: {
    variant: "pink",
    label: "취약성 경고",
    date: new Date(),
    children: "Microsoft의 여러  보안 취약점에 대한 CNNVD의 보고서",
  },
};

export const Gray: Story = {
  args: {
    disabled: true,
    label: "취약성 보고서",
    date: new Date(),
    children: "Microsoft의 여러  보안 취약점에 대한 CNNVD의 보고서",
  },
};
