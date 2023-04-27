import { ClientContext } from "src/shared/models/client-context.dto";

export interface DeliveryAddressResponseT {
    context: ClientContext
    message: Address
  }
  
  export interface Address{
    userId: String
    id: String
     descriptor:null
     gps: String
     defaultAddress:Boolean
     address:string
}