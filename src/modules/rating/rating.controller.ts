/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { RatingRequestDto } from './request/rating.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { RatingService } from './providers/rating.service'

@Controller('client')
export class RatingController {

    constructor(
        private readonly ratingService: RatingService
      ) {
    
      }
      
      @Post('/v1/rating')
      async status(@Body() ratingDto: RatingRequestDto): Promise<any> {
        return await this.ratingService.rating(ratingDto);
      }
}
