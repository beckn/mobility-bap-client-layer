import { AddressService } from './address.service';
/*
https://docs.nestjs.com/modules
*/
import { AddressController } from './address.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
