export interface IRemitPayment {
    linkvaulturl: string,
    account_bank: string,
    account_number: string,
    amount: number,
    currency: string,
    narration: string,
    debit_currency: string,
}

export interface IBillPayment {
    country: string,
    customer: string,
    amount: number,
    amount_paid: number,
    recurrence: string,
    type: string,
    reference: string,
}