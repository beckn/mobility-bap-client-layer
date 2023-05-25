import { Body, Controller, Get, Post } from '@nestjs/common';
import { SearchRequestDto } from './request/search.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { DiscoveryService } from './providers/discovery.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('/v1/search')
@Controller('client')
export class DiscoveryController {
  constructor(
    private readonly discoveryService: DiscoveryService
  ) {

  }
  
  @Post('/v1/search')
  async search(@Body() searchDto: SearchRequestDto): Promise<any> {
    console.log(searchDto)
    return await this.discoveryService.search(searchDto);
  }
}