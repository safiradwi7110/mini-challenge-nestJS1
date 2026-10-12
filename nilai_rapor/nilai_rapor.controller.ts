import { Controller, Post, Body, HttpCode, ValidationPipe,} from '@nestjs/common';
import { NilaiRaporService } from './nilai_rapor.service.js';
import { HitungNilaiDto } from './dto/hitung-nilai.dto.js';

@Controller('nilai')
export class NilaiRaporController {
  constructor(
    private readonly nilaiRaporService: NilaiRaporService,
  ) {}

  @Post('hitung')
  @HttpCode(200)
  hitung(
    @Body(new ValidationPipe({ transform: true }))
    body: HitungNilaiDto,
  ) {
    return this.nilaiRaporService.hitungNilai(body);
  }
}


