import clsx from "clsx";

import { UiBtn } from "../uikit/ui-btn";
import { GameSymbol } from "./game-symbol";
import { useGameState } from "./use-game-state";

export function GameField({ className }) {
  const { cells, currentMove, nextMove, handleCellClick } = useGameState();

  const actions = (
    <>
      <UiBtn variant="primary" size="md">
        Ничья
      </UiBtn>
      <UiBtn variant="outline" size="md">
        Сдаться
      </UiBtn>
    </>
  );

  return (
    <GameFieldLayout>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, i) => (
          <GameCell
            key={i}
            onClick={() => {
              handleCellClick(i);
            }}
          >
            {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(className, "bg-white rounded-2xl shadow-md px-7 py-5")}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex gap-3 mb-5 items-center">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
          Ход: <GameSymbol symbol={currentMove} className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1 text-slate-400 text-xs leading-tight">
          Следующий: <GameSymbol symbol={nextMove} />
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)]">
      {children}
    </div>
  );
}

function GameCell({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-slate-200 -ml-px -mt-px flex items-center justify-center"
    >
      {children}
    </button>
  );
}
