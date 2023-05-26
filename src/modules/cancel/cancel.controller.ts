/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CancelRequestDto } from './request/cancel.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { CancelService } from './providers/cancel.service'
import { ApiTags } from '@nestjs/swagger';
@ApiTags('cancel')
@Controller('client')
export class CancelController {

    constructor(
        private readonly cancelService: CancelService
      ) {
    
      }
  
      @Post('/v1/cancel')
      async status(@Body() cancelDto: CancelRequestDto): Promise<any> {
        return await this.cancelService.cancel(cancelDto);
      }
}
