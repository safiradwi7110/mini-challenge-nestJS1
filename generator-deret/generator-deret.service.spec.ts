import { Test, TestingModule } from '@nestjs/testing';
import { GeneratorDeretService } from './generator-deret.service.js';

describe('GeneratorDeretService', () => {
  let service: GeneratorDeretService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneratorDeretService],
    }).compile();

    service = module.get<GeneratorDeretService>(GeneratorDeretService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
