
import { ClientContext } from "src/shared/models/client-context.dto";

export class StatusRequestDto {
  context: ClientContext
  message: StatusRequestMessageDto
}


interface StatusRequestMessageDto {
  order_id: String
}



