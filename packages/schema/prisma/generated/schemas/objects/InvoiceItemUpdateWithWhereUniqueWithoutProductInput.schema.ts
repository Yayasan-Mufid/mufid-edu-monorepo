import { z } from 'zod';
import { InvoiceItemWhereUniqueInputObjectSchema } from './InvoiceItemWhereUniqueInput.schema';
import { InvoiceItemUpdateWithoutProductInputObjectSchema } from './InvoiceItemUpdateWithoutProductInput.schema';
import { InvoiceItemUncheckedUpdateWithoutProductInputObjectSchema } from './InvoiceItemUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => InvoiceItemUpdateWithoutProductInputObjectSchema),
        z.lazy(() => InvoiceItemUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const InvoiceItemUpdateWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
