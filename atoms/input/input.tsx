import { useEffect } from "react";
import CheckIcon from "../icons/check";
import CrossIcon from "../icons/cross";

interface InputAtomProps {
  id: string;
  label: string;
  placeholder: string;
  value?: string;
  onChange: (value: string) => void;
}

export default function InputAtom({
  id,
  label,
  placeholder,
  value,
  onChange,
}: InputAtomProps) {
  return (
    <div className="flex flex-col gap-y-2 group">
      <div className="flex items-center gap-x-1">
        {value && value.length > 3 ? (
          <CheckIcon size={14} color="green" />
        ) : (
          <CrossIcon size={14} color="red" />
        )}
        <label
          htmlFor={id}
          className="group-focus-within:pl-0 pl-2 text-base group-focus-within:font-bold transition-all duration-200 w-fit"
        >
          {label}
        </label>
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="clear w-[300px] focus:outline-primaryColor rounded-md px-2 py-1 text-sm placeholder:text-foreground/40 font-semibold"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
