import Response from './interfaces/Response';
import { AppSyncEvent } from './interfaces/AppSyncEvent.interface';
import PaymentService from '../application/PaymentService';
import { BeforePayment } from '../application/interfaces/BeforePayment.interface';

class PaymentController {
    
    paymentService:PaymentService;

    constructor() {
        this.paymentService = new PaymentService();
    }

    public async createBeforePayment(event:AppSyncEvent): Promise<Response> {
               
        console.log( "event : ", event);

        let beforePayment:BeforePayment = event.arguments.input;
        try {
            let payment = await this.paymentService.createBeforePayment(beforePayment);
            return {
                'data': payment,
                'message': "success"
                }
        }catch(err){
            throw err;
        }
    }
}
export default PaymentController;

process.env.SAMPLE_TABLE = 'appsync-lambda-ddb-PaymentTable-SLR2SSXZPOFG';

let paymentController:PaymentController = new PaymentController();
let event:AppSyncEvent = {
    arguments: {
        input : {
            partitionkey: "2",
            sortkey: "3",
            attribute1: "4",
            attribute2: "5"
        }
    },
    identity: {},
    info: {},
};

paymentController.createBeforePayment(event);