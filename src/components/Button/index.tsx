import { FC, ReactNode } from "react";
import '../Core/index.css'
import "./button.css";
import { mainConfig } from "../Core";

interface ButtonProps {
  children: ReactNode;
  bgColor?: string;
  rounded: string
}

export const Button: FC<ButtonProps> = ({
  children,
  bgColor = mainConfig.themeColor,
  rounded = 'rounded-md'
}) => {
  return (
    <button
      type="button"
      className={`button ${rounded}`}
      style={{
        backgroundColor: bgColor,
        border: "none",
      }}
    >
      {children ?? children}
    </button>
  );
};
