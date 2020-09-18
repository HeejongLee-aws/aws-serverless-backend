import Response from './interfaces/Response';
import { AwsEvent } from './interfaces/AwsEvent.interface';
import PaymentService from '../application/PaymentService';

class PaymentController {
    
    paymentService:PaymentService;

    constructor() {
        this.paymentService = new PaymentService();
    }

    // 결제생성요청
    public requestCreatePayment(event:AwsEvent): Response {
        
        let path = event.path;
        let result:string=this.paymentService.createPayment(path);

        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        }
    }


    // 결제 완료
    public completePayment(event:AwsEvent): Response {
        let path = event.path;
        let result:string=this.paymentService.createPayment(path);

        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        }
    }
    
    // 포인트 적립
    public accumulatePoints(event:AwsEvent): Response {
        let path = event.path;
        let result:string=this.paymentService.createPayment(path);

        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        }
    }

    // 포인트 사용
    public usePoints(event:AwsEvent): Response {
        let path = event.path;
        let result:string=this.artistService.createPayment(path);

        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            }) 
        }
    }

    // 수강좌석 해제
    public releasetSeat(event:AwsEvent): Response {
        let path = event.path;
        let result:string=this.paymentService.createPayment(path);

        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        } 
    }


    // 수강좌석 예약
    public reserveSeat(event:AwsEvent): Response {
        let path = event.path;
        let result:string=this.paymentService.createPayment(path);

        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        }
    }
}

export default PaymentController;
