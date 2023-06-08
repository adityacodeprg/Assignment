export class finiteAutomaton {
    private currentState: string;
    private transitions: {[key: string]: {[key: string]: string}};
    private finalStates: {[key: string]: number};

    constructor(
        initialState: string,
        transitions: {[key: string]: {[key: string]: string}},
        finalStates: {[key: string]: number}
    ) {
        this.currentState = initialState;
        this.transitions = transitions;
        this.finalStates = finalStates;
    }

    processInput(input: string): number | undefined {
        for (const symbol of input) {
            if (!this.transitions[this.currentState] || !this.transitions[this.currentState][symbol]) {
                throw new Error(`Invalid state or input symbol: ${this.currentState}, ${symbol}`);
            }
            this.currentState = this.transitions[this.currentState][symbol];
        }
        return this.finalStates[this.currentState];
    }
}
