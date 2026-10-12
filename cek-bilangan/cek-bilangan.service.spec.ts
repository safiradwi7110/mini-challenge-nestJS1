import { Test, TestingModule } from '@nestjs/testing';
import { CekBilanganService } from './cek-bilangan.service.js';

describe('CekBilanganService', () => {
  let service: CekBilanganService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CekBilanganService],
    }).compile();

    service = module.get<CekBilanganService>(CekBilanganService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
