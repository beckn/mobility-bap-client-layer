import { ClientContext } from "src/shared/models/client-context.dto";

export interface DiscoveryResponseT {
    context: ClientContext
    message: Discovery
  }

  export interface Discovery{
    searchString:string
    deliveryLocation:string
    providerId:string
    categoryId:string
    pickupLocation:string
    dropLocation:string
    providerName:string
    categoryName:string
}