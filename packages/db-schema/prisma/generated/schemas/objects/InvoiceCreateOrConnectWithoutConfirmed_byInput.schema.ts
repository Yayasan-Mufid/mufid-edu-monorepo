import { z } from 'zod';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceCreateWithoutConfirmed_byInputObjectSchema } from './InvoiceCreateWithoutConfirmed_byInput.schema';
import { InvoiceUncheckedCreateWithoutConfirmed_byInputObjectSchema } from './InvoiceUncheckedCreateWithoutConfirmed_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutConfirmed_byInput> =
  z
    .object({
      where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => InvoiceCreateWithoutConfirmed_byInputObjectSchema),
        z.lazy(
          () => InvoiceUncheckedCreateWithoutConfirmed_byInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InvoiceCreateOrConnectWithoutConfirmed_byInputObjectSchema =
  Schema;
