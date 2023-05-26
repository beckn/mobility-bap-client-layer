import { ApiProperty } from "@nestjs/swagger"

export class ClientContext {
  @ApiProperty({
    type: String
  })
  transaction_id?: string
  @ApiProperty({
    type: String
  })
  bpp_id?: string
  @ApiProperty({
    type: String
  })
  bpp_uri?: string
}