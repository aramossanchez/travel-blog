import Link from "next/link";
import ArrowRightIcon from "../icons/arrowRight";

interface LinkAtomProps {
  href: string;
  text: string;
}

export default function LinkAtom({ href, text }: LinkAtomProps) {
  return (
    <div className="group flex flex-row items-center gap-x-1 w-fit">
      <p className="group-hover:text-primaryColor duration-200 group-hover:pr-3">
        <ArrowRightIcon size={20} />
      </p>
      <Link
        href={href}
        target="_blank"
        className="underline hover:text-primaryColor duration-200"
      >
        {text}
      </Link>
    </div>
  );
}
