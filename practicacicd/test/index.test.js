test("suma dos números positivos", () => {
  const sum = require("../public/index");
  expect(sum(1, 2)).toBe(3);
});

test("suma dos números negativos", () => {
  const sum = require("../public/index");
  expect(sum(-1, -2)).toBe(-3);
});

test("suma un número positivo y un número negativo", () => {
  const sum = require("../public/index");
  expect(sum(5, -3)).toBe(2);
});

test("suma cero y un número positivo", () => {
  const sum = require("../public/index");
  expect(sum(0, 7)).toBe(7);
});

test("suma cero y un número negativo", () => {
  const sum = require("../public/index");
  expect(sum(0, -5)).toBe(-5);
});

test("suma cero y cero", () => {
  const sum = require("../public/index");
  expect(sum(0, 0)).toBe(0);
});
