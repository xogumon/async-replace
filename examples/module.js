const asyncReplace = require("../index.js");

asyncReplace("Hello, world! Hellx, universe!", {
  search: /Hell([a-z]+), ([a-z]+)/g,
  replace: new Promise((resolve) =>
    setTimeout(
      () =>
        resolve((...g) => {
          return `Bye, ${g[2].toUpperCase()}!`;
        }),
      1000
    )
  ),
}).then((result) => console.log(result)); // Bye, WORLD! Bye, UNIVERSE!

asyncReplace("Hello, world! Hello, universe!", {
  search: /Hell([a-z]+), ([a-z]+)/g,
  replace: (...g) => {
    return new Promise((resolve) => setTimeout(() => resolve(`Kappa, ${g[2]}!`), 1000));
  },
}).then((result) => console.log(result)); // Kappa, world! Kappa, universe!

asyncReplace("Hello, world! Hello, universe!", {
  search: /Hell([a-z]+), ([a-z]+)/g,
  replace: () => {
    return new Promise((resolve) => setTimeout((...g) => resolve(`Keepo, ${g[2]}!`), 1000));
  },
}).then((result) => console.log(result)); // This one doesn't work because setTimeout doesn't pass the arguments to the callback
