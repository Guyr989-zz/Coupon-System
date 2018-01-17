export class Coupon {


    constructor(private id?:number, private title?: string, private startDate?: Date, private endDate?: Date, private amount?: number, private type?: string,
        private price?: number, private message?: string, private image?: string) {

    }

    get _id(): number {
        return this.id;
    }

    set _id(newId: number) {
        this.id = newId;
    }

    get _title(): string {
        return this.title;
    }

    set _title(newTitle: string) {
        this.title = newTitle;
    }

    get _type():string {
        return this.type;
    }

    set _type(newType: string) {
        this.type = newType;
    }

    get _startDate() {
        return this.startDate;
    }
    set _StartDate(newStartDate: Date) {
        this.startDate = newStartDate;
    }

    get _endDate() {
        return this.endDate;
    }

    set _endDate(newEndDate: Date) {
        this.endDate = newEndDate;
    }

    get _amount() {
        return this.amount;
    }

    set _amount(newAmount: number) {
        this.amount = newAmount;
    }

    get _price() {
        return this.price;
    }

    set _price(newPrice: number) {
        this.price = newPrice;
    }


    get _message() {
        return this.message;
    }

    set _message(newMessage: string) {
        this.message = newMessage;
    }

    get _image(): string {
        return this.image;
    }

    set _image(newImage: string) {
        this.image = newImage;
    }

}