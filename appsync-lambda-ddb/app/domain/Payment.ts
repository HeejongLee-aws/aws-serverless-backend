import {
    attribute,
    hashKey,
    rangeKey,
    table
} from '@aws/dynamodb-data-mapper-annotations';

@table('appsync-lambda-ddb-PaymentTable-SLR2SSXZPOFG')
class Payment {
    
    @hashKey()
    private partitionkey:string

    @rangeKey()
    private sortkey:string

    @attribute()
    private attribute1:string

    @attribute()
    private attribute2:string

    /**
     * 
     */
    public domainlogic(): string {
        this.attribute1 = "1";
        return this.attribute1;
    }

    get toJson(): string {
        return JSON.stringify(this);
    }

    /**
     * 
     * https://github.com/awslabs/dynamodb-data-mapper-js/issues/136
     * @param partitionkey 
     * @param sortkey 
     * @param attribute1 
     */
    public static createObject(partitionkey:string, sortkey:string, attribute1:string, attribute2:string):Payment {
        return Object.assign(new Payment,
            {
                partitionkey: partitionkey,
                sortkey: sortkey,
                attribute1: attribute1,
                attribute2: attribute2
            }
        );
    }
    
}

export default Payment;