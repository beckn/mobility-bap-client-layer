/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { TrackRequestDto } from './request/track.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { TrackService } from './providers/track.service'
import { ApiTags } from '@nestjs/swagger';
@ApiTags('/v1/track')
@Controller('client')
export class TrackController {

    constructor(
        private readonly trackService: TrackService
      ) {
    
      }
      
      @Post('/v1/track')
      async track(@Body() trackDto: TrackRequestDto): Promise<any> {
        return await this.trackService.track(trackDto);
      }
}
