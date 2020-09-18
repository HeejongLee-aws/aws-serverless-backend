import Payment from "../domain/Payment";
import PaymentRepository from "../domain/PaymentRepository";

const tableName = process.env.SAMPLE_TABLE;
const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();

class PaymentDDBRepository implements PaymentRepository{

    findAll(): Array<Payment> {
        return [new Payment("000","KANG SUNG IL"),new Payment("001", "KIM JONG IL"), new Payment("002", "LEE HEE JONG")]
    }

    save(payment: Payment): Payment {
    
        console.log("save (DDB) : " + payment.toJson)

        let params = {
            TableName:tableName,
            Item:payment.toJson
        };
    
        console.log("param: ", params);
        const result =  docClient.put(params);

        return payment;
    }
    
}

export default PaymentDDBRepository;