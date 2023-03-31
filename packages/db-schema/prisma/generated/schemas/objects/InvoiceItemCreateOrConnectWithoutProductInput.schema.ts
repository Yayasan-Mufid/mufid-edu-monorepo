import { z } from 'zod';
import { InvoiceItemWhereUniqueInputObjectSchema } from './InvoiceItemWhereUniqueInput.schema';
import { InvoiceItemCreateWithoutProductInputObjectSchema } from './InvoiceItemCreateWithoutProductInput.schema';
import { InvoiceItemUncheckedCreateWithoutProductInputObjectSchema } from './InvoiceItemUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemCreateOrConnectWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => InvoiceItemCreateWithoutProductInputObjectSchema),
        z.lazy(() => InvoiceItemUncheckedCreateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const InvoiceItemCreateOrConnectWithoutProductInputObjectSchema = Schema;
