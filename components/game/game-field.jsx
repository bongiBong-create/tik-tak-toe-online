import clsx from "clsx";
import { Zero } from "./icons/zero-icon";
import { Cross } from "./icons/cross-icon";
import { UiBtn } from "../uikit/ui-btn";

const cells = new Array(19 * 19).fill(null);

export function GameField({ className }) {
  return (
    <div
      className={clsx(className, "bg-white rounded-2xl shadow-md px-7 py-5")}
    >
      <div className="flex gap-3 mb-5 items-center">
        <div className="mr-auto">
          <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
            Ход: <Zero className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-1 text-slate-400 text-xs leading-tight">
            Следующий: <Cross />
          </div>
        </div>
        <UiBtn variant="primary" size="md">
          Ничья
        </UiBtn>
        <UiBtn variant="outline" size="md">
          Сдаться
        </UiBtn>
      </div>

      <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)]">
        {cells.map((_, index) => (
          <button key={index} className="border border-slate-200 -ml-px -mt-px flex items-center justify-center">
            <Zero />
          </button>
        ))}
      </div>
    </div>
  );
}
