interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  state?: "default" | "disabled" | "empty";
}

const button = ({ children, onClick, state = "default" }: ButtonProps) => {
  const styleButtonPrimary =
    "bg-primaryColor text-foreground border-foreground hover:opacity-80";
  const styleButtonByState =
    state === "disabled"
      ? "opacity-60 pointer-events-none cursor-not-allowed px-2 py-1"
      : state === "empty"
      ? "bg-transparent border-transparent hover:opacity-100 p-0"
      : "px-2 py-1 ";

  return (
    <button
      className={`${styleButtonPrimary} ${styleButtonByState} w-fit whitespace-nowrap flex items-center gap-x-2 border-2 rounded-md cursor-pointer font-bold active:scale-[0.97] transition-opacity duration-200`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Text = ({ children }: React.PropsWithChildren) => {
  return <span>{children}</span>;
};

const Icon = ({ children }: React.PropsWithChildren) => {
  return <span>{children}</span>;
};

const Button = Object.assign(button, {
  Text,
  Icon,
});

export default Button;
