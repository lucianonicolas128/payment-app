export class Card {
    constructor(
        public cardNumber: string,
        public cardHolder: string,
        public expirationDate: Date,
        public securityCode: string,
        public amount: number
    ){}
}