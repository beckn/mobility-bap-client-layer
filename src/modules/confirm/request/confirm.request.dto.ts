import { ClientContext } from "src/shared/models/client-context.dto";

export class ConfimRequestDto {
  context: ClientContext
  message: ConfirmRequestMessageDto
}

interface AddressInfo{
    ward:String,
   street:String
    door:String,
    country:String,
    city:String,
    area_code:String,
    state:String,
    building:String,
    name:String,
    locality:String
}




interface SelectDescriptor{
  images:Array<string>,
  name:String
 
}

interface SelectCategory{
  
  category:String
}
interface SelectProvider{
    
    
    id:String,
    descriptior:SelectDescriptor
}
interface item{
    id:String,
    fulfilment_id:String,
    payment_id:String,
    descriptior:SelectDescriptor
}
interface SelectPrice{
    value:String,
    currency:String
}
interface breakup{
    title:String
    price:SelectPrice
}
interface SelectQuote{
    value:String,
    currency:String,
    breakup:breakup[]
}

interface SelectPerson{
  name:String
  phone:String
}


interface SelectCustomer{
  person:SelectPerson,
 
}

interface SelectLocation{
    gps:String,
    address:AddressInfo
}

interface SelectAgent{
    name:String,
    rateable:String,
    rating:String
}
interface SelectFulfillment{
 
  id:String
  start:SelectLocation,
  end:SelectLocation,
  agent:SelectAgent,
  vehicle:SelectCategory,
  customer:SelectCustomer
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
interface ConfirmRequestMessageDto {
  order:SelectOrder
}

interface SelectOrder{
    id:String
  provider:SelectProvider,
  items:item[],
  quote:SelectQuote
  fulfillment:SelectFulfillment,
  payment:SelectPayment
}