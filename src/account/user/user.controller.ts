/*
https://docs.nestjs.com/controllers#controllers
*/
import { Controller,Post,Body } from '@nestjs/common';
import {UserService} from './user.service'
import{AccountRequestDto} from './request/user.request.dto'
import {AccountResponseT} from './interface/user.interface'

@Controller()
export class UserController {
    constructor(private readonly userService:UserService){}
    @Post('/client/v1/account_details')
    async search(@Body() AccountRequestDto: AccountRequestDto): Promise<AccountResponseT> {
      return  await this.userService.search(AccountRequestDto);
    }
}
