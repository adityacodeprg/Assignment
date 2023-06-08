import { modThreeFSM } from './moduloThreeFSM';

// Test the mod-three FSM
console.log(modThreeFSM.processInput("1101"));  // prints 1
console.log(modThreeFSM.processInput("1110"));  // prints 2
console.log(modThreeFSM.processInput("1111"));  // prints 0
console.log(modThreeFSM.processInput("110"));   // prints 0
console.log(modThreeFSM.processInput("1"));     // prints 1
console.log(modThreeFSM.processInput(""));      // prints 0, edge case: empty string
try {
    console.log(modThreeFSM.processInput("102"));  // Throws error: Invalid input symbol
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}
