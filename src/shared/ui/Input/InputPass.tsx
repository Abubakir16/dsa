"use client";
import React, { FC, InputHTMLAttributes, useState } from "react";
import Image from "next/image";

interface InputPassProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
}

export const InputPass: FC<InputPassProps> = ({
  name = "",
  className,
  ...rest
}) => {
  const [inputType, setInputType] = useState<string>("password");

  const toggleInputType = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <div
      className={`border-2 border-[gray] w-full rounded-[8px] py-[12px] outline-none px-[24px] text-[gray] flex justify-between ${className}`}
    >
      <input
        className=" outline-none w-full"
        type={inputType}
        name={name}
        id={name}
        {...rest}
      />
      <button
        type="button"
        onClick={toggleInputType}
        className="ml-2 focus:outline-none relative"
      >
        <Image
          src="svg/eye.svg"
          alt="Toggle visibility"
          width={24}
          height={24}
        />
        <hr className={`${inputType === 'password' ? 'opacity-0' :"opacity-1"} transition-opacity duration-300 border-2 border-[gray] rotate-45 translate-x-[1px] translate-y-[-12px]`} />
      </button>
    </div>
  );
};
