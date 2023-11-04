import { FC } from "react";

interface ButtonProps {
     children: string
}

export const Button: FC<ButtonProps> = ({ children }) => {
     return (
          <button 
               type="button"
               className="text-white rounded-md bg-blue-500 py-2 px-4 duration-300 hover:bg-blue-600"
          >
               {children ?? children}
          </button>
     )
}