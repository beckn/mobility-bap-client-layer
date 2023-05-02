import { ClientContext } from "src/shared/models/client-context.dto";

export class SelectRequestDto {
  context: ClientContext
  message: SelectRequestMessageDto
}


interface SelectRequestMessageDto {
  cart: SelectCart
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