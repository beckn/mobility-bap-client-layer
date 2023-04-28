import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { protocolSeverBaseUrl } from "src/configs/api.config";

@Injectable()
export class ProtocolServerService {
  constructor(private readonly httpService: HttpService) {}
  
  async executeAction(url: string, payload: any): Promise<any> {
    try {
      const finalUrl = `${protocolSeverBaseUrl}/${url}`
      const result = await this.httpService.post(finalUrl, payload).toPromise()
      return result.data
    } catch (error) {
      throw error
    }    
  }
}