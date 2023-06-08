"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modThree = void 0;
function modThree(binaryString) {
    const transitions = [
        [0, 1],
        [2, 0],
        [1, 2] // State transitions for S2
    ];
    let currentState = 0; // Initialize state as S0
    // Loop through each bit in the binary string
    for (const bit of binaryString) {
        const bitNumber = parseInt(bit);
        currentState = transitions[currentState][bitNumber]; // Determine the next state
    }
    // After processing all bits, the current state corresponds to the modulo-three result
    return currentState;
}
exports.modThree = modThree;
