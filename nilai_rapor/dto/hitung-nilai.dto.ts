
import { Transform } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsArray,
  ArrayMinSize,
  IsNumber,
  Min,
  Max,
} from 'class-validator';

export class HitungNilaiDto {
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim() : value,
  )
  @IsString()
  @IsNotEmpty({ message: 'Nama tidak boleh kosong' })
  nama: string;

  @IsArray()
  @ArrayMinSize(1, {
    message: 'Tugas minimal berisi 1 angka',
  })
  @IsNumber(
    {},
    { each: true, message: 'Nilai tugas harus angka' },
  )
  @Min(0, { each: true })
  @Max(100, { each: true })
  tugas: number[];

  @IsNumber()
  @Min(0)
  @Max(100)
  uts: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  uas: number;
}
