import { Body, Controller, Get, Post } from '@nestjs/common';
import { SearchRequestDto } from './request/search.request.dto';
import { ProtocolContextAction } from 'src/shared/models/protocol-context.dto';
import { DiscoveryService } from './providers/discovery.service';

@Controller('client')
export class DiscoveryController {
  constructor(
    private readonly discoveryService: DiscoveryService
  ) {

  }
  
  @Post('/v1/search')
  async search(@Body() searchDto: SearchRequestDto): Promise<any> {
    return await this.discoveryService.search(searchDto);
  }
}

// val protocolContext =
//       contextFactory.create(transactionId = request.context.transactionId, action = ProtocolContext.Action.SEARCH)
//     val loggerRequest = loggingFactory.create(messageId = protocolContext.messageId,
//       transactionId = protocolContext.transactionId, contextTimestamp = protocolContext.timestamp.toString(),
//       action = protocolContext.action
//     )
//     loggingService.postLog(loggerRequest)
//     return searchService.search(protocolContext, request.message.criteria)
//       .fold(
//         {
//           log.error("Error during search. Error: {}", it)
//           val loggerRequest = loggingFactory.create(messageId = protocolContext.messageId, transactionId = protocolContext.transactionId, contextTimestamp = protocolContext.timestamp.toString(),
//             action = protocolContext.action, bppId = protocolContext.bppId, errorMessage = it.error().message, errorCode = it.error().code
//           )
//           loggingService.postLog(loggerRequest)
//           ResponseEntity
//             .status(it.status().value())
//             .body(ProtocolAckResponse(null, it.message(), it.error()))
//         },
//         {
//           log.info("Successfully initiated Search")
//           ResponseEntity.ok(it)
//         }
//       )
//   }
