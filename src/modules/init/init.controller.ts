/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import {InitRequestDto } from './request/init.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { InitService } from './providers/init.service';

@Controller("client")
export class InitController {
    constructor(
        private readonly initService: InitService
      ) {
    
      }
      
      @Post('/v1/initialize_order')
      async get(@Body() initDto: InitRequestDto): Promise<any> {
        return await this.initService.init(initDto);
      }
}
