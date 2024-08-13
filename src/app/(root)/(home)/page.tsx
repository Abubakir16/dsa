"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Header from "../../../widgets/Header/Index";
import Footer from "../../../widgets/Footer/Index";

const Page = () => {
  const router = useRouter();

  const handleRouteClient = () => {
    router.push("/client");
  };

  return (
    <div className="w-[1300px] mx-auto">
      <Header />

      <div className="h-[100vh]"></div>

      <Footer />
    </div>
  );
};

export default Page;
