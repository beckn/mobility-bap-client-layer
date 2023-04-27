/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import {BillingDetailRequestDto}from './request/billing.request.dto'
import {BillingDetailResponseT} from './interface/billings.interface'

@Injectable()
export class BillingsService {
    async search(body:BillingDetailRequestDto):Promise<BillingDetailResponseT>{
        const client_data={
            transactionId:"id_123",
            bppId:"qwe-123",
            bppUri:"https//url"
        }
        const message_data={
            name:"Aarthi",
            phone:"12345678",
            organization:"CTS",
            address:"ASD",
            email:"abc@gmail.com",
            taxNumber:"12345",
            createdAt:new Date(),
            updatedAt:new Date(),
            locationId:"123"
        }
        const data={
            context: client_data,
            message: message_data

        }
        return data
    }
}
