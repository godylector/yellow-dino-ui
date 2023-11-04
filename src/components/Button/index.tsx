import { FC, ReactNode } from "react";
import { mainConfig } from "../config";
import '../../index.css'

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
