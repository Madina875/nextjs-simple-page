import Link from "next/link";
import { memo } from "react";

const Footer = () => {
  return (
    <div className="bg-white border-t-1 border-gray-300 h-20 text-black">
      <div className="container pt-5 flex justify-between">
        <div className="text-2xl font-medium font-[Volkhov]">FOOTER</div>
        <ul className="flex gap-15 items-center text-[13px]">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/user"}>User</Link>
          </li>
          <li>
            <Link href={"/product"}>Product</Link>
          </li>
          <li>
            <Link href={"/login"}>Sign in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(Footer);
