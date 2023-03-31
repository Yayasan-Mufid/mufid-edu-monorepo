import { z } from 'zod';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithoutConfirmed_byInputObjectSchema } from './InvoiceUpdateWithoutConfirmed_byInput.schema';
import { InvoiceUncheckedUpdateWithoutConfirmed_byInputObjectSchema } from './InvoiceUncheckedUpdateWithoutConfirmed_byInput.schema';
import { InvoiceCreateWithoutConfirmed_byInputObjectSchema } from './InvoiceCreateWithoutConfirmed_byInput.schema';
import { InvoiceUncheckedCreateWithoutConfirmed_byInputObjectSchema } from './InvoiceUncheckedCreateWithoutConfirmed_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpsertWithWhereUniqueWithoutConfirmed_byInput> =
  z
    .object({
      where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => InvoiceUpdateWithoutConfirmed_byInputObjectSchema),
        z.lazy(
          () => InvoiceUncheckedUpdateWithoutConfirmed_byInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => InvoiceCreateWithoutConfirmed_byInputObjectSchema),
        z.lazy(
          () => InvoiceUncheckedCreateWithoutConfirmed_byInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InvoiceUpsertWithWhereUniqueWithoutConfirmed_byInputObjectSchema =
  Schema;
