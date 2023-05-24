/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import {ConfimRequestDto } from './request/confirm.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { ConfirmService } from './providers/confirm.service';

@Controller("client")
export class ConfirmController {
    constructor(
        private readonly confirmService: ConfirmService
      ) {
    
      }
      
      @Post('/v1/confirm')
      async get(@Body() confirmDto: ConfimRequestDto): Promise<any> {
        return await this.confirmService.confirm(confirmDto);
      }
}
