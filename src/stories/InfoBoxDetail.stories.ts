import { Meta, StoryObj } from "@storybook/react";

import InfoBoxDetail from "@/components/InfoBoxDetail";

const meta: Meta<typeof InfoBoxDetail> = {
  title: "components/InfoBoxDetail",
  tags: ["autodocs"],
  component: InfoBoxDetail,
};

export default meta;

type Story = StoryObj<typeof InfoBoxDetail>;

export const Default: Story = {
  args: {
    title: "Insecure Password Handling",
    text: "여기에 내용이 들어갑니다.",
    weakness:
      "사용자 입력을 HTML에 직접 삽입하면서 HTML을 안전하게 처리하지 않음",
    variant: "primary",
  },
};

export const GrayWithMultipleLines: Story = {
  args: {
    title: "Insecure Password Handling",
    text: "첫 번째 줄 텍스트입니다. 두 번째 줄 텍스트입니다. 세 번째 줄 텍스트입니다.",
    weakness:
      "사용자 입력을 HTML에 직접 삽입하면서 HTML을 안전하게 처리하지 않음",
    codeDetail: "function displayUserInput(input) {",
    variant: "gray",
  },
};

export const RedWithEmptyContent: Story = {
  args: {
    title: "Insecure Password Handling",
    weakness:
      "사용자 입력을 HTML에 직접 삽입하면서 HTML을 안전하게 처리하지 않음",
    codeLanguage: "JavaSpring",
    text: "",
    variant: "red",
  },
};
