export function modThree(binaryString: string): number {
    const transitions = [
        [0, 1],  // State transitions for S0
        [2, 0],  // State transitions for S1
        [1, 2]   // State transitions for S2
    ];

    let currentState = 0;  // Initialize state as S0

    // Loop through each bit in the binary string
    for (const bit of binaryString) {
        const bitNumber = parseInt(bit);
        currentState = transitions[currentState][bitNumber];  // Determine the next state
    }

    // After processing all bits, the current state corresponds to the modulo-three result
    return currentState;
}
