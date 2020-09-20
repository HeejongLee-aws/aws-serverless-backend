import {
    attribute,
    hashKey,
    rangeKey,
    table,
} from '@aws/dynamodb-data-mapper-annotations';

@table('Payment')
class Payment {
    
    @hashKey()
    partitionKey:string

    @rangeKey()
    sortKey:string

    @attribute()
    title:string


    constructor(partitionKey:string, sortKey:string, title:string) {
        this.partitionKey = partitionKey;
        this.sortKey = sortKey;
        this.title = title;
    }


    get toJson(): String {
        return JSON.stringify(this);
    }
}

export default Payment;