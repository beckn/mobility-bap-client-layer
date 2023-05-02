
import { ClientContext } from "src/shared/models/client-context.dto";

export class TrackRequestDto {
  context: ClientContext
  message:TrackRequestMessageDto
}


interface TrackRequestMessageDto {
  order_id: String
}



