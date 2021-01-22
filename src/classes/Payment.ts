import { HasFormatter } from '../Interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
    readonly client: string;
    private details: string;
    public amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `$(this.client) owes $ $(this.amount) for $(this.details)`;
    }
}