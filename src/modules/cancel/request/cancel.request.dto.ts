
import { ClientContext } from "src/shared/models/client-context.dto";

export class CancelRequestDto {
  context: ClientContext
  message: CancelRequestMessageDto
}


interface CancelRequestMessageDto {
  order_id: String,
  cancellation_reason_id:String,

}



