import { changeCoin } from "./main";

/**
 * Given an amount of money and a set of coins,
 * find the way to make the amount of money using least number of coins.
 * return result should be an array of coins order by descending.
 * Example:
 * amount = 20
 * coins = [1, 2, 5]
 * result = [5, 5, 5, 5]
 */

describe("Test case 1 for coin change problem", () => {

  it("case 1", () => {
    const amount = 20;
    const coins = [1, 2, 5];
    const result = changeCoin(amount, coins);
    expect(result).toEqual([5, 5, 5, 5]);
  });

  it("case 2", () => {
    const amount = 8;
    const coins = [1, 2, 5];
    const result = changeCoin(amount, coins);
    expect(result).toEqual([5, 2, 1]);
  });

  it("case 3", () => {
    const amount = 6;
    const coins = [1, 2, 5];
    const result = changeCoin(amount, coins);
    expect(result).toEqual([5, 1]);
  });

  it("case 4", () => {
    const amount = 5;
    const coins = [1, 2, 5];
    const result = changeCoin(amount, coins);
    expect(result).toEqual([5]);
  });

  it("case 5", () => {
    const amount = 4;
    const coins = [1, 2, 5];
    const result = changeCoin(amount, coins);
    expect(result).toEqual([2, 2]);
  });
  
  it("case 6", () => {
    const amount = 3;
    const coins = [1, 2, 5];
    const result = changeCoin(amount, coins);
    expect(result).toEqual([2, 1]);
  });
  
  it("case 7", () => {
    const amount = 40;
    const coins = [5, 10, 20];
    const result = changeCoin(amount, coins);
    expect(result).toEqual([20, 20]);
  });
});

describe("Test case 2 for coin change problem", () => {
  it("case 1", () => {
    const amount = 40;
    const coins = [5, 10, 20, 25];
    const result = changeCoin(amount, coins);
    expect(result).toEqual([20, 20]);
  });
});
