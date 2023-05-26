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



interface SelectDescriptor{
  images:Array<string>,
  name:String
 
}
interface SelectCatDescriptor{
  name:String
}
interface SelectCategory{
  descriptor:SelectCatDescriptor,
  id:String
}
interface SelectProvider{
    
    locations:Array<string>
    descriptor:SelectDescriptor
    id:String,
    categories:SelectCategory[]
}
interface item{
    id:String,
    fulfilment_id:String,
    provider:SelectProvider
}

interface item {
  id:String
}
interface SelectPerson{
  name:String
}

interface SelectContact{
  phone:String,
  email:String
}
interface SelectCustomer{
  person:SelectPerson,
  contact:SelectContact
}
interface SelectFulfillment{
  customer:SelectCustomer,
  id:String
}
interface InitRequestMessageDto {
  order:SelectOrder
}

interface SelectOrder{
  provider:SelectProvider,
  fulfillment:SelectFulfillment,
  items:item[],
  billing:BillingInfo,
}