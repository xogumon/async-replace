const asyncReplace = require("./index.js");

test("Hello, world!", async () => {
  expect(
    await asyncReplace("Hello, world!", [
      {
        search: "Hello",
        replace: "Goodbye",
      },
      {
        search: "world",
        replace: "planet",
      },
    ])
  ).toBe("Goodbye, planet!");
});

test("Replace with Promise", async () => {
  expect(
    await asyncReplace("Hello, world!", {
      search: "world",
      replace: Promise.resolve("planet"),
    })
  ).toBe("Hello, planet!");
});

test("Replace with async function", async () => {
  expect(
    await asyncReplace("Hello, world!", {
      search: "world",
      replace: async () => "planet",
    })
  ).toBe("Hello, planet!");
});

test("Replace with async function that returns a Promise", async () => {
  expect(
    await asyncReplace("Hello, world!", {
      search: "world",
      replace: async () => Promise.resolve("planet"),
    })
  ).toBe("Hello, planet!");
});

test("Replace with async function that returns a Promise that resolves to a Promise", async () => {
  expect(
    await asyncReplace("Hello, world!", {
      search: "world",
      replace: async () => Promise.resolve(Promise.resolve("planet")),
    })
  ).toBe("Hello, planet!");
});

test("Replace with numbers", async () => {
  expect(
    await asyncReplace("Hello, world!", {
      search: "world",
      replace: 123,
    })
  ).toBe("Hello, 123!");
});
