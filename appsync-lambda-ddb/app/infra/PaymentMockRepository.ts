import Payment from "../domain/Payment";
import PaymentRepository from "../domain/PaymentRepository";

class PaymentMockRepository implements PaymentRepository {

    public async save(payment:Payment) {
        
        return new Promise<Payment>((resolve, reject) => {

            let name = 'Dave'
       
            if (name === 'Dave') {
                resolve(payment);
            }
            else {
               reject("Error");
            }
         });
    }

    public async get(partitionkey:string, sortkey:string){ // primary key

        return new Promise();
    }


    /**
     * query items by condition
     * 
     * @param partitionkey 
     * @param sortkey 
     */

    public async query(partitionkey:string, sortkey:string){
        
    }
    
}

export default PaymentMockRepository;