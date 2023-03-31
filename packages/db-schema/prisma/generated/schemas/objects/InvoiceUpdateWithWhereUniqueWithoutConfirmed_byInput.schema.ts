import { z } from 'zod';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithoutConfirmed_byInputObjectSchema } from './InvoiceUpdateWithoutConfirmed_byInput.schema';
import { InvoiceUncheckedUpdateWithoutConfirmed_byInputObjectSchema } from './InvoiceUncheckedUpdateWithoutConfirmed_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpdateWithWhereUniqueWithoutConfirmed_byInput> =
  z
    .object({
      where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => InvoiceUpdateWithoutConfirmed_byInputObjectSchema),
        z.lazy(
          () => InvoiceUncheckedUpdateWithoutConfirmed_byInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InvoiceUpdateWithWhereUniqueWithoutConfirmed_byInputObjectSchema =
  Schema;
