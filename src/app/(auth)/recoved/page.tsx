import Input from "./../../../shared/ui/Input/Index";
import Button from "./../../../shared/ui/Button/Index";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <img className="absolute top-0 left-0" src="/svg/purpleLeft.svg" alt="" />
      <img
        className="absolute bottom-0 right-0"
        src="/svg/purpleRight.svg"
        alt=""
      />
      <div className="text-center w-[450px] shadow-xl  px-[39px] py-[30px]">
        <h1 className="text-[48px] font-[600] leading-[48px] mb-[12px]">
          Добро пожаловать
        </h1>
        <p className="text-[16px] text-[gray] mb-[32px]">
          Let's do a couple of shoggoths and start looking for art
        </p>
        <form>
          <Input
            placeholder="Электронный почта"
            type="email"
            className="mb-[8px] border border-[#262D2966]"
          />

          <Button className="btn-w-shadow w-full bg-[#FF7622] text-[#fff] py-[12px]  rounded-[8px]">
            Войти
          </Button>
        </form>
      </div>
    </div>
  );
}
