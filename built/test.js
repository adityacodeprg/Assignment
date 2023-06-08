"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moduloThreeFSM_1 = require("./moduloThreeFSM");
// Test the mod-three FSM
console.log(moduloThreeFSM_1.modThreeFSM.processInput("1101")); // prints 1
console.log(moduloThreeFSM_1.modThreeFSM.processInput("1110")); // prints 2
console.log(moduloThreeFSM_1.modThreeFSM.processInput("1111")); // prints 0
console.log(moduloThreeFSM_1.modThreeFSM.processInput("110")); // prints 0
console.log(moduloThreeFSM_1.modThreeFSM.processInput("1")); // prints 1
console.log(moduloThreeFSM_1.modThreeFSM.processInput("")); // prints 0, edge case: empty string
try {
    console.log(moduloThreeFSM_1.modThreeFSM.processInput("102")); // Throws error: Invalid input symbol
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}
