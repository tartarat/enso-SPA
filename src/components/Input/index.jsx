import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    green_500: "bg-green-500 text-white-A700",
    blue_50: "bg-blue-50 text-black-900_01",
    white_A700: "bg-white-A700 text-blue_gray-200",
  },
  underline: {
    blue_gray_100: "border-b border-blue_gray-100 text-black-900_01",
  },
};
const shapes = { round: "rounded-md" };
const sizes = {
  xs: "pb-[11px] pt-2.5 px-2.5",
  sm: "pb-3.5 pr-[13px] pt-[13px]",
  lg: "pb-2.5 pr-2.5 pt-4",
  xl: "pb-[17px]",
  "2xl": "pb-3 pl-[11px] pr-3 pt-[19px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "sm",
      variant = "fill",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill", "underline"]),
  color: PropTypes.oneOf([
    "green_500",
    "blue_50",
    "white_A700",
    "blue_gray_100",
  ]),
};

export { Input };
