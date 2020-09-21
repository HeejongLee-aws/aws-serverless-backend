export interface BeforePayment {
    partitionkey:string
    sortkey:string
    attribute1:string
    attribute2:string

    // constructor(partitionkey:string,
    //     sortkey:string,
    //     attribute1:string,
    //     attribute2:string)
    //     {
    //         this.partitionkey = partitionkey;
    //         this.sortkey = sortkey;
    //         this.attribute1 = attribute1;
    //         this.attribute2 = attribute2;
    //     }
    // get getPartitionkey():string {
    //     return this.partitionkey;
    // }

    // get getSortkey():string {
    //     return this.partitionkey;
    // }

    // get getAttribute1():string {
    //     return this.attribute1;
    // }

    // get getAttribute2():string {
    //     return this.attribute2;
    // }



}