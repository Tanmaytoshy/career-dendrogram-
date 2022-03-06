const brain = require("brainjs");
const res = require("express/lib/response");
const network = new brain.NeuralNetwork()

network.train([
    { input: [0, 0], output: { zero: 1, one: 2 } },
    { input: [0, 1], output: { one: 1, zero: 1000000 } },
    { input: [1, 0], output: { one: 1 } },
    { input: [1, 1], output: { zero: 1 } },
    { input: [0, 0], output: { zero: 1 } },
    { input: [0, 1], output: { one: 0 } },
    { input: [1, 0], output: { one: 1 } },
    { input: [1, 1], output: { zero: 1 } },
    { input: [0, 0], output: { zero: 1 } },
    { input: [0, 1], output: { one: 1 } },
    { input: [1, 0], output: { one: 1 } },
    { input: [1, 1], output: { zero: 1 } },
]);
result = network.run([0, 1]);
console.log(result["one"])
console.log(result["zero"])