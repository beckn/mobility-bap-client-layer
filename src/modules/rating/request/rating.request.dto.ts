
import { ClientContext } from "src/shared/models/client-context.dto";

export class RatingRequestDto {
  context: ClientContext
  message: RatingRequestMessageDto
}


interface RatingRequestMessageDto {
  id: String,
  rating_category:String,
  value:Number
}



