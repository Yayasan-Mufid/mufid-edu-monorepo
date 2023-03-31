import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutInvoice_itemsInputObjectSchema } from './ProductCreateWithoutInvoice_itemsInput.schema';
import { ProductUncheckedCreateWithoutInvoice_itemsInputObjectSchema } from './ProductUncheckedCreateWithoutInvoice_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutInvoice_itemsInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductCreateWithoutInvoice_itemsInputObjectSchema),
        z.lazy(
          () => ProductUncheckedCreateWithoutInvoice_itemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductCreateOrConnectWithoutInvoice_itemsInputObjectSchema =
  Schema;
