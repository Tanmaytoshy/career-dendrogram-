const brain = require("brainjs");
const res = require("express/lib/response");
const network = new brain.NeuralNetwork()



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
    civil: 11,
    Journalism: 12,
    Sociology: 13,
    Teaching: 14,
    Accounting: 15,
    Literature: 16,
    marketing: 17,
    viscom: 18,
    physics: 19,
    chemistry: 20,
    mathematics: 21,
    FashionDesigning: 22,
    Economics: 23,
    History: 24,
    Psychology: 25,
    English: 26,
    Sociology: 27,
    Philosophy: 28,
    PoliticalScience: 29,
    Geography: 30,
    Mathematics: 31,
    Anthropology: 32,
    Archaeology: 33,
    EnglishLiterature: 34,
    Biology: 35,
    Biochemistry: 36,
    Cardiology: 37,
    Climatology: 38,
    Neurology: 39,
    Zoology: 40,
    Pharmacology: 41,
    Seismology: 42,
    Journalism: 43,
    Architecture: 44,
    Agriculture: 45,
    Law: 46,
    Business: 47,
    OrganicChemistry: 48,
    Cybersecurity: 49,
    Statistics: 50,
    EnvironmentalScience: 51,
    Nursing: 52,
    BiomedicalScience: 53,
    PhysicalEducation: 54,
    Communication: 55,
    ChemicalEngineering: 56,
    Veterinary: 57,
    Pharmacy: 58,
    Forensics: 59,
    PetroleumEngineering: 60,
    FoodScience: 61,
    Dentist: 62,
    Author: 63,
    CostumeDesign: 64,
    HotelManagement: 65,
    MetallurgicalScience: 66

}

network.train([
    { input: [1, 2], output: { mba: 0, cse: 1000, it: 80, ece: 50, eee: 0, mech: 10, civil: 0 } },
    { input: [1, 3], output: { mba: 0, cse: 1000, it: 80, ece: 70, eee: 10, mech: 10, civil: 0 } },
    { input: [1, 4], output: { mba: 0, cse: 800, it: 600, ece: 900, eee: 200, mech: 200, civil: 0 } },
    { input: [1, 4], output: { mba: 800, cse: 1000, it: 800, ece: 500, eee: 300, mech: 0, civil: 0 } },
    { input: [10, 2], output: { mba: 300, cse: 500, it: 400, ece: 1000, eee: 800, mech: 0, civil: 0 } },
    { input: [10, 7], output: { mba: 300, cse: 200, it: 100, ece: 1000, eee: 800, mech: 600, civil: 0 } },
    { input: [7, 8], output: { mba: 200, cse: 200, it: 100, ece: 100, eee: 80, mech: 100, civil: 200 } },
    { input: [7, 9], output: { mba: 300, cse: 100, it: 100, ece: 500, eee: 600, mech: 1000, civil: 900 } },
    { input: [9, 11], output: { mba: 200, cse: 0, it: 0, ece: 300, eee: 200, mech: 400, civil: 1000 } },
    { input: [1, 6], output: { mba: 0, cse: 1000, it: 800, ece: 500, eee: 0, mech: 100, civil: 0 } },
    { input: [1, 3], output: { mba: 0, cse: 1000, it: 800, ece: 700, eee: 100, mech: 100, civil: 0 } },
    { input: [1, 4], output: { mba: 0, cse: 800, it: 600, ece: 900, eee: 200, mech: 200, civil: 0 } },
    { input: [1, 4], output: { mba: 800, cse: 1000, it: 800, ece: 500, eee: 300, mech: 0, civil: 0 } },
    { input: [10, 2], output: { mba: 300, cse: 500, it: 400, ece: 1000, eee: 800, mech: 0, civil: 0 } },
    { input: [10, 7], output: { mba: 300, cse: 200, it: 100, ece: 1000, eee: 800, mech: 600, civil: 0 } },
    { input: [7, 8], output: { mba: 200, cse: 200, it: 100, ece: 1000, eee: 800, mech: 1000, civil: 200 } },
    { input: [7, 9], output: { mba: 300, cse: 100, it: 100, ece: 500, eee: 600, mech: 1000, civil: 900 } },
    { input: [9, 11], output: { mba: 200, cse: 0, it: 0, ece: 300, eee: 200, mech: 400, civil: 1000 } },
    { input: [12, 15], output: { BCA: 0, BSc: 1000, BCom: 800, MSc: 500, MCom: 0, BPhill: 100, MPhill: 0 } },
    { input: [16, 17], output: { BCA: 250, BSc: 100, BCom: 450, MSc: 550, MCom: 1000, BPhill: 600, MPhill: 650 } },
    { input: [18, 14], output: { BCA: 300, BSc: 1000, BCom: 850, MSc: 950, MCom: 550, BPhill: 750, MPhill: 500 } },
    { input: [17, 13], output: { BCA: 600, BSc: 100, BCom: 900, MSc: 450, MCom: 0, BPhill: 700, MPhill: 1000 } },
    { input: [17, 12], output: { BCA: 100, BSc: 1100, BCom: 800, MSc: 550, MCom: 650, BPhill: 800, Phill: 0 } },
    { input: [15, 19], output: { BCA: 1200, BSc: 1000, BCom: 350, MSc: 550, MCom: 700, BPhill: 600, MPhill: 800 } },
    { input: [12, 15], output: { BCA: 0, BSc: 1000, BCom: 880, MSc: 650, MCom: 0, BPhill: 750, MPhill: 100 } },
    { input: [16, 17], output: { BCA: 250, BSc: 550, BCom: 450, MSc: 550, MCom: 1000, BPhill: 0, MPhill: 0 } },
    { input: [18, 14], output: { BCA: 350, BSc: 1000, BCom: 850, MSc: 950, MCom: 550, BPhill: 1000, MPhill: 0 } },
    { input: [17, 13], output: { BCA: 650, BSc: 550, BCom: 0, MSc: 450, MCom: 0, BPhill: 750, MPhill: 1000 } },
    { input: [17, 12], output: { BCA: 1000, BSc: 310, BCom: 850, MSc: 550, MCom: 650, BPhill: 880, MPhill: 0 } },
    { input: [15, 19], output: { BCA: 150, BSc: 1000, BCom: 350, MSc: 550, MCom: 750, BPhill: 650, MPhill: 0 } },
    { input: [12, 16], output: { BCA: 450, BSc: 1000, BCom: 850, MSc: 550, MCom: 600, BPhill: 1000, MPhill: 0 } },
    { input: [15, 16], output: { BCA: 1000, BSc: 1000, BCom: 550, MSc: 550, MCom: 750, BPhill: 0, MPhill: 0 } },
    { input: [12, 18], output: { BCA: 1000, BSc: 600, BCom: 850, MSc: 550, MCom: 450, BPhill: 150, MPhill: 0 } },
    { input: [15, 20], output: { BCA: 150, BSc: 700, BCom: 580, MSc: 850, MCom: 450, BPhill: 0, MPhill: 0 } },
    { input: [20, 22], output: { BCA: 800, BSc: 900, BCom: 950, MSc: 0, MCom: 750, BPhill: 0, MPhill: 1000 } },
    { input: [14, 16], output: { BCA: 450, BSc: 0, BCom: 650, MSc: 750, MCom: 750, BPhill: 1000, MPhill: 0 } },
    { input: [19, 12], output: { BCA: 550, BSc: 600, BCom: 650, MSc: 650, MCom: 540, BPhill: 0, MPhill: 1000 } },
    { input: [22, 12], output: { BCA: 550, BSc: 490, BCom: 650, MSc: 250, MCom: 1000, BPhill: 0, MPhill: 780 } },
    { input: [13, 17], output: { BCA: 600, BSc: 800, BCom: 350, MSc: 450, MCom: 0, BPhill: 0, MPhill: 1000 } },
    { input: [20, 13], output: { BCA: 0, BSc: 700, BCom: 950, MSc: 580, MCom: 0, BPhill: 600, MPhill: 540 } },
    { input: [15, 16], output: { BCA: 1000, BSc: 1000, BCom: 550, MSc: 550, MCom: 750, BPhill: 0, MPhill: 0 } },
    { input: [12, 15], output: { BCA: 0, BSc: 630, BCom: 950, MSc: 0, MCom: 750, BPhill: 0, MPhill: 1000 } },
    { input: [21, 18], output: { BCA: 0, BSc: 650, BCom: 0, MSc: 450, MCom: 540, BPhill: 1000, MPhill: 500 } },
    { input: [16, 18], output: { BCA: 800, BSc: 670, BCom: 0, MSc: 550, MCom: 1000, BPhill: 1000, MPhill: 340 } },
    { input: [19, 22], output: { BCA: 100, BSc: 600, BCom: 0, MSc: 650, MCom: 780, BPhill: 0, MPhill: 1000 } },
    { input: [14, 17], output: { BCA: 500, BSc: 1000, BCom: 750, MSc: 100, MCom: 750, BPhill: 0, MPhill: 0 } },
    { input: [17, 15], output: { BCA: 500, BSc: 700, BCom: 650, MSc: 550, MCom: 770, BPhill: 490, MPhill: 1000 } }

])

result = network.run([17, 3]);
console.log(result["cse"]);
console.log(result["it"]);
console.log(result["ece"]);
console.log(result["eee"]);
console.log(result["mech"]);
console.log(result["civil"]);

result2 = network.run([17, 13]);
console.log(result2["BCA"]);
console.log(result2["BSc"]);
console.log(result2["BCom"]);
console.log(result2["MSc"]);
console.log(result2["MCom"]);
console.log(result2["BPhill"]);
console.log(result2["MPhill"]);
console.log(result2["Phill"]);