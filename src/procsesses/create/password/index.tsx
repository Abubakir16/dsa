"use client";
import React, { useState } from "react";
import Input from "./../../../shared/ui/Input/Index";
import { InputPass } from "./../../../shared/ui/Input/InputPass";
import Button from "./../../../shared/ui/Button/Index";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Index() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const code = JSON.parse(localStorage.getItem("code"));

    try {
      const response = await axios.post(
        `https://back.webmenu.online/api/v1/accounts/send/verify-code/${code}`,
        {
          password,
          password_confirm: passwordConfirm,
        }
      );

      if (response.status == 201) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        router.push("/conifum");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred while verifying the code.");
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
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputPass
            className="mb-[8px] border border-[#262D2966]"
            placeholder="Повторить пароль"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
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
