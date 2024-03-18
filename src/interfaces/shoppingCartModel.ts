import { cartItemModel } from "./cartItemModel";

export interface shoppingCartModel {
    id?:                    number;
    userId?:                string;
    cartItems?:             cartItemModel[];
    cartTotal?:             number;
    stripePaymentIntentID?: any;
    secret?:                any;
}