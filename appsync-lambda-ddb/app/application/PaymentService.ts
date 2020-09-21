import Payment from "../domain/Payment";
import PaymentRepository from "../domain/PaymentRepository";
import PaymentMockRepository from "../infra/PaymentMockRepository"
import PaymentDDBRepository from "../infra/PaymentDDBRepository";
import {BeforePayment} from "./interfaces/BeforePayment.interface";
import {CompletePayment} from "./interfaces/CompletePayment.interface";


class PaymentService {
    paymentRepository: PaymentRepository;

    constructor() {
        this.paymentRepository = new PaymentDDBRepository();
    }

    public async createBeforePayment(request:BeforePayment): Promise<Payment> {

        console.log("requested : ", request);
        let payment:Payment = Payment.createObject(
            request.partitionkey,
            request.sortkey,
            request.attribute1,
            request.attribute2
        );
        

        return await this.paymentRepository.save(payment);
    }

    
    public async completePayment(request:CompletePayment): Promise<Payment> {
        
        let payment:Payment = await this.paymentRepository.get(request.id, request.id);

        // change payment info
        
        // 결제수단 정보...
        //
        
        return await this.paymentRepository.save(payment);
    }
   
}

export default PaymentService;

let test:PaymentService = new PaymentService;