/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import {DeliveryAddressRequestDto}from './request/search.request.dto'
import {DeliveryAddressResponseT} from './interface/address.interface'


@Injectable()
export class AddressService {
    async search(body:DeliveryAddressRequestDto):Promise<DeliveryAddressResponseT>{
        const client_data={
            transactionId:"id_123",
            bppId:"qwe-123",
            bppUri:"https//url"
        }
        const message_data={
            userId: "123",
            id: "123",
             descriptor:null,
             gps: "123.456",
             defaultAddress:true,
             address:"JP Nagar"
        }
        const data={
            context: client_data,
            message: message_data

        }
        return data
    }
}
