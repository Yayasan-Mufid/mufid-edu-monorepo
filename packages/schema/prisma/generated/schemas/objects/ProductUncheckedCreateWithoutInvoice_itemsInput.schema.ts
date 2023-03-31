import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedCreateWithoutInvoice_itemsInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string(),
      description: z.string(),
      unit_price: z.number(),
    })
    .strict();

export const ProductUncheckedCreateWithoutInvoice_itemsInputObjectSchema =
  Schema;
