import { ClientContext } from "src/shared/models/client-context.dto";

export class ConfimRequestDto {
  context: ClientContext
  message: ConfirmRequestMessageDto
}

interface AddressInfo{
    door:String,
    country:String,
    city:String,
    area_code:String,
    state:String,
    building:String,
    name:String,
    locality:String
}








interface SelectPaymentParams{
    amount:String,
    curreny:String,
    transaction_status:String
}
interface SelectPayment{
    id:String,
    type:String,
    params:SelectPaymentParams
}

interface BillingInfo
{
    address:AddressInfo,
    phone:String,
    name:String,
    email:String
}
interface ConfirmRequestMessageDto {
  order:SelectOrder
}

interface SelectOrder{
    id:String
  provider:any,
  items:any,
  quote:any
  fulfillment:any,
  payment:SelectPayment,
  billing:BillingInfo
}