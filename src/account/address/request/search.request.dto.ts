import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class DeliveryAddressRequestDto {
  descriptor: string;
  gps?: string;
  default: boolean;
  address: string;
}
