import Payment from "../domain/Payment";
import PaymentRepository from "../domain/PaymentRepository";
import * as AWS from 'aws-sdk';
import {DataMapper, QueryOptions} from '@aws/dynamodb-data-mapper';
import { 
    AttributePath,FunctionExpression,
    UpdateExpression,
    ConditionExpression,
    ConditionExpressionPredicate,
    ContainsPredicate,
    between,
    beginsWith
} from '@aws/dynamodb-expressions';

// https://aws.amazon.com/ko/blogs/developer/introducing-the-amazon-dynamodb-datamapper-for-javascript-developer-preview/
// https://github.com/awslabs/dynamodb-data-mapper-js/tree/master/packages/dynamodb-data-mapper
class PaymentDDBRepository implements PaymentRepository{

    private mapper:DataMapper = new DataMapper({
        client: new AWS.DynamoDB({region: 'ap-northeast-2'})
    });
    
    constructor(){
    }

    public async save(payment:Payment) {
        return this.mapper.put(payment);
    }

    /**
     * 
     * @param partitionkey 
     * @param sortkey 
     */
    public async get(partitionkey:string, sortkey:string){ // primary key

        const toGet = Object.assign(new Payment, 
            {
                partitionkey: partitionkey,
                sortkey: sortkey
            });
        return await this.mapper.get(toGet);
    }


    /**
     * 
     * @param partitionkey 
     * @param sortkey 
     */

    public async query(partitionkey:string, sortkey:string){
        
        let containsCondition: ConditionExpressionPredicate = {
            name:'contains',
            expected: '4',
            type: 'Function'
        };
        
        const iterator = this.mapper.query(
            Payment, 
            {     // key condition  (partitionkey, range key you can use expression ( beginwith, between.. and so on))
                partitionkey: partitionkey, 
                sortkey: beginsWith(sortkey)
            }
            ,{
                limit: 1
            }
        );    

        for await (const record of iterator) {
            console.log(record, iterator.count, iterator.scannedCount);
        }
    }

}
export default PaymentDDBRepository;

let test:PaymentDDBRepository = new PaymentDDBRepository();

test.save(Payment.getObject("isheejong", "2020-09-20#1", "강좌1"));
test.save(Payment.getObject("isheejong", "2020-09-20#2", "강좌1"));
test.save(Payment.getObject("isheejong", "2020-09-20#3", "강좌2"));
test.save(Payment.getObject("isheejong", "2020-09-20#4", "강좌2"));
test.save(Payment.getObject("isheejong", "2020-09-20#5", "강좌3"));
test.save(Payment.getObject("isheejong", "2020-09-20#6", "강좌4"));
test.save(Payment.getObject("isheejong", "2020-09-20#7", "강좌4"));
test.save(Payment.getObject("isheejong", "2020-09-21#1", "강좌4"));
test.save(Payment.getObject("isheejong", "2020-09-21#2", "강좌4"));

// test.save("isheejong", "2020-09-20#1", "강좌1");
// test.save("isheejong", "2020-09-20#1", "강좌2");
// test.save("isheejong", "2020-09-20#2", "강좌3");
// test.save("isheejong", "2020-09-20#2", "강좌4");
// test.save("isheejong", "2020-09-20#3", "강좌5");
// test.save("isheejong", "2020-09-20#3", "강좌6");

test.query("isheejong", "2020-09-21");