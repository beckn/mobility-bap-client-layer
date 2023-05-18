import { Injectable } from "@nestjs/common";
import { GetQuoteMapper } from "../mapper/get_quote.mapper";
import { ProtocolServerService } from "src/shared/providers/protocol-server.provider";
import { SelectRequestDto } from "../request/select.request.dto";
import { becknUrl } from "src/configs/api.config";
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { ProtocolContextAction } from "src/shared/models/protocol-context.dto";

@Injectable()
export class GetQuoteService {
  constructor(
    private readonly mapper: GetQuoteMapper,
    private readonly protocolServerService: ProtocolServerService,
    private readonly contextFactory: ContextFactory
  ){}

  async get(requestPayload: SelectRequestDto): Promise<any> {

    console.log("SELECT:::",requestPayload)
    try {
      const context = this.contextFactory.create(ProtocolContextAction.SELECT)
        const item_quantity={
            count:requestPayload[0].message.cart.items.length
        }
      const item=[{
        id:requestPayload[0].message.cart.items[0].id,
        quantity:item_quantity
      }]
      const payload = {
        context: context,
       message:{
        order:{
            provider:{
                id:requestPayload[0].message.cart.items[0].id,
                locations:requestPayload[0].message.cart.items[0].provider.locations
            },
            items:item
        }
       }
      }
      const result = await this.protocolServerService.executeAction(becknUrl.select, payload)
      const mappedResult = this.mapper.map(result)
      return mappedResult
    } catch (error) {
      throw error
    }
  }
}