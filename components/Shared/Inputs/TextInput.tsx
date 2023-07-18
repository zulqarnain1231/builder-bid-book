import React from "react";

interface Props {
  name: string;
  state: string | number;
  setState: any;
  type: string;
  disabled?: boolean;
  required?: boolean;
  title: string;
}

const TextInput: React.FC<Props> = ({
  name,
  state,
  setState,
  type,
  disabled,
  required = true,
  title,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 jsutify-start">
      <label
        htmlFor={name}
        className="font-inter font-medium text-black-main text-[14px] capitalize"
      >
        {title}
      </label>
      <input
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        name={name}
        value={state}
        onChange={setState}
        type={type}
        disabled={disabled}
        required={required}
        id={name}
        className="w-full h-[36px] font-inter font-[500] text-black-main text-[14px] bg-gray-50 border disabled:cursor-not-allowed disabled:bg-gray-300 rounded-lg focus:outline-none focus:ring-brand-tartary focus:border-brand-tartary px-2.5"
      />
    </div>
  );
};

export default TextInput;
