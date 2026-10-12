import { Module } from '@nestjs/common';
import { GeneratorDeretService } from './generator-deret.service.js';
import { GeneratorDeretController } from './generator-deret.controller.js';

@Module({
  controllers: [GeneratorDeretController],
  providers: [GeneratorDeretService],
})
export class GeneratorDeretModule {}
