/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { TrackRequestDto } from './request/track.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { TrackService } from './provider/track.service'

@Controller()
export class TrackController {

    constructor(
        private readonly trackService: TrackService
      ) {
    
      }
      
      @Post('/v1/track')
      async search(@Body() trackDto: TrackRequestDto): Promise<any> {
        return await this.trackService.search(trackDto);
      }
}
