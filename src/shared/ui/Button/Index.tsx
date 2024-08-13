import React, { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface IndexProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;  
}

const Index: FC<IndexProps> = ({ children, className, ...rest }) => {
  return (
    <button className={`text-[#FF7622] ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Index;
