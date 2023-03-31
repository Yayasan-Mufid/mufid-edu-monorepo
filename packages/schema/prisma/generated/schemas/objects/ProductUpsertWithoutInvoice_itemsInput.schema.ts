import { z } from 'zod';
import { ProductUpdateWithoutInvoice_itemsInputObjectSchema } from './ProductUpdateWithoutInvoice_itemsInput.schema';
import { ProductUncheckedUpdateWithoutInvoice_itemsInputObjectSchema } from './ProductUncheckedUpdateWithoutInvoice_itemsInput.schema';
import { ProductCreateWithoutInvoice_itemsInputObjectSchema } from './ProductCreateWithoutInvoice_itemsInput.schema';
import { ProductUncheckedCreateWithoutInvoice_itemsInputObjectSchema } from './ProductUncheckedCreateWithoutInvoice_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithoutInvoice_itemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutInvoice_itemsInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutInvoice_itemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutInvoice_itemsInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutInvoice_itemsInputObjectSchema),
    ]),
  })
  .strict();

export const ProductUpsertWithoutInvoice_itemsInputObjectSchema = Schema;
