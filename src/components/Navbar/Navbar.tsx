import Link from "next/link";
import { ReactNode } from "react";
import { DropDownToggler } from "./Category";
import { SearchCheckbox } from "./Search";

function NavItem({ children }: { children: ReactNode }) {
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
      <div className="container relative flex h-12 max-w-5xl items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-semibold text-white">movienow</h1>
        </Link>
        <div className="ml-12 flex h-full">
          <ul className="flex">
            <NavItem>
              <Link href="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link href="#movies">Movies</Link>
            </NavItem>
          </ul>

          <DropDownToggler />
          <SearchCheckbox />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
