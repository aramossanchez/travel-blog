import Button from "../button/button";
import CrossIcon from "../icons/cross";

interface InputAtomProps {
  id: string;
  label: string;
  placeholder: string;
}

export default function InputAtom({ id, label, placeholder }: InputAtomProps) {
  return (
    <div className="flex flex-col gap-y-2 group">
      <label
        htmlFor={id}
        className="group-focus-within:pl-0 pl-2 text-sm group-focus-within:font-bold transition-all duration-200 w-fit"
      >
        {label}
      </label>
      <div className="flex items-center gap-x-1">
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          className="clear w-[300px] focus:outline-primaryColor rounded-md px-2 py-1 text-sm placeholder:text-foreground/60 font-semibold"
        />
        <Button onClick={() => console.log("Clear input")} state="empty">
          <CrossIcon size={20} color="red" />
        </Button>
      </div>
    </div>
  );
}
