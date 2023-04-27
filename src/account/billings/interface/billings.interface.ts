import { ClientContext } from "src/shared/models/client-context.dto";
export interface BillingDetailResponseT{
    context: ClientContext
    message: Billing
}

export interface Billing{
    name:string
    phone:string
    organization:string
    address:string
    email:string
    taxNumber:string
    createdAt:Date
    updatedAt:Date
    locationId:string
}