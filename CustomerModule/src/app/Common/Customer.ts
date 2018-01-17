import { Coupon } from "./Coupon";

export class Customer {

    constructor(private id?: number, private custName?: string, private password?: string, private coupons?: Coupon[]) {

    }

    get _Id(): number {
        return this.id;
    }

    set _Id(newId: number) {
        this.id = newId;
    }

    get _CustName(): string {
        return this.custName;
    }

    set _CustName(newCustName: string) {
        this.custName = newCustName;
    }

    get _Password(): string {
        return this.password;
    }

    set _Password(newPassword: string) {
        this.password = newPassword;
    }

    get _coupons(){
        return this.coupons;
    }

    set _coupons(newCoupons: Coupon[]){
        this.coupons = newCoupons;
    }

}