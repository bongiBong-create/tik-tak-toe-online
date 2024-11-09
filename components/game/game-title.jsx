import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";
import { Star } from "./icons/star-icon";
import { User } from "./icons/user-icon";
import { Time } from "./icons/time-icon";

export function GameTitle() {
  return (
    <div className="pl-2">
      <Link
        className="flex items-center gap-2 text-xs text-teal-600 leading-tight"
        href="#"
      >
        <ArrowLeftIcon />
        На главную
      </Link>
      <h1 className="text-4xl leading-tight">Крестики нолики</h1>
      <div className="flex items-center gap-3 text-xs text-slate-400">
        <Star />
        <div className="flex items-center gap-1">
          <User />2
        </div>
        <div className="flex items-center gap-1">
          <Time /> 1 мин на ход
        </div>
      </div>
    </div>
  );
}
