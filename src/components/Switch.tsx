import React from "react";

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
  const switchClass = `${disabled ? "border-primary-200 bg-background-purpleLight peer-checked:bg-primary-200" : "bg-primary-50 active:border-[#ADADAD]"}`;
  const slideClass = `${hasIcon ? "h-6 w-6 top-1 left-1 bg-[url('/images/switch-x.svg')] peer-checked:bg-[url('/images/switch-check.svg')] peer-checked:translate-x-[20px]" : "h-4 w-4 left-2 top-[8px] peer-checked:translate-x-[16px]"} ${disabled ? "bg-[#1D1B20]" : "bg-[#79747E] active:bg-[#3F3F3F] hover:shadow-[0_0_0_12px_rgba(29,27,32,0.08)] hover:active:shadow-[0_0_0_12px_rgba(201,168,255,0.5)] peer-checked:hover:shadow-[0_0_0_12px_rgba(166,111,255,0.12)] active:scale-[1.1]"}`;

  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className={`relative ${disabled && "opacity-50"}`}>
          <input
            type="checkbox"
            defaultChecked={checked}
            disabled={disabled}
            className="peer sr-only"
            {...rest}
          />
          <div
            className={`block h-[32px] w-[52px] rounded-full border-2 peer-checked:border-0 peer-checked:bg-primary-500 ${switchClass}`}
          />
          <div
            className={`absolute origin-center rounded-full bg-center bg-no-repeat transition peer-checked:top-1 peer-checked:h-6 peer-checked:w-6 peer-checked:bg-white ${slideClass}`}
          />
        </div>
      </label>
    </>
  );
}
