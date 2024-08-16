import { Meta, StoryObj } from "@storybook/react";

import Ranking from "@/components/Ranking";

const meta: Meta<typeof Ranking> = {
  title: "components/Ranking",
  tags: ["autodocs"],
  component: Ranking,
};

export default meta;

type Story = StoryObj<typeof Ranking>;

export const Default: Story = {
  args: {
    items: [
      "1. Topic",
      "2. 웹뷰 프레임 워크",
      "3. 허프만 코딩 구현",
      "4. 테스크 커버리지",
      "5. 코드형 인프라(IaC)",
      "6. 클린 아키텍쳐",
      "7. UI 라이브러리 개발",
      "8. AWS Personalize",
      "9. 키클락",
      "10. 클린 코어",
    ],
  },
};
