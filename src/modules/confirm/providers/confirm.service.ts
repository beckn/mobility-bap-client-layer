import { Injectable ,Logger} from "@nestjs/common";
import { ConfirmMapper } from "../mapper/confirm.mapper";
import { ProtocolServerService } from "src/shared/providers/protocol-server.provider";
import { ConfimRequestDto } from "../request/confirm.request.dto";
import { becknUrl } from "src/configs/api.config";
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { ProtocolContextAction } from "src/shared/models/protocol-context.dto";

@Injectable()
export class ConfirmService {
  constructor(
    private readonly mapper: ConfirmMapper,
    private readonly protocolServerService: ProtocolServerService,
    private readonly contextFactory: ContextFactory,
    private logger : Logger
  ){}

  async confirm(requestPayload: ConfimRequestDto): Promise<any> {
    try {
      const context = this.contextFactory.create(ProtocolContextAction.CONFIRM,requestPayload.context.domain)
      context.bpp_id=requestPayload.context.bpp_id
       context.bpp_uri=requestPayload.context.bpp_uri
       context.transaction_id=requestPayload.context.transaction_id
      const paylaod = {
        context: context,
        message: {
        order:
        {
            id:requestPayload.message.order.id,
            provider:requestPayload.message.order.provider,
            items:requestPayload.message.order.items,
            quote:requestPayload.message.order.quote,
            fulfillment:requestPayload.message.order.fulfillment
        }
        }
      }

      console.log("Input::",requestPayload)
      this.logger.log("calling confirm endpoint of protocol server: requestpayload",requestPayload)
      const result = await this.protocolServerService.executeAction(becknUrl.confirm, paylaod)
      const mappedResult = this.mapper.map(result)
      return mappedResult
    } catch (error) {
      this.logger.error("error executing searching point",error)
      throw error
    }
  }
}