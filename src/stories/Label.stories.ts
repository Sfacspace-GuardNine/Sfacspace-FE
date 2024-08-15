import { Meta, StoryObj } from "@storybook/react";

import Label from "@/components/Label";

const meta: Meta<typeof Label> = {
  title: "components/Label",
  tags: ["autodocs"],
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Red: Story = {
  args: { variant: "red", children: "신속한 대응과 수정" },
};
export const Blue: Story = {
  args: { variant: "blue", children: "사용자 데이터 보호" },
};
export const Green: Story = {
  args: { variant: "green", children: "미션 크리티컬한 개발에 적합" },
};
export const Purple: Story = {
  args: { variant: "purple", children: "실시간 보안 업데이트" },
};
export const Pink: Story = {
  args: { variant: "pink", children: "보안 강화" },
};
export const Yellow: Story = {
  args: { variant: "yellow", children: "효율적인 개발" },
};
