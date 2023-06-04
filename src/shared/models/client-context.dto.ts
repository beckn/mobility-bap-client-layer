import { ApiProperty } from "@nestjs/swagger"
import { Domain } from "../../configs/api.config"

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
  @ApiProperty({
    description:'domain is required'
  })
  bap_id? :string
  bap_uri?: string
  domain: Domain
}