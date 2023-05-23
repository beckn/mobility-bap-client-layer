import { ClientContext } from "src/shared/models/client-context.dto";

export class SelectRequestDto {
  context: ClientContext
  message: SelectRequestMessageDto
}


interface SelectRequestMessageDto {
  order: SelectOrder
}


interface SelectProvider{
    id:String,
    locations:Array<string>
}

interface SelectFulfillment{
  id:String
  start:SelectStart,
  end:SelectEnd,
}
interface SelectLocation{
gps:String
}
interface SelectEnd{
  location:SelectLocation
}
interface SelectStart{
  location:SelectLocation
}
interface SelectOrder {
  provider:SelectProvider,
  item:[],
  fulfillment:SelectFulfillment
}

