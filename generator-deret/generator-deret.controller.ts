import { Controller, BadRequestException, Get, Param, Query } from '@nestjs/common';
import { GeneratorDeretService } from './generator-deret.service.js';

@Controller('generator-deret')
export class GeneratorDeretController {
  constructor(private readonly generatorDeretService: GeneratorDeretService) {}

  // Soal 3: Generator Deret Bilangan
    @Get('deret/:jenis')
    getDeret(
      @Param('jenis') jenis: string,
      @Query('jumlah') jumlah: string,
      @Query('urutan') urutan: string = 'asc',
    ) {
      const jenisValid = ['ganjil', 'genap', 'kuadrat'];
  
      const jumlahNumber = Number(jumlah);
  
      if (!jenisValid.includes(jenis)) {
        throw new BadRequestException(
          'Jenis harus ganjil, genap, atau kuadrat',
        );
      }
  
      if (
        !Number.isInteger(jumlahNumber) ||
        jumlahNumber < 1 ||
        jumlahNumber > 20
      ) {
        throw new BadRequestException(
          'Jumlah harus bilangan bulat dari 1 sampai 20',
        );
      }
  
      if (!['asc', 'desc'].includes(urutan)) {
        throw new BadRequestException(
          'Urutan harus asc atau desc',
        );
      }
  
      const data: number[] = [];
      let total = 0;
  
      for (let i = 1; i <= jumlahNumber; i++) {
        let nilai: number;
  
        if (jenis === 'ganjil') {
          nilai = 2 * i - 1;
        } else if (jenis === 'genap') {
          nilai = 2 * i;
        } else {
          nilai = i * i;
        }
  
        data.push(nilai);
        total += nilai;
      }
  
      if (urutan === 'desc') {
        data.reverse();
      }
  
      return {
        jenis,
        jumlah: jumlahNumber,
        data,
        total,
      };
    }
  }
  
  
  
  
  
