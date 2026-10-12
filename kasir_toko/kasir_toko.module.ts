
import { Module } from '@nestjs/common';
import { KasirTokoController } from './kasir_toko.controller.js';
import { KasirTokoService } from './kasir_toko.service.js';

@Module({
  controllers: [KasirTokoController],
  providers: [KasirTokoService],
})
export class KasirTokoModule {}
