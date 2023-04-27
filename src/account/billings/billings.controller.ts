/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller,Post,Body } from '@nestjs/common';
import { BillingsService } from './billings.service';
import {BillingDetailRequestDto}from './request/billing.request.dto'
import {BillingDetailResponseT} from './interface/billings.interface'

@Controller()
export class BillingsController {
    constructor(private readonly billingsService:BillingsService){}
    @Post('/client/v1/delivery_address')
    async search(@Body() BillingDetailRequestDto: BillingDetailRequestDto): Promise<BillingDetailResponseT> {
      return  await this.billingsService.search(BillingDetailRequestDto);
    }
}
