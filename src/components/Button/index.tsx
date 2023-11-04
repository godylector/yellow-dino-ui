import { FC, ReactNode } from "react";
import '../../index.css'
import { mainConfig } from "../config";

interface ButtonProps {
  children: ReactNode;
  bgColor?: string;
  rounded?: string
}

export const Button: FC<ButtonProps> = ({
  children,
  bgColor = mainConfig.colorTheme,
  rounded = 'rounded-md'
}) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor }}
      className={`py-2 px-5 ${rounded}`}
    >
      {children ?? children}
    </button>
  );
};
