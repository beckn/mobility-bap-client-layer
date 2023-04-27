/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller,Post,Body } from '@nestjs/common';
import { AddressService } from './address.service';
import {DeliveryAddressRequestDto}from './request/search.request.dto'
import {DeliveryAddressResponseT} from './interface/address.interface'

@Controller()
export class AddressController {
    constructor(private readonly addressService:AddressService){}
    @Post('/client/v1/delivery_address')
    async search(@Body() DeliveryAddressRequestDto: DeliveryAddressRequestDto): Promise<DeliveryAddressResponseT> {
      return  await this.addressService.search(DeliveryAddressRequestDto);
    }
}
