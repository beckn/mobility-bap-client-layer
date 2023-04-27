/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import{AccountRequestDto} from './request/user.request.dto'
import {AccountResponseT} from './interface/user.interface'

@Injectable()
export class UserService {
    async search(body:AccountRequestDto):Promise<AccountResponseT>{
        const client_data={
            transactionId:"id_123",
            bppId:"qwe-123",
            bppUri:"https//url"
        }
        const message_data={
            userName:"Zoya",
            userPhone:"123456789",
            useEmail:"abc@gmail.com"
        }
        const data={
            context: client_data,
            message: message_data

        }
        return data
    }
}
