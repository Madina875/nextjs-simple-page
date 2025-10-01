import Link from "next/link";
import { memo } from "react";

const Header = () => {
  return (
    <header className="bg-gray-600 text-black">
      <div className=" flex justify-between px-20 h-15 items-center">
        <div className="text-2xl font-medium">LOGOO</div>
        <ul className="flex gap-10 text-[20px]">
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
            <Link href={"/login"}>Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);
