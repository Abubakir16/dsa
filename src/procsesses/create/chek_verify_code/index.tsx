"use client";
import React, { useState } from "react";
import Input from "./../../../shared/ui/Input/Index";
import { InputPass } from "./../../../shared/ui/Input/InputPass";
import Button from "./../../../shared/ui/Button/Index";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Index() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const route = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log(code);
      const response = await axios.get(
        `https://back.webmenu.online/api/v1/accounts/chek/verify-code/${code}`
      );

      if (response.status === 200) {
        localStorage.setItem("code", JSON.stringify(code));
        route.push("/create_password");
      }
    } catch (err: any) {
      if (err.response && err.response.data) {
        setError(err.response.data.detail);
      } else {
        setError("Что то ошибка есть");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <img className="absolute top-0 left-0" src="/svg/purpleLeft.svg" alt="" />
      <img
        className="absolute bottom-0 right-0"
        src="/svg/purpleRight.svg"
        alt=""
      />
      <div className="text-center w-[450px] shadow-xl px-[39px] py-[30px]">
        <h1 className="text-[48px] font-[600] leading-[48px] mb-[12px]">
          Добро пожаловать
        </h1>
        <p className="text-[16px] text-[gray] mb-[32px]">
          Let's do a couple of shoggoths and start looking for art
        </p>
        <form onSubmit={handleSubmit}>
          <InputPass
            className="mb-[8px] border border-[#262D2966]"
            placeholder="Код"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          {error && <p className="text-red-500 mb-[8px]">{error}</p>}

          <Button
            type="submit"
            className="btn-w-shadow w-full bg-[#FF7622] text-[#fff] py-[12px] rounded-[8px]"
            disabled={loading}
          >
            {loading ? "Загрузка..." : "Проверить код"}
          </Button>
        </form>
      </div>
    </div>
  );
}
