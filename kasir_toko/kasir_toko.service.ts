
import { Injectable,BadRequestException,} from '@nestjs/common';
import { CheckoutDto } from './dto/checkout.dto.js';

@Injectable()
export class KasirTokoService {
  checkout(
    member: string,
    metode: string,
    body: CheckoutDto,
  ) {
    // Validasi member
    const memberValid = ['reguler', 'silver', 'gold'];

    if (!memberValid.includes(member)) {
      throw new BadRequestException(
        'Member harus reguler, silver, atau gold',
      );
    }

    // Validasi metode pembayaran
    if (!['tunai', 'qris'].includes(metode)) {
      throw new BadRequestException(
        'Metode pembayaran harus tunai atau qris',
      );
    }

    // Validasi item dengan nomor urut
    body.items.forEach((item, index) => {
      if (
        typeof item.nama !== 'string' ||
        item.nama.trim() === ''
      ) {
        throw new BadRequestException(
          `Item ke-${index + 1}: nama tidak boleh kosong`,
        );
      }

      if (
        typeof item.harga !== 'number' ||
        !Number.isFinite(item.harga) ||
        item.harga <= 0
      ) {
        throw new BadRequestException(
          `Item ke-${index + 1}: harga harus angka lebih dari 0`,
        );
      }

      if (
        !Number.isInteger(item.qty) ||
        item.qty <= 0
      ) {
        throw new BadRequestException(
          `Item ke-${index + 1}: qty harus bilangan bulat lebih dari 0`,
        );
      }
    });

    // Hitung subtotal setiap barang
    const rincian = body.items.map((item) => ({
      nama: item.nama.trim(),
      harga: item.harga,
      qty: item.qty,
      subtotal: item.harga * item.qty,
    }));

    // Hitung subtotal keseluruhan dan total qty
    const subtotal = rincian.reduce(
      (total, item) => total + item.subtotal,
      0,
    );

    const totalItem = rincian.reduce(
      (total, item) => total + item.qty,
      0,
    );

    // Diskon member
    let persenDiskon = 0;

    if (member === 'silver') {
      persenDiskon = 5;
    } else if (member === 'gold') {
      persenDiskon = 10;
    }

    const diskon = Math.round(
      subtotal * persenDiskon / 100,
    );

    // Biaya admin QRIS 1% setelah diskon
    const dasarAdmin = subtotal - diskon;
    const biayaAdmin =
      metode === 'qris'
        ? Math.round(dasarAdmin / 100)
        : 0;

    const totalBayar =
      dasarAdmin + biayaAdmin;

    return {
      member,
      metode,
      rincian,
      totalItem,
      subtotal,
      diskon,
      biayaAdmin,
      totalBayar,
    };
  }
}
