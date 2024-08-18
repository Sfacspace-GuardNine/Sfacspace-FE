import { Meta, StoryObj } from "@storybook/react";

import SecureAnalyzer from "@/components/SecureAnalyzer";

const meta: Meta<typeof SecureAnalyzer> = {
  title: "components/SecureAnalyzer",
  tags: ["autodocs"],
  component: SecureAnalyzer,
};

export default meta;

type Story = StoryObj<typeof SecureAnalyzer>;

export const Default: Story = {};

export const Analyzing: Story = {
  args: {
    code: `import SecureAnalyser from "@/components/SecureAnalyzer";

    export default function Home() {
      return (
        <>
          <SecureAnalyser />
        </>
      );
    }`,
  },
  argTypes: {},
};

export const Completed: Story = {
  args: {
    code: `import SecureAnalyser from "@/components/SecureAnalyzer";

    export default function Home() {
      return (
        <>
          <SecureAnalyser />
        </>
      );
    }`,
    isCompleted: true,
  },
  argTypes: {},
};
