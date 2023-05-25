import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { ClientContext } from "src/shared/models/client-context.dto";



class AddressInfo {
  @ApiProperty({
    type:String
  })
  door: String
  @ApiProperty({
    type:String
  })
  country: String
  @ApiProperty({
    type:String
  })
  city: String
  @ApiProperty({
    type:String
  })
  area_code: String
  @ApiProperty({
    type:String
  })
  state: String
  @ApiProperty({
    type:String
  })
  building: String
  @ApiProperty({
    type:String
  })
  name: String
  @ApiProperty({
    type:String
  })
  locality: String
}
class SelectPaymentParams {
  @ApiProperty({
    type:String
  })
  amount: String
  @ApiProperty({
    type:String
  })
  curreny: String
  @ApiProperty({
    type:String
  })
  transaction_status: String
}
class SelectPayment {
  @ApiProperty({
    type:String
  })
  id: String
  @ApiProperty({
    type:String
  })
  type: String
  @ApiProperty({
    type:SelectPaymentParams
  })
  params: SelectPaymentParams
}

class BillingInfo {
  @ApiProperty({
    type:AddressInfo
  })
  address: AddressInfo
  @ApiProperty({
    type:String
  })
  phone: String
  @ApiProperty({
    type:String
  })
  name: String
  @ApiProperty({
    type:String
  })
  email: String
}
class SelectOrder {
  @ApiProperty({
    type:String
  })
  id: String
  @ApiProperty({
    type:{}
  })
  provider: any
  @ApiProperty({
    type:{}
  })
  items: any
  @ApiProperty({
    type:{}
  })
  quote: any
  @ApiProperty({
    type:{}
  })
  fulfillment: any
  @ApiProperty({
    type:SelectPayment
  })
  payment: SelectPayment
  @ApiProperty({
    type:BillingInfo
  })
  billing: BillingInfo
}
class ConfirmRequestMessageDto {
  @ApiProperty({
    type:SelectOrder
  })
  order: SelectOrder
}


export class ConfimRequestDto {
  @ApiProperty({
    type:ClientContext
  })
  context: ClientContext
  @ApiProperty({
    type:ConfirmRequestMessageDto
  })
  message: ConfirmRequestMessageDto
}