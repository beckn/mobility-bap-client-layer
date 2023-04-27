import { ClientContext } from "src/shared/models/client-context.dto";
export interface AccountResponseT{
    context: ClientContext
    message: Account
}

export interface Account{
    userName:string
    userPhone:string
    useEmail:string
}