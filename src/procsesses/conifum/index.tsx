import Input from "./../../shared/ui/Input/Index";
import Button from "./../../shared/ui/Button/Index";
import React from "react";
import Link from "next/link";

export default function Index() {
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
                className="w-[140px] text-[80px] relative text-[#00000033] h-[140px] rounded-[50%] bg-[url(/image/user.png)] bg-cover bg-center"
              >
                <img
                  className="w-[27%] translate-x-[106px] translate-y-[48px] bg-[gray] rounded-[50%] p-[5px]"
                  src="./svg/pen.svg"
                  alt=""
                />
                <input type="file" className="w-[10%] top-[10%]" />
              </Button>
            </div>
            <div>
              <Input
                placeholder="Имя"
                type="text"
                className="mb-[17px] py-[17px] placeholder:text-[18px] px-[12px] border border-[#262D294D]"
              />
              <Input
                placeholder="Фамилия"
                type="text"
                className="mb-[17px] py-[17px] placeholder:text-[18px] px-[12px] border border-[#262D294D]"
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
