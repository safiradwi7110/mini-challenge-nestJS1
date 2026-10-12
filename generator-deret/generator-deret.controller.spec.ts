import { Test, TestingModule } from '@nestjs/testing';
import { GeneratorDeretController } from './generator-deret.controller.js';
import { GeneratorDeretService } from './generator-deret.service.js';

describe('GeneratorDeretController', () => {
  let controller: GeneratorDeretController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneratorDeretController],
      providers: [GeneratorDeretService],
    }).compile();

    controller = module.get<GeneratorDeretController>(GeneratorDeretController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
