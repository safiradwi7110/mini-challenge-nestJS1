import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class GeneratorDeretService {

// Soal 3 generator deret bilangan 
      getDeret(
        jenis: string,
        jumlah: number,
        urutan: string = 'asc',
      ) {
        const jenisValid = ['ganjil', 'genap', 'kuadrat'];
    
        if (!jenisValid.includes(jenis)) {
          throw new BadRequestException(
            'Jenis harus ganjil, genap, atau kuadrat',
          );
        }
    
        if (
          !Number.isInteger(jumlah) ||
          jumlah < 1 ||
          jumlah > 20
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
    
        for (let i = 1; i <= jumlah; i++) {
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
          jumlah,
          data,
          total,
        };
      }
    }
    
    
