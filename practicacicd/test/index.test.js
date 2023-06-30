const sum = require("../index");

test("suma dos números positivos", () => {
  expect(sum(1, 2)).toBe(3);
});

test("suma dos números negativos", () => {
  expect(sum(-1, -2)).toBe(-3);
});

test("suma un número positivo y un número negativo", () => {
  expect(sum(5, -3)).toBe(2);
});

test("suma cero y un número positivo", () => {
  expect(sum(0, 7)).toBe(7);
});

test("suma cero y un número negativo", () => {
  expect(sum(0, -5)).toBe(-5);
});

test("suma cero y cero", () => {
  expect(sum(0, 0)).toBe(0);
});
