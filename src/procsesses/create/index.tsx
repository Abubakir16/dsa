"use client";
import Input from "./../../shared/ui/Input/Index";
import Button from "./../../shared/ui/Button/Index";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function Index() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const route = useRouter();

  const handleChange = (e: any) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://back.webmenu.online/api/v1/accounts/register/",
        { email }
      );

      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data))
        route.push("/chek_verify_code");
      }
    } catch (err: any) {
      err.response.data.email
        ? setError(err.response.data.email)
        : setError("Что то ошибка есть");
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
      <div className="text-center w-[450px] shadow-xl min-h-[524px] px-[39px] py-[30px]">
        <h1 className="text-[48px] font-[600] leading-[48px] mb-[12px]">
          Добро пожаловать
        </h1>
        <p className="text-[16px] text-[gray] mb-[32px]">
          Let's do a couple of shoggoths and start looking for art
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Элекронный почта"
            type="Email"
            className="mb-[8px]"
            value={email}
            onChange={handleChange}
          />
          {error && <p className="text-red-500 mb-[8px]">{error}</p>}{" "}
          <Button
            type="submit"
            className="w-full text-[#FF7622] border transition-all duration-300 hover:bg-[#FF7622] hover:text-[#fff] border-[#FF7622] text-[16px] py-[12px] mt-[10px] rounded-[8px]"
            disabled={loading} 
          >
            {loading ? "Загрузка..." : "Получить код"}{" "}
          </Button>
          <div className="flex justify-between w-full items-center gap-[53px] mt-[27px]">
            <span className="w-[100%] h-[3px] bg-[#262D2966]"></span>
            <p className="text-[#262D2966]">или</p>
            <span className="w-[100%] h-[3px] bg-[#262D2966]"></span>
          </div>
          <div className="flex justify-between mt-[20px]">
            <Link
              href="#"
              className="flex gap-[4px] border border-[#00000033] w-full justify-center rounded-[8px] py-[12px] px-[50px]"
            >
              <img src="/svg/google.svg" alt="" />
              <p>Google</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
