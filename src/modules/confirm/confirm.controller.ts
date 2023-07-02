/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import {ConfimRequestDto, ListConfirmRequestDto } from './request/confirm.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { ConfirmService } from './providers/confirm.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags( 'confirm')
@Controller("client")
export class ConfirmController {
    constructor(
        private readonly confirmService: ConfirmService
      ) {
    
      }
      
      @Post('/v2/confirm')
      async get(@Body() listConfirmDto: ListConfirmRequestDto): Promise<any> {
        const requests = listConfirmDto.confirmRequestDto.map(confirmDto => {
         return this.confirmService.confirm(confirmDto, listConfirmDto.userId);
        })
         return await Promise.all(requests)
      }
}
