import Payment from './Payment';
import { promises } from 'dns';

interface PaymentRepository {
   
    save(payment:Payment): Promise<Payment>;
    get(partitionkey:string, sortkey:string): Promise<Payment>;
    
}

export default PaymentRepository;