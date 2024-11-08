import { GameSymbol } from "./game-symbol";

import styles from "./game.module.css";

export function GameCell({ onClick, symbol, isWinner }) {

  return (
    <button
      className={`${styles["cell"]} ${isWinner ?  styles["cell--win"] : ""}`}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  )
}
