class Payment {
    id:string;
    name:string;
    constructor(id:string, name:string) {
        this.id = id;
        this.name = name;
    }

    get toString(): string {
        return this.id+":"+this.name;
    }

    get toJson(): String {
        return JSON.stringify(this);
    }
}

export default Payment;

// let payment:Payment = new Payment("1", "이희종");
// console.log(payment.toJson);