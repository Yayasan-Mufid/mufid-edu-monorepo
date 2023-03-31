import { z } from 'zod';
import { ProductCreateWithoutInvoice_itemsInputObjectSchema } from './ProductCreateWithoutInvoice_itemsInput.schema';
import { ProductUncheckedCreateWithoutInvoice_itemsInputObjectSchema } from './ProductUncheckedCreateWithoutInvoice_itemsInput.schema';
import { ProductCreateOrConnectWithoutInvoice_itemsInputObjectSchema } from './ProductCreateOrConnectWithoutInvoice_itemsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutInvoice_itemsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutInvoice_itemsInputObjectSchema),
          z.lazy(
            () => ProductUncheckedCreateWithoutInvoice_itemsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProductCreateOrConnectWithoutInvoice_itemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ProductCreateNestedOneWithoutInvoice_itemsInputObjectSchema =
  Schema;
