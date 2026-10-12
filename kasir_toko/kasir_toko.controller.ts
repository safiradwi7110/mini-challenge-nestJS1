
import {Controller, Post,Param,Query,Body,HttpCode,ValidationPipe,BadRequestException,ValidationError,} from '@nestjs/common';
import { KasirTokoService } from './kasir_toko.service.js';
import { CheckoutDto } from './dto/checkout.dto.js';

function formatErrors(
  errors: ValidationError[],
  prefix = '',
): string[] {
  return errors.flatMap((error) => {
    const path = prefix
      ? `${prefix}.${error.property}`
      : error.property;

    const messages = Object.values(
      error.constraints ?? {},
    ).map((message) => {
      const match = path.match(/^items\.(\d+)\./);

      return match
        ? `Item ke-${Number(match[1]) + 1}: ${message}`
        : message;
    });

    return [
      ...messages,
      ...formatErrors(error.children ?? [], path),
    ];
  });
}

@Controller('kasir')
export class KasirTokoController {
  constructor(
    private readonly kasirTokoService: KasirTokoService,
  ) {}

  @Post('checkout/:member')
  @HttpCode(200)
  checkout(
    @Param('member') member: string,
    @Query('metode') metode: string,
    @Body(
      new ValidationPipe({
        transform: true,
        exceptionFactory: (errors) =>
          new BadRequestException(formatErrors(errors)),
      }),
    )
    body: CheckoutDto,
  ) {
    return this.kasirTokoService.checkout(
      member,
      metode,
      body,
    );
  }
}
