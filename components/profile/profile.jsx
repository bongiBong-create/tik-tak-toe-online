import Image from "next/image";
import avatar from "./avatar.png";
import clsx from "clsx";

export function Profile({className}) {
  return (
    <div className={clsx("ml-auto flex items-center gap-2 text-start text-teal-600", className)}>
      <Image src={avatar} width={48} alt="avatar" unoptimized />
      <div>
        <div className=" text-lg leading-tight">ParomovEvg</div>
        <div className="text-slate-200 text-xs leading-tight">
          Рейтинг: 1230
        </div>
      </div>
    </div>
  );
}
