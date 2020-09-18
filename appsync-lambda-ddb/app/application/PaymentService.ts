import Payment from "../domain/Payment";
import PaymentRepository from "../domain/PaymentRepository";
import PaymentMockRepository from "../infra/PaymentMockRepository"

class PaymentService {
    paymentRepository: PaymentRepository;

    constructor() {
        this.paymentRepository = new PaymentMockRepository();
    }

    public createPayment(path: string): string {
        let payment: Payment = this.paymentRepository.save(new Payment("001", "KIM JONG IL"));
        return payment.toString;
    }

    public listPayment(path: string): string {
        let paymentList: Array<Payment> = this.paymentRepository.findAll();
        let paymentString: string = "";
        paymentList.forEach(payment => { 
            paymentString+= payment.toString + " "; 
            console.log(paymentString)});
        return paymentString;
    }
}

export default PaymentService;