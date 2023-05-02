/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { StatusRequestDto } from './request/status.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { StatusService } from './provider/status.service'

@Controller()
export class StatusController {

    constructor(
        private readonly statusService: StatusService
      ) {
    
      }
      
      @Post('/v1/redirect')
      async search(@Body() selectDto: StatusRequestDto): Promise<any> {
        return await this.statusService.search(selectDto);
      }
}
