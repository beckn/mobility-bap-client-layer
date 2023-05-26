import { ClientContext } from "src/shared/models/client-context.dto";

export class SupportRequestDto {
  context: ClientContext
  message: SupportRequestMessageDto
}


interface SupportRequestMessageDto {
  
  ref_id:String
}

