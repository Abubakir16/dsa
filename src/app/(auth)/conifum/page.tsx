import Input from "../../../shared/ui/Input/Index";
import { InputPass } from "../../../shared/ui/Input/InputPass";
import Button from "../../../shared/ui/Button/Index";
import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <img className="absolute top-0 left-0" src="/svg/purpleLeft.svg" alt="" />
      <img
        className="absolute bottom-0 right-0"
        src="/svg/purpleRight.svg"
        alt=""
      />
      <div className="text-center w-[457px] shadow-xl  px-[39px] py-[30px]">
        <form>
          <div className="flex items-center gap-[28px]">
            <div>
              <Button
                type="button"
                className="w-[140px] text-[80px] text-[#00000033] h-[140px] rounded-[50%] bg-[#D9D9D94D]"
              >
                +
              </Button>
            </div>
            <div>
              <Input
                placeholder="Имя"
                type="text"
                className="mb-[17px] py-[3px] placeholder:text-[12px] px-[12px] border border-[#262D294D]"
              />
              <Input
                placeholder="Фамилия"
                type="text"
                className="mb-[17px] py-[3px] placeholder:text-[12px] px-[12px] border border-[#262D294D]"
              />
              <Input
                placeholder="ДД / ММ / ГГ"
                type="date"
                className="mb-[17px] py-[3px] placeholder:text-[12px] px-[12px] border border-[#262D294D]"
              />
            </div>
          </div>
          <Button className="w-full bg-[#FF7622] text-[#fff] py-[12px] mt-[40px] rounded-[8px]">
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </div>
  );
}
