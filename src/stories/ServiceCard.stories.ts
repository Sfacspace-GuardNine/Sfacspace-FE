import { Meta, StoryObj } from "@storybook/react";

import ServiceCard from "@/components/ServiceCard";

const meta: Meta<typeof ServiceCard> = {
  title: "components/ServiceCard",
  tags: ["autodocs"],
  component: ServiceCard,
};

export default meta;

type Story = StoryObj<typeof ServiceCard>;

export const Pink: Story = {
  args: {
    variant: "pink",
    label: "보안 강화",
    children: "보안 취약점 사전 식별 후 해결\n소프트웨어 보안성 강화",
  },
};

export const Green: Story = {
  args: {
    variant: "green",
    label: "미션 크리티컬한 개발에 적합",
    children: "미션 크리티컬한 개발 특별 제작\n안전한 솔루션 제공",
  },
};

export const Purple: Story = {
  args: {
    variant: "purple",
    label: "실시간 보안 업데이트",
    children:
      "최신 보안 동향 및 취약점 정보 실시간 제공\n개발자 보안 강화를 도움",
  },
};

export const Blue: Story = {
  args: {
    variant: "blue",
    label: "사용자 데이터 보호",
    children: "데이터 무단 액세스 및 정보 유출 방지\n개인 정보 안전하게 보호",
  },
};

export const Yellow: Story = {
  args: {
    variant: "yellow",
    label: "효율적인 개발",
    children: "보안 취약점 자동 분석후 수정\n개발 집중 및 생산성 향상",
  },
};

export const Red: Story = {
  args: {
    variant: "red",
    label: "신속한 대응과 수정",
    children: "발견된 취약점 대응 및 수정\n안전한 소프트웨어 개발 가능",
  },
};
