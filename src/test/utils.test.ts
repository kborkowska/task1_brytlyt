import {
  emptyRolls,
  emptyRollsSomeRest,
  expectedRollsFullTips,
  fullTipsMock,
  someRestTipsMock,
  someRollsSomeRest,
  someRollsSomeRestTipsMock,
} from "./tips.mock";
import { placeInRolls } from "../utils";

describe("placeInRolls", () => {
  test("places tips correctly", () => {
    const tipRolls = placeInRolls(fullTipsMock);
    expect(tipRolls).toEqual(expectedRollsFullTips);
  });

  test("no tips no rolls", () => {
    const tipRolls = placeInRolls([]);
    expect(tipRolls).toEqual(emptyRolls);
  });

  test("only rest, no rolls", () => {
    const tipRolls = placeInRolls(someRestTipsMock);
    expect(tipRolls).toEqual(emptyRollsSomeRest);
  });

  test("some rolls, some rest, some empty", () => {
    const tipRolls = placeInRolls(someRollsSomeRestTipsMock);
    expect(tipRolls).toEqual(someRollsSomeRest);
  });

  test("wrong denomination", () => {
    const tipRolls = placeInRolls([99]);
    expect(tipRolls).toEqual(emptyRolls);
  });
});
