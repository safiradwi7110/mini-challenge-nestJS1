import { Injectable } from '@nestjs/common';
import { HitungNilaiDto } from './dto/hitung-nilai.dto.js';

@Injectable()
export class NilaiRaporService {
  hitungNilai(body: HitungNilaiDto) {
    const { nama, tugas, uts, uas } = body;

    const rataTugas =
      tugas.reduce((total, nilai) => total + nilai, 0) /
      tugas.length;

    const nilaiAkhir = Number(
      (
        0.3 * rataTugas +
        0.3 * uts +
        0.4 * uas
      ).toFixed(2),
    );

    let predikat: string;

    if (nilaiAkhir >= 90) {
      predikat = 'A';
    } else if (nilaiAkhir >= 80) {
      predikat = 'B';
    } else if (nilaiAkhir >= 70) {
      predikat = 'C';
    } else {
      predikat = 'D';
    }

    const status =
      nilaiAkhir >= 75 ? 'Lulus' : 'Remedial';

    return {
      nama,
      rataTugas: Number(rataTugas.toFixed(2)),
      nilaiAkhir,
      predikat,
      status,
  };
}
}
