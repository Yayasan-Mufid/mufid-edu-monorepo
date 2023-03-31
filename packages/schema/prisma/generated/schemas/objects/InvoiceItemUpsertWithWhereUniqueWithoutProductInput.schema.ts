import { z } from 'zod';
import { InvoiceItemWhereUniqueInputObjectSchema } from './InvoiceItemWhereUniqueInput.schema';
import { InvoiceItemUpdateWithoutProductInputObjectSchema } from './InvoiceItemUpdateWithoutProductInput.schema';
import { InvoiceItemUncheckedUpdateWithoutProductInputObjectSchema } from './InvoiceItemUncheckedUpdateWithoutProductInput.schema';
import { InvoiceItemCreateWithoutProductInputObjectSchema } from './InvoiceItemCreateWithoutProductInput.schema';
import { InvoiceItemUncheckedCreateWithoutProductInputObjectSchema } from './InvoiceItemUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => InvoiceItemUpdateWithoutProductInputObjectSchema),
        z.lazy(() => InvoiceItemUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => InvoiceItemCreateWithoutProductInputObjectSchema),
        z.lazy(() => InvoiceItemUncheckedCreateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const InvoiceItemUpsertWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
