/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { SelectRequestDto } from './request/select.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { GetQuoteService } from './providers/get_quote.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('/v1/get_quote')
@Controller('client')
export class GetQuoteController {
    constructor(
        private readonly getQuoteService: GetQuoteService
      ) {
    
      }
      
      @Post('/v1/get_quote')
      async get(@Body() selectDto: SelectRequestDto): Promise<any> {
        return await this.getQuoteService.get(selectDto);
      }
}
