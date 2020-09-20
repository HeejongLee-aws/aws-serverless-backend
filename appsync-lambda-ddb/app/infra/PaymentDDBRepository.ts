import Payment from "../domain/Payment";
import PaymentRepository from "../domain/PaymentRepository";
import * as AWS from 'aws-sdk';

if( !AWS.config.region ) { AWS.config.update({ region: 'ap-northeast-2'  });}

class PaymentDDBRepository implements PaymentRepository{

    private tableName:string = String(process.env.SAMPLE_TABLE);
    private docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
    
    constructor(){
        if(!process.env.SAMPLE_TABLE){
            this.tableName = 'SampleServerlessBackend-SampleTable-1VTS6WSOHHPMS';;
        }
    }

    findAll(): Array<Payment> {
        return [new Payment("000","KANG SUNG IL"),new Payment("001", "KIM JONG IL"), new Payment("002", "LEE HEE JONG")]
    }

    // save(payment: Payment): Payment {
    
    //     console.log("save (DDB) : " + payment.toJson)

    //     let params = {
    //         TableName:this.tableName,
    //         Item:payment.toJson
    //     };
    
    //     console.log("param: ", params);
    //     const result =  this.docClient.put(params);

    //     return payment;
    // }
    
    async getConcertsByArtistId(artistId:string){

        let params = {
            TableName : this.tableName,
            KeyConditionExpression: "#artistId = :artistId",
            ExpressionAttributeNames:{
                "#artistId": "ArtistId"
            },
            ExpressionAttributeValues: {
                ":artistId": artistId
            }
        };
    
        try {

            const data = await this.docClient.query(params).promise();
            const items = data.Items;

            let payments: Array<Payment> = new Array<Payment>();

            items?.forEach (value => {
               payments.push(new Payment("aa","aa"));
            });
            console.log(payments);
           
            return data;
        }catch(err){
            throw err;
        }
        
    }

}

export default PaymentDDBRepository;

let test:PaymentDDBRepository = new PaymentDDBRepository();
test.getConcertsByArtistId("희종일").then( value => {
  console.log(value);
}).catch(err => {
    console.log("error : " + err);
})   