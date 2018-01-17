export class Coupon {

    constructor(private _id: number, private _title: string, private _startDate: Date, private _endDate: Date, private _amount: number, private _type: string,
        private _price: number, private _message: string, private _image: string) {

    }

    get id(): number {
        return this._id;
    }

    set id(newId: number) {
        this._id = newId;
    }

    get title(): string {
        return this._title;
    }

    set title(newTitle: string) {
        this._title = newTitle;
    }

    get startDate() {
        return this._startDate;
    }
    set StartDate(newStartDate: Date) {
        this._startDate = newStartDate;
    }

    get endDate() {
        return this._endDate;
    }

    set endDate(newEndDate: Date) {
        this._endDate = newEndDate;
    }

    get amount() {
        return this._amount;
    }

    set amount(newAmount: number) {
        this._amount = newAmount;
    }

    get price() {
        return this._price;
    }

    set price(newPrice: number) {
        this._price = newPrice;
    }


    get message() {
        return this._message;
    }

    set message(newMessage: string) {
        this._message = newMessage;
    }
    
    get image(): string {
        return this._image;
    }

    set image(newImage: string) {
        this._image = newImage;
    }


}