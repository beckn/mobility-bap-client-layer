import { BillingsService } from './billings.service';
/*
https://docs.nestjs.com/modules
*/
import { BillingsController } from './billings.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [BillingsController],
  providers: [BillingsService],
})
export class BillingsModule {}
