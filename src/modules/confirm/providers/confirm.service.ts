import { Injectable, Logger } from "@nestjs/common";
import { ConfirmMapper } from "../mapper/confirm.mapper";
import { ProtocolServerService } from "src/shared/providers/protocol-server.provider";
import { ConfimRequestDto } from "../request/confirm.request.dto";
import { becknUrl } from "src/configs/api.config";
import { ContextFactory } from "src/shared/factories/context.factory.provider";
import { ProtocolContextAction } from "src/shared/models/protocol-context.dto";
import { Domain } from "../../../configs/api.config";

@Injectable()
export class ConfirmService {
  constructor(
    private readonly mapper: ConfirmMapper,
    private readonly protocolServerService: ProtocolServerService,
    private readonly contextFactory: ContextFactory,
    private logger: Logger
  ) {}

  async confirm(requestPayload: ConfimRequestDto): Promise<any> {
    try {
      const context = this.contextFactory.create(
        ProtocolContextAction.CONFIRM,
        requestPayload.context.domain
      );
      context.bpp_id = requestPayload.context.bpp_id;
      context.bpp_uri = requestPayload.context.bpp_uri;
      context.transaction_id = requestPayload.context.transaction_id;

      let paylaod;
      if (
        requestPayload.context.domain === Domain.retail ||
        requestPayload.context.domain === Domain.tourism
      ) {
        let items: any = [];
        requestPayload.message.order.items.map((item) => {
          items.push({
            id: item.id,
            extended_attributes: {},
            quantity: item.quantity,
            price:item.price,
            descriptor:item.descriptor,
            tags:item.tags
          });
        });
        paylaod = {
          context: context,
          message: {
            order: {
              provider: {
                id:requestPayload.message.order.provider.id,
                //locations: requestPayload.message.order.locations
              },
              items:items,
              addOns: [],
              offers: [],
              billing:requestPayload.message.order.billing,            
              fulfillment:requestPayload.message.order.fulfillment,
              payment:requestPayload.message.order.payment
            },
          },
        };
      } else {
        paylaod = {
          context: context,
          message: {
            order: {
              id: requestPayload.message.order.id,
              provider: requestPayload.message.order.provider,
              items: requestPayload.message.order.items,
              quote: requestPayload.message.order.quote,
              fulfillment: requestPayload.message.order.fulfillment,
            },
          },
        };
      }

      console.log("Input::", requestPayload);
      this.logger.log(
        "calling confirm endpoint of protocol server: requestpayload",
        requestPayload
      );
      const result = await this.protocolServerService.executeAction(
        becknUrl.confirm,
        paylaod
      );
      const mappedResult = this.mapper.map(result);
      return mappedResult;
    } catch (error) {
      this.logger.error("error executing confirm endpoint", error);
      throw error;
    }
  }
}
