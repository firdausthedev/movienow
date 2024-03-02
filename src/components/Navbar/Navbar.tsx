import Link from "next/link";
import { ReactNode } from "react";
import { DropDownToggler } from "./Category";
import { SearchCheckbox } from "./Search";
import { MobileMenu } from "./MobileMenu";

export function NavItem({ children }: { children: ReactNode }) {
  return (
    <li
      className="group flex h-full list-none items-center justify-center px-4 text-semiXl font-medium text-gray
      transition duration-150 hover:bg-darkBlue hover:text-white"
    >
      {children}
    </li>
  );
}

function Navbar() {
  return (
    <nav>
      <div className="container relative flex h-12 items-center justify-between md:max-w-5xl ">
        <Link href="/" className="order-2 md:order-1">
          <h1 className=" text-base font-semibold text-white md:text-xl">
            movienow
          </h1>
        </Link>

        <MobileMenu />

        <div className="order-2 ml-12 flex h-full md:order-1">
          <ul className="hidden md:flex">
            <NavItem>
              <Link href="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link href="#movies">Movies</Link>
            </NavItem>
            <DropDownToggler />
          </ul>
          <SearchCheckbox />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
