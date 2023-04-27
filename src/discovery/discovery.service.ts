/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

import {DiscoveryResponseT} from './interface/discovery.interface'
import {SearchRequestMessageDto} from './request/discovery.dto'


@Injectable()
export class DiscoveryService {
    async search(body:SearchRequestMessageDto):Promise<DiscoveryResponseT>{
        const client_data={
            transactionId:"id_123",
            bppId:"qwe-123",
            bppUri:"https//url"
        }
        const message_data={
            searchString:"Bangalore",
            deliveryLocation:"Bangalore",
            providerId:"123-asd",
            categoryId:"198",
            pickupLocation:"JPNagar",
            dropLocation:"EM Office",
            providerName:"Ola",
            categoryName:"cab"
        }
        const data={
            context: client_data,
            message: message_data

        }
        return data
    }
}
