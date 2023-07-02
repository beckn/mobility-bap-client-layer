import { Module ,Logger} from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { Order, OrderSchema } from '../order/models/order.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order.controller';
import { OrderService } from './providers/order.service';

@Module({
  imports: [HttpModule, MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
  controllers: [OrderController],
  providers: [OrderService,Logger]
})
export class OrderModule {}
