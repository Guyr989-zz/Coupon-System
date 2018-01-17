import { Coupon } from './Coupon';
export class Company {


    constructor(private compName: string, private password: string, private email: string, private coupons ?: Coupon[], private id?: number) {

    }

    //    public id:number;
    //    public name:string;
    //    public password:string;
    //    public email:string;

    get _id(): number {
        return this._id;
    }

    set _id(newId: number) {
        this._id = newId;
    }

    get _compName(): string {
        return this.compName;
    }

    set _compName(newCustName: string) {
        this.compName = newCustName;
    }

    get _Password(): string {
        return this.password;
    }

    set _Password(newPassword: string) {
        this.password = newPassword;
    }

    get _email() {
        return this.email;
    }

    set _email(newEmail: string) {
        this.email = newEmail;
    }
    get _coupons() {
        return this.coupons;
    }

    set _coupons(newCoupons: Coupon[]) {
        this.coupons = newCoupons;
    }
}