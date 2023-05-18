import { Injectable ,Logger} from "@nestjs/common";
import { DiscoveryMapper } from "../mapper/discovery.mapper";
import { ProtocolServerService } from "src/shared/providers/protocol-server.provider";
import { SearchRequestDto } from "../request/search.request.dto";
import { becknUrl } from "src/configs/api.config";
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { ProtocolContextAction } from "src/shared/models/protocol-context.dto";

@Injectable()
export class DiscoveryService {
  constructor(
    private readonly mapper: DiscoveryMapper,
    private readonly protocolServerService: ProtocolServerService,
    private readonly contextFactory: ContextFactory,
    private logger : Logger
  ){}

  async search(requestPayload: SearchRequestDto): Promise<any> {
    console.log("payload...",requestPayload)
    try {
      const context = this.contextFactory.create(ProtocolContextAction.SEARCH)
      const paylaod = {
        context: context,
        message: {
          intent: {
            fulfillment: {
              start: {
                location: {
                  gps: requestPayload.message.criteria.pickup_location
                }
              },
              end: {
                location: {
                  gps: requestPayload.message.criteria.drop_location
                }
              }
            }
          }
        }
      }
      this.logger.log("api",paylaod)
      const result = await this.protocolServerService.executeAction(becknUrl.search, paylaod)
      console.log(result)
      const mappedResult = this.mapper.map(result)
      return mappedResult
    } catch (error) {
      this.logger.error("error executing searching point",error)
      throw error
    }
  }
}