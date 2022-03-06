const brain = require("brainjs");
const res = require("express/lib/response");
const network = new brain.NeuralNetwork()

// network.train([
//     { input: [0, 0], output: { zero: 1 } },
//     { input: [0, 1], output: { one: 1 } },
//     { input: [1, 0], output: { one: 1 } },
//     { input: [1, 1], output: { zero: 1 } },
//     { input: [0, 0], output: { zero: 1 } },
//     { input: [0, 1], output: { one: 1 } },
//     { input: [1, 0], output: { one: 1 } },
//     { input: [1, 1], output: { zero: 1 } },
//     { input: [0, 0], output: { zero: 1 } },
//     { input: [0, 1], output: { one: 1 } },
//     { input: [1, 0], output: { one: 1 } },
//     { input: [1, 1], output: { zero: 1 } },
// ]);
// result = network.run([1, 1]);
// console.log(result["one"])
// console.log(result["one"])
// console.log(result["zero"])


const data = {
    computer: 1,
    coding: 2,
    networking: 3,
    circuits: 4,
    development: 5,
    coding: 6,
    mechanics: 7,
    hardware: 8,
    construction: 9,
    electronics: 10,
    civil: 11
}
network.train([
    { input: [1, 2], output: { mba: 0, cse: 100, it: 80, ece: 50, eee: 0, mech: 10, civil: 0 } },
    { input: [1, 3], output: { mba: 0, cse: 100, it: 80, ece: 70, eee: 10, mech: 10, civil: 0 } },
    { input: [1, 4], output: { mba: 0, cse: 80, it: 60, ece: 90, eee: 20, mech: 20, civil: 0 } },
    { input: [1, 4], output: { mba: 80, cse: 100, it: 80, ece: 50, eee: 30, mech: 0, civil: 0 } },
    { input: [10, 2], output: { mba: 30, cse: 50, it: 40, ece: 100, eee: 80, mech: 0, civil: 0 } },
    { input: [10, 7], output: { mba: 30, cse: 20, it: 10, ece: 100, eee: 80, mech: 60, civil: 0 } },
    { input: [7, 8], output: { mba: 20, cse: 20, it: 10, ece: 100, eee: 80, mech: 100, civil: 20 } },
    { input: [7, 9], output: { mba: 30, cse: 10, it: 10, ece: 50, eee: 60, mech: 100, civil: 90 } },
    { input: [9, 11], output: { mba: 20, cse: 0, it: 0, ece: 30, eee: 20, mech: 40, civil: 100 } },
    { input: [1, 6], output: { mba: 0, cse: 100, it: 80, ece: 50, eee: 0, mech: 10, civil: 0 } },
    { input: [1, 3], output: { mba: 0, cse: 100, it: 80, ece: 70, eee: 10, mech: 10, civil: 0 } },
    { input: [1, 4], output: { mba: 0, cse: 80, it: 60, ece: 90, eee: 20, mech: 20, civil: 0 } },
    { input: [1, 4], output: { mba: 80, cse: 100, it: 80, ece: 50, eee: 30, mech: 0, civil: 0 } },
    { input: [10, 2], output: { mba: 30, cse: 50, it: 40, ece: 100, eee: 80, mech: 0, civil: 0 } },
    { input: [10, 7], output: { mba: 30, cse: 20, it: 10, ece: 100, eee: 80, mech: 60, civil: 0 } },
    { input: [7, 8], output: { mba: 20, cse: 20, it: 10, ece: 100, eee: 80, mech: 100, civil: 20 } },
    { input: [7, 9], output: { mba: 30, cse: 10, it: 10, ece: 50, eee: 60, mech: 100, civil: 90 } },
    { input: [9, 11], output: { mba: 20, cse: 0, it: 0, ece: 30, eee: 20, mech: 40, civil: 100 } },
])

result = network.run([1, 3]);
console.log(result["mba"]);
console.log(result["it"]);
console.log(result["ece"]);
console.log(result["eee"]);
console.log(result["mech"]);
console.log(result["civil"]);