import Image from "next/image";
import logo from "./logo.svg";

import { Profile } from "../profile";
import { ArrowDownIcon } from "./icons/arrow-down-icon";
import { UiBtn } from "../uikit/ui-btn";

export function Header() {
  return (
    <header className="h-24 flex items-center px-8 bg-white shadow-lg">
      <Image src={logo} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6"></div>
      <UiBtn className="w-44" variant="primary" size="lg">
        Играть
      </UiBtn>
      <button className="ml-auto flex items-center gap-2 text-start text-teal-600">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
