import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class CekBilanganService {

    cekBilangan(angkaParam: string) {
        const angka = Number(angkaParam);
    
        if (
          !Number.isInteger(angka) ||
          angka < 1 ||
          angka > 100
        ) {
          throw new BadRequestException(
            'Angka harus berupa bilangan bulat antara 1 sampai 100',
          );
        }
    
        const jenis = angka % 2 === 0 ? 'genap' : 'ganjil';
        const kuadrat = angka * angka;
        const kelipatanLima = angka % 5 === 0;
    
        return {
          angka,
          jenis,
          kuadrat,
          kelipatanLima,
        };
      }
}
