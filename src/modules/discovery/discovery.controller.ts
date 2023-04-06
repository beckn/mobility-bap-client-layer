import { Body, Controller, Get, Post } from '@nestjs/common';
import { SearchRequestDto } from './request/search.request.dto';

@Controller('client')
export class DiscoveryController {
  
  @Post('/v1/search')
  search(@Body() searchDto: SearchRequestDto): string {
    return 'This action returns all cats';
  }
}
