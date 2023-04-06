import { Module } from '@nestjs/common';
import { DiscoveryController } from './discovery.controller';

@Module({
  controllers: [DiscoveryController]
})
export class DiscoveryModule {}
