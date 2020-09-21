import Response from './interfaces/Response';
import { AwsEvent } from './interfaces/AwsEvent.interface';
import PaymentService from '../application/PaymentService';
import { BeforePayment } from '../application/interfaces/BeforePayment.interface';

class PaymentController {
    
    paymentService:PaymentService;

    constructor() {
        this.paymentService = new PaymentService();
    }

    public async createBeforePayment(event:AwsEvent): Promise<Response> {
        
        // TODO: mapping with event
        let beforePayment = new BeforePayment (
            'isheejong',
            '1',
            '2',
            '3'
        );

        
        
        console.log(" start controller: " + event);

        let result = await this.paymentService.createBeforePayment(beforePayment);
           
        console.log(" end controller: " + result.toJson ); 
        return {
                'statusCode': 200,
                'body': result
                }
        }
    }

export default PaymentController;