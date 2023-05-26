/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { StatusRequestDto } from './request/status.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { StatusService } from './providers/status.service'
import { ApiTags } from '@nestjs/swagger';

@ApiTags('status')
@Controller('client')
export class StatusController {

    constructor(
        private readonly statusService: StatusService
      ) {
    
      }
      
      @Post('/v1/status')
      async status(@Body() statusDto: StatusRequestDto): Promise<any> {
        return await this.statusService.status(statusDto);
      }
}
