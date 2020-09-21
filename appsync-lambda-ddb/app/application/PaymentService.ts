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

    public createBeforePayment(request:BeforePayment): Payment {

        let payment:Payment = Payment.createObject(
            request.getPartitionkey,
            request.getSortkey,
            request.getAttribute1,
            request.getAttribute2
        );
        
        let result:Payment = new Payment();
        this.paymentRepository.save(payment).then( payment => {
            result = payment;
        });
        return result;
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