import { FC, ReactNode } from "react";
import '../../index.css'

interface ButtonProps {
  children: ReactNode;
  bgColor?: string;
  hoverBgColor?: string;
  rounded?: string;
  width?: number;
  color?: string;
  duration?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  bgColor = 'theme',
  hoverBgColor = 'hover-theme',
  rounded = 'md',
  width = 10,
  color = 'white',
  duration = '300'
}) => {
  const backgroundClass = `bg-${bgColor}`
  const backgroundHoverClass = `hover:bg-${hoverBgColor}`
  const roundedClass = `rounded-${rounded}`
  const colorClass = `text-${color}`
  const durationClass = `duration-${duration}`

  return (
    <button
      type="button"
      style={{ width: `${width}%` }}
      className={`py-2 px-5 ${roundedClass} ${colorClass} text-[18px] font-[600] ${durationClass} ${backgroundClass} ${backgroundHoverClass}`}
    >
      {children ?? children}
    </button>
  );
};