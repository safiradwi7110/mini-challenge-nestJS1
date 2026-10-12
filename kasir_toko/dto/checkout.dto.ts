
import {
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CheckoutItemDto } from './checkout-item.dto.js';

export class CheckoutDto {
  @IsArray({ message: 'items harus berupa array' })
  @ArrayMinSize(1, {
    message: 'items tidak boleh kosong',
  })
  @ArrayMaxSize(10, {
    message: 'items maksimal 10 barang',
  })
  @ValidateNested({ each: true })
  @Type(() => CheckoutItemDto)
  items: CheckoutItemDto[];
}
