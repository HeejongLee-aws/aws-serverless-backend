class Payment {
    artistId:string;
    concert:string;

    constructor(artistId:string, concert:string) {
        this.artistId = artistId;
        this.concert = concert;
    }

    get toString(): string {
        return this.artistId+":"+this.artistId;
    }

    get toJson(): String {
        return JSON.stringify(this);
    }
}

export default Payment;