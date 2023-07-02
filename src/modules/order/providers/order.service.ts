import { Injectable, Logger } from "@nestjs/common";
import { Order } from "src/modules/order/models/order.schema";
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrderService {
  constructor(
    private logger: Logger,
    @InjectModel(Order.name) private orderModel: Model<Order>,
  ) {}

  async fetchOrders(userId: string): Promise<any> {
    try {
      return this.orderModel.find({
        userId: userId
      }).exec();
    } catch (error) {
      this.logger.error("error fetching orders", error);
      throw error;
    }
  }
}
