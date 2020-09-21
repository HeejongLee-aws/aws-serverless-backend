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

/**
 * 
 * https://aws.amazon.com/ko/blogs/developer/introducing-the-amazon-dynamodb-datamapper-for-javascript-developer-preview/
 * https://github.com/awslabs/dynamodb-data-mapper-js/tree/master/packages/dynamodb-data-mapper
 * https://awslabs.github.io/dynamodb-data-mapper-js/packages/dynamodb-expressions/
 * 
 */
class PaymentDDBRepository implements PaymentRepository{

    private mapper:DataMapper = new DataMapper({
        client: new AWS.DynamoDB({region: 'ap-northeast-2'})
    });
    
    constructor(){
    }

    public async save(payment:Payment) {
        return await this.mapper.put(payment);
    }

    public async get(partitionkey:string, sortkey:string){ // primary key

        const toGet = Object.assign(new Payment, 
            {
                partitionkey: partitionkey,
                sortkey: sortkey
            });
        return await this.mapper.get(toGet);
    }


    /**
     * query items by condition
     * 
     * @param partitionkey 
     * @param sortkey 
     */
    public async query(partitionkey:string, sortkey:string){
        const iterator = this.mapper.query(
            Payment, 
            {   // key condition - (partitionkey, range key you can use expression ( beginwith, between.. and so on))
                partitionkey: partitionkey, 
                sortkey: beginsWith(sortkey)
            }
        );    
        for await (const record of iterator) {
            console.log(record, iterator.count, iterator.scannedCount);
        }
    }

}
export default PaymentDDBRepository;

// let test:PaymentDDBRepository = new PaymentDDBRepository();

// console.log("save")
// // let item = await test.save(Payment.getObject("isheejong", "2020-09-21#1", "강좌1"));


// console.log("end save");

// test.query("isheejong", "2020-09-21");