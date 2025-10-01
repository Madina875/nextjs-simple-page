import Link from "next/link";
import { memo } from "react";

const Header = () => {
  return (
    <header className="bg-white text-black h-[55px]">
      <div className="container flex justify-between items-center size-full">
        <div className="text-3xl font-medium font-[Volkhov]">LOGOO</div>
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
          <button className="bg-black text-white w-[120px] py-2 rounded-[10px]">
            Sign up
          </button>
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);
