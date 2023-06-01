import { Injectable, Logger } from "@nestjs/common";
import { GetQuoteMapper } from "../mapper/get_quote.mapper";
import { ProtocolServerService } from "src/shared/providers/protocol-server.provider";
import { SelectRequestDto } from "../request/select.request.dto";
import { becknUrl } from "src/configs/api.config";
import { ContextFactory } from "src/shared/factories/context.factory.provider";
import { ProtocolContextAction } from "src/shared/models/protocol-context.dto";
import { Domain } from "../../../configs/api.config";

@Injectable()
export class GetQuoteService {
  constructor(
    private readonly mapper: GetQuoteMapper,
    private readonly protocolServerService: ProtocolServerService,
    private readonly contextFactory: ContextFactory,
    private logger: Logger
  ) {}

  async get(requestPayload:  SelectRequestDto | any): Promise<any> {
    try {
      let context;
      let payload;
      let fpayload:any=[]
      if (requestPayload?.length > 0) {
        requestPayload.forEach((element) => {
          context = this.contextFactory.create(
            ProtocolContextAction.SELECT,
            element.context.domain
          );
          context.bpp_id = element.context.bpp_id;
          context.bpp_uri = element.context.bpp_uri;
          context.transaction_id = element.context.transaction_id;
          let items:any=[];
        element.message.cart.items.map(item=>{
         items.push({
          id: item.id,
          quantity: item.quantity
        })})
         const payload = {
          context: context,
          message:
          {
            order: {
              provider: element.message.cart.items[0].provider,
              items: items

            }
            }  
           }
           fpayload.push(payload);
        });
       payload = fpayload;
      }
      else{
        context= this.contextFactory.create(ProtocolContextAction.SELECT,requestPayload.context.domain);
        context.bpp_id = requestPayload.context.bpp_id;
        context.bpp_uri = requestPayload.context.bpp_uri;
        context.transaction_id = requestPayload.context.transaction_id;
        if (requestPayload.context.domain === Domain.mobility) {
          payload = {
            context: context,
            message: requestPayload.message,
          };
        }
    }
  
      this.logger.log("calling get quote api : payload", payload);

      console.log("Input payload", requestPayload);
      const result = await this.protocolServerService.executeAction(
        becknUrl.select,
        payload
      );
      console.log(result);
      console.log(result.responses[0]?.error);
      const mappedResult = this.mapper.map(result);
      return mappedResult;
    } catch (error) {
      this.logger.error("error executing get_quote", error);
      throw error;
    }
  }
}
