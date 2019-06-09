
export class Booking{
    public dateTo: string;
    public dateFrom: string;
    public userId: number;
    public propertyId: number;
    public id: number;


    constructor(){
        this.id = 0;
        this.propertyId = 0;
        this.userId = 0;
        this.dateTo = "";
        this.dateFrom = "";
    }
}

