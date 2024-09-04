import React from "react";

import { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";

import Button from "@/components/Button";
import CheckedFiles from "@/components/CheckedFiles";
import Popup from "@/components/Popup";
import usePopup from "@/hooks/usePopup";

const meta: Meta<typeof Popup.Container> = {
  title: "Components/Popup",
  tags: ["autodocs"],
  component: Popup.Container,
  argTypes: {
    variant: {
      options: ["large", "small"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Popup.Container>;

export const Default: Story = {
  args: {
    isShow: false,
    variant: "small",
  },
  render: function Render(args) {
    const { open: openPopup, close: closePopup, isOpen: isOpen } = usePopup();

    return (
      <>
        <Button onClick={openPopup}>Open Popup</Button>
        <Popup.Container {...args} isShow={isOpen} onClose={closePopup}>
          <Popup.Title text="모달 타이틀 영역" />
          <Popup.Content
            text="설명하는 내용이 들어가는 영역"
            helpText="help text"
          />
        </Popup.Container>
      </>
    );
  },
};

export const Small: Story = {
  args: {
    variant: "small",
  },
  render: function Render(args) {
    const { open: openPopup, close: closePopup, isOpen: isOpen } = usePopup();

    return (
      <>
        <Button onClick={openPopup}>Open Small Popup</Button>
        <Popup.Container {...args} isShow={isOpen} onClose={closePopup}>
          <Popup.Title text="모달 타이틀 영역" />
          <Popup.Content
            text="설명하는 내용이 들어가는 영역"
            helpText="help text"
          />
        </Popup.Container>
      </>
    );
  },
};

export const Large: Story = {
  args: {
    variant: "large",
    hasBackground: true,
  },
  render: function Render(args) {
    const { open: openPopup, close: closePopup, isOpen: isOpen } = usePopup();

    return (
      <>
        <Button onClick={openPopup}>Open Large Popup</Button>
        <Popup.Container {...args} isShow={isOpen} onClose={closePopup}>
          <Popup.Title text="모달 타이틀 영역" />
          <CheckedFiles
            files={[
              {
                fileName: "file name",
                subTitle: "file sub title",
                dateAt: new Date(),
              },
              {
                fileName: "file name",
                subTitle: "file sub title",
                dateAt: new Date(),
              },
              {
                fileName: "file name",
                subTitle: "file sub title",
                dateAt: new Date(),
              },
              {
                fileName: "file name",
                subTitle: "file sub title",
                dateAt: new Date(),
              },
              {
                fileName: "file name",
                subTitle: "file sub title",
                dateAt: new Date(),
              },
            ]}
          />
          <Popup.Content
            text="설명하는 내용이 들어가는 영역"
            helpText="help text"
          />
        </Popup.Container>
      </>
    );
  },
};

export const Analyzing: Story = {
  args: { hasButtons: false, variant: "small", hasBackground: true },
  render: function Render(args) {
    const { open: openPopup, close: closePopup, isOpen: isOpen } = usePopup();

    return (
      <>
        <Button onClick={openPopup}>Open Analyzing Popup</Button>
        <Popup.Container {...args} isShow={isOpen} onClose={closePopup}>
          <Image
            src={"./images/logo_bug.svg"}
            alt={"file"}
            width={106}
            height={109}
          />
          <Popup.Title text="소스코드 취약점 분석중" />
          <Popup.Content
            text="AI 플로디텍터가 문제를 분석중 입니다.
코드가 많을수록 처리시간이 길어집니다."
            className="overflow-wraps min-w-[331px] text-xl"
          />
        </Popup.Container>
      </>
    );
  },
};

export const Login: Story = {
  args: { hasButtons: false, variant: "small" },
  render: function Render(args) {
    const { open: openPopup, close: closePopup, isOpen: isOpen } = usePopup();

    return (
      <>
        <Button onClick={openPopup}>Open Login Popup</Button>
        <Popup.Container {...args} isShow={isOpen} onClose={closePopup}>
          <Popup.Title text="자세한 정보를 보고싶다면?" />
          <Button
            shape="round"
            variant="outline"
            className="border-primary-500"
          >
            Login
          </Button>
        </Popup.Container>
      </>
    );
  },
};
