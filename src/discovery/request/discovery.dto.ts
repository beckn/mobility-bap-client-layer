export class SearchRequestMessageDto {
    criteria:SearchCriteria
  }

  export class SearchCriteria{
    searchString:string
    deliveryLocation:string
    providerId:string
    categoryId:string
    pickupLocation:string
    dropLocation:string
    providerName:string
    categoryName:string
  }