import { ClientContext } from "src/shared/models/client-context.dto";

export class InitRequestDto {
  context: ClientContext
  message: InitRequestMessageDto
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

interface BillingInfo
{
    address:AddressInfo,
    phone:String,
    name:String,
    email:String
}
interface LocationInfo{
    address:AddressInfo
}

interface DeliveryInfo{
    type:String,
    phone:String,
    name:String,
    email:String,
    location:LocationInfo


}

interface InitRequestMessageDto {
  items:item[],
  billing_info:BillingInfo,
  delivery_info:DeliveryInfo
}


interface SelectProvider{
    id:String,
    locations:Array<string>
}
interface item{
    id:String,
    fulfilment_id:String,
    provider:SelectProvider
}

interface SelectCart {
  items:item[]
}