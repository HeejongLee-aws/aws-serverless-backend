import {
    attribute,
    hashKey,
    rangeKey,
    table
} from '@aws/dynamodb-data-mapper-annotations';

@table("Payment")
class Payment {
    
    @hashKey()
    private partitionkey:string

    @rangeKey()
    private sortkey:string

    @attribute()
    private attribute1:string

    @attribute()
    private attribute2:string

    public domainlogic(): string {
        this.attribute1 = "1";
        return this.attribute1;
    }

    public static getObject(partitionkey:string, sortkey:string, attribute1:string):Payment {
        return Object.assign(new Payment,
            {
                partitionkey: partitionkey,
                sortkey: sortkey,
                attribute1: attribute1
            }
        );
        // https://github.com/awslabs/dynamodb-data-mapper-js/issues/136
    }
    
}

export default Payment;