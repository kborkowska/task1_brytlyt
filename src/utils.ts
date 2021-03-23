import { COIN_ROLL_CAPACITY } from "./consts";
import { TipRolls } from "./interfaces";

export const placeInRolls = (tips: number[]): TipRolls => {
  const tipRolls: TipRolls = {};
  Object.keys(COIN_ROLL_CAPACITY).forEach(
    (coin: string) => (tipRolls[coin] = { rolls: 0, rest: 0 })
  );

  tips.forEach((tip: number) => {
    if (tipRolls[tip]) {
      tipRolls[tip].rest += 1;

      if (tipRolls[tip].rest === COIN_ROLL_CAPACITY[tip]) {
        tipRolls[tip].rolls += 1;
        tipRolls[tip].rest = 0;
      }
    }
  });

  return tipRolls;
};
