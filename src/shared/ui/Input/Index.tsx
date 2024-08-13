"use client";
import React, { FC, InputHTMLAttributes, useState } from "react";
import Image from "next/image";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  type?: string;
}


const Index: FC<InputProps> = ({
  name = "",
  type = "text",
  className,
  ...rest
}) => {
  return (
    <input
      className={`border-2 border-[gray] w-full rounded-[8px] py-[12px] outline-none px-[24px] text-[gray] ${className}`}
      type={type}
      name={name}
      id={name}
      {...rest}
    />
  );
};

export default Index;


