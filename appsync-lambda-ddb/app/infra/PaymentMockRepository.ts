import Payment from "../domain/Payment";
import PaymentRepository from "../domain/PaymentRepository";

class PaymentDDBRepository implements PaymentRepository{

    findAll(): Array<Payment> {
        return [new Payment("000","KANG SUNG IL"),new Payment("001", "KIM JONG IL"), new Payment("002", "LEE HEE JONG")]
    }

    save(payment: Payment): Payment {
        return payment;
    }
    
}

export default PaymentDDBRepository;