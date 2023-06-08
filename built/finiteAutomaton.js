"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finiteAutomaton = void 0;
class finiteAutomaton {
    constructor(initialState, transitions, finalStates) {
        this.currentState = initialState;
        this.transitions = transitions;
        this.finalStates = finalStates;
    }
    processInput(input) {
        for (const symbol of input) {
            if (!this.transitions[this.currentState] || !this.transitions[this.currentState][symbol]) {
                throw new Error(`Invalid state or input symbol: ${this.currentState}, ${symbol}`);
            }
            this.currentState = this.transitions[this.currentState][symbol];
        }
        return this.finalStates[this.currentState];
    }
}
exports.finiteAutomaton = finiteAutomaton;
