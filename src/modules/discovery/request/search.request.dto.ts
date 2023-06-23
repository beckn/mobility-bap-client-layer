import { ApiProperty } from "@nestjs/swagger";
import { ClientContext } from "src/shared/models/client-context.dto";



class SearchProvider {
  @ApiProperty({
    type: String
  })
  id?: string
}

class SearchCriteria {
  @ApiProperty({
    type:String
  })
  searchString?: string;
  @ApiProperty({
    type: SearchProvider
  })
  provider?: SearchProvider;
  @ApiProperty({
    type:String
  })
  categoryId?: string;
  @ApiProperty({
    type:String
  })
  pickupLocation: string;
  @ApiProperty({
    type:String
  })
  dropLocation: string;
  @ApiProperty({
    type:String
  })
  providerName?: string;
  @ApiProperty({
    type:String
  })
  categoryName?: string;
}
class SearchRequestMessageDto {
  @ApiProperty({
    type:SearchCriteria
  })
  criteria: SearchCriteria
}
export class SearchRequestDto {
  @ApiProperty({
    type:{}
  })
  context: ClientContext
  @ApiProperty({
    type:SearchRequestMessageDto
  })
  message: SearchRequestMessageDto
}
