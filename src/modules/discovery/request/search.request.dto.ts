import { ClientContext } from "src/shared/models/client-context.dto";

export class SearchRequestDto {
  context: ClientContext
  message: SearchRequestMessageDto
}


interface SearchRequestMessageDto {
  criteria: SearchCriteria
}

interface SearchCriteria {
  searchString?: string;
  deliveryLocation?: string;
  providerId?: string;
  categoryId?: string;
  pickupLocation: string;
  dropLocation: string;
  providerName?: string;
  categoryName?: string;
}