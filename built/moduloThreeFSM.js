"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modThreeFSM = void 0;
const finiteAutomaton_1 = require("./finiteAutomaton");
const modThreeTransitions = {
    "S0": { "0": "S0", "1": "S1" },
    "S1": { "0": "S2", "1": "S0" },
    "S2": { "0": "S1", "1": "S2" }
};
const modThreeFinalStates = {
    "S0": 0,
    "S1": 1,
    "S2": 2
};
exports.modThreeFSM = new finiteAutomaton_1.finiteAutomaton("S0", modThreeTransitions, modThreeFinalStates);
