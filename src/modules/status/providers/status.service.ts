import { Injectable, Logger } from "@nestjs/common";
import { StatusMapper } from "../mapper/status.mapper";
import { ProtocolServerService } from "src/shared/providers/protocol-server.provider";
import { StatusRequestDto } from "../request/status.request.dto";
import { becknUrl } from "src/configs/api.config";
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { ProtocolContextAction } from "src/shared/models/protocol-context.dto";

@Injectable()
export class StatusService {
  constructor(
    private readonly mapper: StatusMapper,
    private readonly protocolServerService: ProtocolServerService,
    private readonly contextFactory: ContextFactory,
    private logger : Logger
  ){}

  async status(requestPayload: StatusRequestDto): Promise<any> {
    try {
      const context = this.contextFactory.create(ProtocolContextAction.STATUS)
    
      const payload = {
        context: context,
       message:{
       order_id:requestPayload.message.order_id
       }
      }
      this.logger.log("calling status api : payload",payload);
      const result = await this.protocolServerService.executeAction(becknUrl.search, payload)
      const mappedResult = this.mapper.map(result)
      return mappedResult
    } catch (error) {
      this.logger.error("error executing status call",error)
      throw error
    }
  }
}