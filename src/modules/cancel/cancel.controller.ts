/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CancelRequestDto } from './request/cancel.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { CancelService } from './providers/cancel.service'

@Controller('client')
export class CancelController {

    constructor(
        private readonly cancelService: CancelService
      ) {
    
      }
      
      @Post('/v1/rating')
      async status(@Body() cancelDto: CancelRequestDto): Promise<any> {
        return await this.cancelService.cancel(cancelDto);
      }
}
