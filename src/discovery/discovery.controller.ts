/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller,Post,Body } from '@nestjs/common';
import {SearchRequestMessageDto} from './request/discovery.dto'
import {DiscoveryService} from './discovery.service'
import {DiscoveryResponseT} from './interface/discovery.interface'


@Controller()
export class DiscoveryController {
    constructor(private readonly discoveryService:DiscoveryService){}
    @Post('/client/v1/search')
    async search(@Body() SearchRequestMessageDto: SearchRequestMessageDto): Promise<DiscoveryResponseT> {
      return  await this.discoveryService.search(SearchRequestMessageDto);
    }
}
