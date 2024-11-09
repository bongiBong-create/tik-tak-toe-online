import Image from "next/image";
import logo from "./logo.svg";

import { Profile } from "../profile";
import { ArrowDownIcon } from "./icons/arrow-down-icon";

export function Header() {
  return (
    <header className="h-24 flex items-center px-8 bg-white shadow-lg">
      <Image src={logo} alt="logo" />
      <div className="w-px h-8 bg-slage-200 mx-6"></div>
      <button className="w-44 bg-teal-600 hover:bg-teal-500 transition-colors text-white text-2xl leading-tight rounded-lg px-5 py-2">
        Играть
      </button>
      <button className="ml-auto flex items-center gap-2 text-start text-teal-600">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
