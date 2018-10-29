// this file isn't transpiled, so must use CommonJS and ES5

// Register babel to transpile before our tests run.
require("babel-register")

// Disable webpack features that Mocha Doesn't understand.
// Mocha if you see this treat it as empty function
require.extensions['.css'] = function () {}

