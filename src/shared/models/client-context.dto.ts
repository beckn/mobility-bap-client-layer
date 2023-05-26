import { ApiProperty } from "@nestjs/swagger"

export class ClientContext {
  @ApiProperty({
    description:'transaction_id'
  })
  transaction_id?: string
  @ApiProperty({
    description:'bpp_id'
  })
  bpp_id?: string
  @ApiProperty({
    description:'bpp_uri'
  })
  bpp_uri?: string
}