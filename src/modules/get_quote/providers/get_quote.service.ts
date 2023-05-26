import { Injectable ,Logger} from "@nestjs/common";
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
    private readonly contextFactory: ContextFactory,
    private logger : Logger
  ){}

  async get(requestPayload: SelectRequestDto): Promise<any> {
    try {
      const context = this.contextFactory.create(ProtocolContextAction.SELECT)
       context.bpp_id=requestPayload.context.bpp_id
       context.bpp_uri=requestPayload.context.bpp_uri
       context.transaction_id=requestPayload.context.transaction_id
    
      const payload = {
        context: context,
       message:requestPayload.message
      }
      this.logger.log("calling get quote api : payload",payload);

      console.log("Input payload",requestPayload)
      const result = await this.protocolServerService.executeAction(becknUrl.select, payload)
      console.log(result)
      console.log(result.responses[0].error)
      const mappedResult = this.mapper.map(result)
      return mappedResult
    } catch (error) {
      this.logger.error("error executing get_quote",error)
      throw error
    }
  }
}