import { Test, TestingModule } from '@nestjs/testing';
import { KonversiSuhuService } from './konversi-suhu.service.js';

describe('KonversiSuhuService', () => {
  let service: KonversiSuhuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KonversiSuhuService],
    }).compile();

    service = module.get<KonversiSuhuService>(KonversiSuhuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
