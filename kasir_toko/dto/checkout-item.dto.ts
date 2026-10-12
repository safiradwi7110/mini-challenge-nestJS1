
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsInt,
  Min,
  Max,
} from 'class-validator';

export class CheckoutItemDto {
  @IsString({ message: 'nama harus berupa string' })
  @IsNotEmpty({ message: 'nama tidak boleh kosong' })
  nama: string;

  @IsNumber(
    {},
    { message: 'harga harus berupa angka' },
  )
  @Min(0.01, {
    message: 'harga harus lebih dari 0',
  })
  harga: number;

  @IsInt({
    message: 'qty harus bilangan bulat lebih dari 0',
  })
  @Min(1, {
    message: 'qty harus bilangan bulat lebih dari 0',
  })
  qty: number;
}
