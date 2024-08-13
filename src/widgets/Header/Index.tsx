"use client";
import React from "react";
import Button from "./../../shared/ui/Button/Index";
import { useRouter } from "next/navigation";
import  Link  from "next/link";

export default function Index() {


  return (
    <div className="flex justify-between my-[30px]">
      <h1>LOGO</h1>

      <div className="flex gap-[8px]">
        <Button
          className="border-2 rounded-[8px] py-[9px] px-[10px] border-[#FF7622] text-[#FF7622]"
        >
          Все заведении
        </Button>
        <Button className="border-2 rounded-[8px] py-[9px] px-[40px] border-[#FF7622] text-[#fff] bg-[#FF7622]">
          <Link href={"/login"}>Войти</Link>
        </Button>
      </div>
    </div>
  );
}
