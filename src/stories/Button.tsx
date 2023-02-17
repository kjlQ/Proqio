import React from "react";
import "../index.css";

interface ButtonProps {
  primary?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}
export const Button = ({ primary = false, size = "medium", type, backgroundColor, label, ...props }: ButtonProps) => {
  const mode = primary ? "bg-[#1ea7fd] text-[#fff]" : "bg-[#fff] text-[#1ea7fd]";

  const handleGetPropperSize = (size: string) => {
    switch (size) {
      case "small":
        return "py-1 px-2 text-sm";
      case "medium":
        return "py-2 px-4 text-base";
      case "large":
        return "py-3 px-8 text-lg";
      default:
        break;
    }
  };

  return (
    <button
      type={type}
      style={{ backgroundColor }}
      className={[
        " border border-[#1ea7fd]  font-medium rounded focus:outline-none focus:shadow-outline",
        `${handleGetPropperSize(size)}`,
        mode,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
