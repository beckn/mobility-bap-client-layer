import { Injectable } from "@nestjs/common";
import { UuidFactory } from "./uuid.factory.provider";
import { ProtocolContext, ProtocolContextAction } from "../models/protocol-context.dto";
import { becknConfig } from "src/configs/api.config";

@Injectable()
export class ContextFactory {
  constructor(
    private readonly uuidFactory: UuidFactory
  ) {}

  create(
    action: ProtocolContextAction = ProtocolContextAction.SEARCH,
    transactionId: string=this.uuidFactory.create(),
    messageId: string = this.uuidFactory.create(),
    bpp_id?: string,
    bpp_uri?: string
  ): ProtocolContext {
    const date = new Date()
    return {
      domain: becknConfig.domain,
      country: becknConfig.country,
      city: becknConfig.city,
      action: action,
      core_version: becknConfig.core_version,
      bap_id: becknConfig.bap_id,
      bap_uri: becknConfig.bap_uri,
      bpp_id: bpp_id,
      bpp_uri: bpp_uri,
      transaction_id: transactionId,
      message_id: messageId,
      timestamp: date.toDateString()
    }
  }
}