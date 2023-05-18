import { Injectable } from "@nestjs/common";
import { TrackMapper } from "../mapper/track.mapper";
import { ProtocolServerService } from "src/shared/providers/protocol-server.provider";
import { TrackRequestDto } from "../request/track.request.dto";
import { becknUrl } from "src/configs/api.config";
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { ProtocolContextAction } from "src/shared/models/protocol-context.dto";

@Injectable()
export class TrackService {
  constructor(
    private readonly mapper: TrackMapper,
    private readonly protocolServerService: ProtocolServerService,
    private readonly contextFactory: ContextFactory
  ){}

  async track(requestPayload: TrackRequestDto): Promise<any> {
    try {
      const context = this.contextFactory.create(ProtocolContextAction.TRACK)
    
      const payload = {
        context: context,
       message:{
       order_id:requestPayload.message.order_id
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