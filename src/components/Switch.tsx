import React from "react";

import { cn } from "@/utils/cn";

type TSwitchProps = {
  disabled?: boolean;
  checked?: boolean;
  hasIcon?: boolean;
} & React.ComponentPropsWithRef<"input">;

export default function Switch({
  disabled = false,
  checked = false,
  hasIcon = false,
  ...rest
}: TSwitchProps) {
  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className={cn("relative", { "opacity-50": disabled })}>
          <input
            type="checkbox"
            defaultChecked={checked}
            disabled={disabled}
            className="peer sr-only"
            {...rest}
          />
          <div
            className={cn(
              "block h-[32px] w-[52px] rounded-full border-2 peer-checked:border-0 peer-checked:bg-primary-500",
              {
                "border-primary-200 bg-background-purpleLight peer-checked:bg-primary-200":
                  disabled,
                "bg-primary-50 active:border-[#ADADAD]": !disabled,
              },
            )}
          />
          <div
            className={cn(
              "absolute origin-center rounded-full bg-center bg-no-repeat transition peer-checked:top-1 peer-checked:h-6 peer-checked:w-6 peer-checked:bg-white",
              {
                "left-1 top-1 h-6 w-6 bg-[url('/images/switch-x.svg')] peer-checked:translate-x-[20px] peer-checked:bg-[url('/images/switch-check.svg')]":
                  hasIcon,
                "left-2 top-[8px] h-4 w-4 peer-checked:translate-x-[16px]":
                  !hasIcon,
                "bg-[#1D1B20]": disabled,
                "bg-[#79747E] hover:shadow-[0_0_0_12px_rgba(29,27,32,0.08)] active:scale-[1.1] active:bg-[#3F3F3F] hover:active:shadow-[0_0_0_12px_rgba(201,168,255,0.5)] peer-checked:hover:shadow-[0_0_0_12px_rgba(166,111,255,0.12)]":
                  !disabled,
              },
            )}
          />
        </div>
      </label>
    </>
  );
}
