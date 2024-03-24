import { validateNumber } from "../src/ch7";

describe("測試validateNumber - 以邏輯覆蓋法MUMCUT練習", () => {
  const testData: {
    inputValue: { x: number; y: number; target: number };
    expectValue: boolean;
  }[] = [
    { inputValue: { x: 2, y: -8, target: 4 }, expectValue: true },
    { inputValue: { x: -3, y: 12, target: 6 }, expectValue: true },
    { inputValue: { x: -23, y: 0, target: 9 }, expectValue: false },
    { inputValue: { x: 8, y: -4, target: -2 }, expectValue: false },
    { inputValue: { x: -3, y: 33, target: -3 }, expectValue: false },
    { inputValue: { x: 12, y: -48, target: 24 }, expectValue: true },
    { inputValue: { x: 7, y: 33, target: 11 }, expectValue: false },
    { inputValue: { x: 5, y: -25, target: 50 }, expectValue: false },
  ];
  it.each(testData)("測試validateNumber", ({ inputValue, expectValue }) => {
    const { x, y, target } = inputValue;
    const result = validateNumber(x, y, target);
    expect(result).toEqual(expectValue);
  });
});
