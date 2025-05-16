import { ChangeEventHandler, HTMLInputTypeAttribute, ReactNode } from "react";

interface iFormProps {
  label?: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  requiredColor?: string;
  optional?: boolean;
  name?: string;
  readOnly?: boolean;
  bgColor?: string;
  borderWidth?: number;
  borderColor?: string;
  className?: string;
  color?: string;
  inputRef?: string;
  fontSize?: string;
  min?: number;
  max?: number;
  paddingX?: string;
  paddingY?: string;
  labelPosition?: "block" | "flex";
  id?: string;
}

interface iInputField extends iFormProps {
  icon?: ReactNode;
  iconPosition?: "right" | "left";
  iconClick?: () => void;
  maxLength?: number;
}

const FormInput = ({
  label,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  icon,
  iconPosition,
  iconClick,
  required,
  optional,
  name,
  readOnly,
  bgColor,
  borderColor,
  borderWidth,
  inputRef,
  paddingX = "4",
  paddingY = "2",
  className = "",
  id,
  requiredColor = "text-red-400",
  maxLength,
  ...rest
}: iInputField) => {
  const isLeftIcon = iconPosition === "left";

  return (
    <div className="mb-2">
      {label && (
        <label className="mb-2 block font-bold text-lg">
          {label}
          {required && <span className={`pl-1 ${requiredColor}`}>*</span>}
          {optional && <span className="text-[#787486] pl-1">(Optional)</span>}
        </label>
      )}

      <div className="relative flex-1">
        {icon && (
          <span
            onClick={iconClick}
            className={`absolute ${
              isLeftIcon ? "left-0" : "right-0"
            } px-3 bottom-0 flex items-center justify-center h-full cursor-pointer`}
          >
            {icon}
          </span>
        )}
        <input
          id={id}
          type={type}
          ref={inputRef}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          name={name}
          readOnly={readOnly}
          maxLength={maxLength}
          className={`block px-${paddingX} py-${paddingY} rounded-md w-full border-[1px] ${
            error
              ? "border-red_pry"
              : value && value.toString().length > 0
              ? "border-[#48D1CC]"
              : borderColor
              ? `border-[${borderColor}]`
              : "dark:border-borderDark border-borderLight"
          } ${
            isLeftIcon ? "pl-12" : icon ? "pr-12" : ""
          } dark:placeholder:text-gray_3 placeholder:text-gray_4 ${
            readOnly
              ? "dark:bg-darkBg bg-lightBg"
              : bgColor
              ? `bg-[${bgColor}]`
              : "bg-[#F9FAFB]"
          } text-base outline-none focus:border-[#48D1CC] focus:ring-1 focus:ring-[#48D1CC] ${className}`}
          style={{
            borderWidth,
            borderColor,
          }}
          {...rest}
        />
      </div>
      {error && <div className="mt-1 text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default FormInput;
