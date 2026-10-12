import { Injectable,BadRequestException } from '@nestjs/common';

@Injectable()
export class KonversiSuhuService {

    // Soal 2: Konversi Suhu
      konversiSuhu(nilaiParam: string, dari: string, ke: string) {
        // Validasi query wajib diisi
        if (nilaiParam === undefined || dari === undefined || ke === undefined) {
          throw new BadRequestException(
            'Query nilai, dari, dan ke wajib diisi',
          );
        }
    
        const nilai = Number(nilaiParam);
        const satuanValid = ['celsius', 'fahrenheit', 'kelvin'];
    
        // Validasi nilai dan satuan
        if (!Number.isFinite(nilai)) {
          throw new BadRequestException('Nilai harus berupa angka');
        }
    
        if (
          !satuanValid.includes(dari) ||
          !satuanValid.includes(ke)
        ) {
          throw new BadRequestException(
            'Satuan harus celsius, fahrenheit, atau kelvin',
          );
        }
    
        if (dari === ke) {
          throw new BadRequestException(
            'Satuan asal dan tujuan tidak boleh sama',
          );
        }
    
        if (dari === 'kelvin' && nilai < 0) {
          throw new BadRequestException(
            'Nilai Kelvin tidak boleh kurang dari 0',
          );
        }
    
        // Ubah satuan asal menjadi Celsius
        let celsius: number;
    
        if (dari === 'celsius') {
          celsius = nilai;
        } else if (dari === 'fahrenheit') {
          celsius = (nilai - 32) * 5 / 9;
        } else {
          celsius = nilai - 273.15;
        }
    
        // Ubah Celsius menjadi satuan tujuan
        let hasil: number;
    
        if (ke === 'celsius') {
          hasil = celsius;
        } else if (ke === 'fahrenheit') {
          hasil = celsius * 9 / 5 + 32;
        } else {
          hasil = celsius + 273.15;
        }
    
        // Bulatkan maksimal 2 angka di belakang koma
        hasil = Math.round((hasil + Number.EPSILON) * 100) / 100;
    
        return {
          nilaiAsal: nilai,
          satuanAsal: dari,
          hasil,
          satuanHasil: ke,
        };
      }
}
