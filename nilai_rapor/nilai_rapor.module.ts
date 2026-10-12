
import { Module } from '@nestjs/common';
import { NilaiRaporController } from './nilai_rapor.controller.js';
import { NilaiRaporService } from './nilai_rapor.service.js';

@Module({
  controllers: [NilaiRaporController],
  providers: [NilaiRaporService],
})
export class NilaiRaporModule {}
