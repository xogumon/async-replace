const asyncReplace = require("./index.js");

describe("Replacement object: search is a string", () => {
  it("should replace with a string", async () => {
    const result = await asyncReplace("Hello, world!", {
      search: "world",
      replace: "everyone",
    });
    expect(result).toBe("Hello, everyone!");
  });

  it("should replace with a function", async () => {
    const result = await asyncReplace("Hello, world!", {
      search: "world",
      replace: () => "everyone",
    });
    expect(result).toBe("Hello, everyone!");
  });

  it("should replace with a Promise", async () => {
    const result = await asyncReplace("Hello, world!", {
      search: "world",
      replace: Promise.resolve("everyone"),
    });
    expect(result).toBe("Hello, everyone!");
  });

  it("should replace with a function that returns a Promise", async () => {
    const result = await asyncReplace("Hello, world!", {
      search: "world",
      replace: () => Promise.resolve("everyone"),
    });
    expect(result).toBe("Hello, everyone!");
  });

  it("should replace with a number", async () => {
    const result = await asyncReplace("Hello, world!", {
      search: "world",
      replace: 123,
    });
    expect(result).toBe("Hello, 123!");
  });
});

describe("Replacement object: search is a RegExp", () => {
  it("should replace with a string", async () => {
    const result = await asyncReplace("Hello, world!", {
      search: /world/,
      replace: "everyone",
    });
    expect(result).toBe("Hello, everyone!");
  });

  it("should replace with a function", async () => {
    const result = await asyncReplace("Hello, world!", {
      search: /world/,
      replace: () => "everyone",
    });
    expect(result).toBe("Hello, everyone!");
  });

  it("should replace with a Promise", async () => {
    const result = await asyncReplace("Hello, world!", {
      search: /world/,
      replace: Promise.resolve("everyone"),
    });
    expect(result).toBe("Hello, everyone!");
  });

  it("should replace with a function that returns a Promise", async () => {
    const result = await asyncReplace("Hello, world!", {
      search: /world/,
      replace: () => Promise.resolve("everyone"),
    });
    expect(result).toBe("Hello, everyone!");
  });

  it("should replace with a number", async () => {
    const result = await asyncReplace("Hello, world!", {
      search: /world/,
      replace: 123,
    });
    expect(result).toBe("Hello, 123!");
  });
});

describe("Array of replacement objects: search is a string", () => {
  it("should replace multiple times with strings", async () => {
    const result = await asyncReplace("Hello, world!", [
      {
        search: "world",
        replace: "everyone",
      },
      {
        search: "Hello",
        replace: "Goodbye",
      },
    ]);
    expect(result).toBe("Goodbye, everyone!");
  });

  it("should replace multiple times with functions", async () => {
    const result = await asyncReplace("Hello, world!", [
      {
        search: "world",
        replace: () => "everyone",
      },
      {
        search: "Hello",
        replace: () => "Goodbye",
      },
    ]);
    expect(result).toBe("Goodbye, everyone!");
  });

  it("should replace multiple times with Promises", async () => {
    const result = await asyncReplace("Hello, world!", [
      {
        search: "world",
        replace: Promise.resolve("everyone"),
      },
      {
        search: "Hello",
        replace: Promise.resolve("Goodbye"),
      },
    ]);
    expect(result).toBe("Goodbye, everyone!");
  });

  it("should replace multiple times with functions that return Promises", async () => {
    const result = await asyncReplace("Hello, world!", [
      {
        search: "world",
        replace: () => Promise.resolve("everyone"),
      },
      {
        search: "Hello",
        replace: () => Promise.resolve("Goodbye"),
      },
    ]);
    expect(result).toBe("Goodbye, everyone!");
  });

  it("should replace multiple times with numbers", async () => {
    const result = await asyncReplace("Hello, world!", [
      {
        search: "world",
        replace: 123,
      },
      {
        search: "Hello",
        replace: 456,
      },
    ]);
    expect(result).toBe("456, 123!");
  });
});

describe("Array of replacement objects: search is a RegExp", () => {
  it("should replace multiple times with strings", async () => {
    const result = await asyncReplace("Hello, world!", [
      {
        search: /world/,
        replace: "everyone",
      },
      {
        search: /Hello/,
        replace: "Goodbye",
      },
    ]);
    expect(result).toBe("Goodbye, everyone!");
  });

  it("should replace multiple times with functions", async () => {
    const result = await asyncReplace("Hello, world!", [
      {
        search: /world/,
        replace: () => "everyone",
      },
      {
        search: /Hello/,
        replace: () => "Goodbye",
      },
    ]);
    expect(result).toBe("Goodbye, everyone!");
  });

  it("should replace multiple times with Promises", async () => {
    const result = await asyncReplace("Hello, world!", [
      {
        search: /world/,
        replace: Promise.resolve("everyone"),
      },
      {
        search: /Hello/,
        replace: Promise.resolve("Goodbye"),
      },
    ]);
    expect(result).toBe("Goodbye, everyone!");
  });

  it("should replace multiple times with functions that return Promises", async () => {
    const result = await asyncReplace("Hello, world!", [
      {
        search: /world/,
        replace: () => Promise.resolve("everyone"),
      },
      {
        search: /Hello/,
        replace: () => Promise.resolve("Goodbye"),
      },
    ]);
    expect(result).toBe("Goodbye, everyone!");
  });

  it("should replace multiple times with numbers", async () => {
    const result = await asyncReplace("Hello, world!", [
      {
        search: /world/,
        replace: 123,
      },
      {
        search: /Hello/,
        replace: 456,
      },
    ]);
    expect(result).toBe("456, 123!");
  });
});

describe("Array of replacement objects: search is a string or RegExp", () => {
  it("should replace multiple times with strings", async () => {
    const result = await asyncReplace("Hello, world!", [
      {
        search: "world",
        replace: "everyone",
      },
      {
        search: /Hello/,
        replace: "Goodbye",
      },
    ]);
    expect(result).toBe("Goodbye, everyone!");
  });

  it("should replace multiple times with functions", async () => {
    const result = await asyncReplace("Hello, world!", [
      {
        search: "world",
        replace: () => "everyone",
      },
      {
        search: /Hello/,
        replace: () => "Goodbye",
      },
    ]);
    expect(result).toBe("Goodbye, everyone!");
  });

  it("should replace multiple times with Promises", async () => {
    const result = await asyncReplace("Hello, world!", [
      {
        search: "world",
        replace: Promise.resolve("everyone"),
      },
      {
        search: /Hello/,
        replace: Promise.resolve("Goodbye"),
      },
    ]);
    expect(result).toBe("Goodbye, everyone!");
  });

  it("should replace multiple times with functions that return Promises", async () => {
    const result = await asyncReplace("Hello, world!", [
      {
        search: "world",
        replace: () => Promise.resolve("everyone"),
      },
      {
        search: /Hello/,
        replace: () => Promise.resolve("Goodbye"),
      },
    ]);
    expect(result).toBe("Goodbye, everyone!");
  });

  it("should replace multiple times with numbers", async () => {
    const result = await asyncReplace("Hello, world!", [
      {
        search: "world",
        replace: 123,
      },
      {
        search: /Hello/,
        replace: 456,
      },
    ]);
    expect(result).toBe("456, 123!");
  });
});
