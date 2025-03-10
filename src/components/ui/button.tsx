import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
} 

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded ${
        variant === "primary" ? "bg-blue-500 text-white" :
        variant === "secondary" ? "bg-gray-300 text-black" :
        "border border-gray-500 text-black bg-transparent"  // Outline style
      }`}  
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;