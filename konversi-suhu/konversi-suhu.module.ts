import { Module } from '@nestjs/common';
import { KonversiSuhuService } from './konversi-suhu.service.js';
import { KonversiSuhuController } from './konversi-suhu.controller.js';

@Module({
  controllers: [KonversiSuhuController],
  providers: [KonversiSuhuService],
})
export class KonversiSuhuModule {}
