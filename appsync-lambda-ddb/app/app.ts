import PaymentController from './controller/PaymentController';
import Response from './controller/interfaces/Response';

let paymentController = new PaymentController();

exports.lambdaHandler = async (event, context) => {
    console.info('received:', event);
    console.info('context:', context);
    
    let response ;

    if( event.info.fieldName == 'createBeforePaymemt' ){
        
        let result:Response = await paymentController.createBeforePayment(event);
        response = result.body;

    } else {
        console.log("does not exist the mapping fieldName");
        response = 'does not exist the mapping fieldName';
    }

    return response;
}

