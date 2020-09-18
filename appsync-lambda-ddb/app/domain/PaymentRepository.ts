import Payment from './Payment';

interface PaymentRepository {
    findAll(): Array<Payment>;
    save(payment:Payment): Payment;
}

export default PaymentRepository;