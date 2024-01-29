import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded",
};
const variants = {
  fill: {
    light_blue_100: "bg-light_blue-100 text-black-900",
    red_200: "bg-red-200 text-black-900",
    green_A100: "bg-green-A100 text-black-900",
    deep_orange_300: "bg-deep_orange-300 text-white-A700",
    gray_300: "bg-gray-300",
    gray_50_05: "bg-gray-50_05",
    blue_gray_300_87: "bg-blue_gray-300_87",
    white_A700: "bg-white-A700 text-black-900_01",
    blue_A700: "bg-blue-A700 text-white-A700",
    red_400: "bg-red-400",
    blue_A200_02: "bg-blue-A200_02",
    gray_100_01: "bg-gray-100_01 text-red-700",
    deep_orange_50: "bg-deep_orange-50 text-deep_orange-400",
    blue_50: "bg-blue-50 text-blue-A700",
    blue_gray_50: "bg-blue_gray-50 text-gray-900_01",
    red_700: "bg-red-700 text-gray-100_02",
    blue_50_7f: "bg-blue-50_7f",
    gray_50_06: "bg-gray-50_06 text-amber-500",
    green_600: "bg-green-600 text-gray-50",
  },
  outline: {
    gray_100: "border border-gray-100 border-solid",
    blue_A700: "border border-blue-A700 border-solid text-blue-A700",
  },
};
const sizes = {
  xs: "p-1",
  sm: "pl-1.5 py-1.5",
  md: "pl-2 py-4",
  lg: "pr-2.5 py-2.5",
  xl: "p-[11px]",
  "2xl": "p-3.5",
  "3xl": "px-2.5 py-[15px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "light_blue_100",
    "red_200",
    "green_A100",
    "deep_orange_300",
    "gray_300",
    "gray_50_05",
    "blue_gray_300_87",
    "white_A700",
    "blue_A700",
    "red_400",
    "blue_A200_02",
    "gray_100_01",
    "deep_orange_50",
    "blue_50",
    "blue_gray_50",
    "red_700",
    "blue_50_7f",
    "gray_50_06",
    "green_600",
    "gray_100",
  ]),
};

export { Button };
