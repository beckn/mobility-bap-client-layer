/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { SupportRequestDto } from './request/support.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { SupportService } from './providers/support.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('support')
@Controller('client')
export class SupportController {
    constructor(
        private readonly supportService: SupportService
      ) {
    
      }
      
      @Post('/v1/support')
      async support(@Body() supportDto: SupportRequestDto): Promise<any> {
        return await this.supportService.support(supportDto);
      }
}
