import { Test, TestingModule } from '@nestjs/testing';
import { KasirTokoService } from './kasir_toko.service.js';

describe('KasirTokoService', () => {
  let service: KasirTokoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KasirTokoService],
    }).compile();

    service = module.get<KasirTokoService>(KasirTokoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
