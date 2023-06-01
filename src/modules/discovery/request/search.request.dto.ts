import { ApiProperty } from "@nestjs/swagger";
import { ClientContext } from "src/shared/models/client-context.dto";





class SearchCriteria {
  @ApiProperty({
    type:String
  })
  search_string?: string;
  @ApiProperty({
    type:String
  })
  delivery_location?: string;
  @ApiProperty({
    type:String
  })
  providerId?: string;
  @ApiProperty({
    type:String
  })
  categoryId?: string;
  @ApiProperty({
    type:String
  })
  pickup_location: string;
  @ApiProperty({
    type:String
  })
  drop_location: string;
  @ApiProperty({
    type:String
  })
  providerName?: string;
  @ApiProperty({
    type:String
  })
  category_name?: string;
}
class SearchRequestMessageDto {
  @ApiProperty({
    type:SearchCriteria
  })
  criteria: SearchCriteria
}
export class SearchRequestDto {
  @ApiProperty({
    type:ClientContext
  })
  context: ClientContext
  @ApiProperty({
    type:SearchRequestMessageDto
  })
  message: SearchRequestMessageDto
}
