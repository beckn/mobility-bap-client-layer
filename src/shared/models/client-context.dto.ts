export class ClientContext {
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