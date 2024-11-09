import { GAME_SYMBOLS } from "./constants";

import { Cross } from "./icons/cross-icon";
import { Square } from "./icons/square-icon";
import { Triangle } from "./icons/triangle-icon";
import { Zero } from "./icons/zero-icon";

export function GameSymbol({ symbol, className }) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: Cross,
      [GAME_SYMBOLS.ZERO]: Zero,
      [GAME_SYMBOLS.TRIANGLE]: Triangle,
      [GAME_SYMBOLS.SQUARE]: Square,
    }[symbol] ?? Cross;

  return <Icon className={className} />;
}
