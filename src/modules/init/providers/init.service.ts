import { Injectable } from "@nestjs/common";
import { InitMapper } from "../mapper/init.mapper";
import { ProtocolServerService } from "src/shared/providers/protocol-server.provider";
import { InitRequestDto } from "../request/init.request.dto";
import { becknUrl } from "src/configs/api.config";
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { ProtocolContextAction } from "src/shared/models/protocol-context.dto";

@Injectable()
export class InitService {
  constructor(
    private readonly mapper: InitMapper,
    private readonly protocolServerService: ProtocolServerService,
    private readonly contextFactory: ContextFactory
  ){}

  async init(requestPayload: InitRequestDto): Promise<any> {
    try {
      const context = this.contextFactory.create(ProtocolContextAction.INIT)
       
      const item_quantity={
        count:requestPayload.message.items.length
    }
  const item=[{
    id:requestPayload.message.items[0].id,
    quantity:item_quantity,
                    
  }]
      const payload = {
        context: context,
       message:{
        order:{
           providers:requestPayload.message.items[0].provider,
           item:item,
           add_ons:[],
           offers:[],
           billing:requestPayload.message.billing_info,
           fulfillment:requestPayload.message.delivery_info

        },
        
       }
      }
      const result = await this.protocolServerService.executeAction(becknUrl.search, payload)
      const mappedResult = this.mapper.map(result)
      return mappedResult
    } catch (error) {
      throw error
    }
  }
}