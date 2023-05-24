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
       
      context.bpp_id=requestPayload.context.bpp_id
       context.bpp_uri=requestPayload.context.bpp_uri

       console.log(requestPayload)
      const payload = {
        context: context,
       message:{
        order:{
          
          provider:requestPayload.message.order.provider,
          fulfillment:requestPayload.message.order.fulfillment,
          items:requestPayload.message.order.items,
           billing:requestPayload.message.order.billing
           

        },
        
       }
      }

      console.log("beck::",payload)
      const result = await this.protocolServerService.executeAction(becknUrl.init, payload)

      //console.log("RESULT:::",result.responses[0].message)
      const mappedResult = this.mapper.map(result)
      return mappedResult
    } catch (error) {
      throw error
    }
  }
}