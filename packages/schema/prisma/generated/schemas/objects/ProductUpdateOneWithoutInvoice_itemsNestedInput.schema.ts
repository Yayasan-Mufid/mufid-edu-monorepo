import { z } from 'zod';
import { ProductCreateWithoutInvoice_itemsInputObjectSchema } from './ProductCreateWithoutInvoice_itemsInput.schema';
import { ProductUncheckedCreateWithoutInvoice_itemsInputObjectSchema } from './ProductUncheckedCreateWithoutInvoice_itemsInput.schema';
import { ProductCreateOrConnectWithoutInvoice_itemsInputObjectSchema } from './ProductCreateOrConnectWithoutInvoice_itemsInput.schema';
import { ProductUpsertWithoutInvoice_itemsInputObjectSchema } from './ProductUpsertWithoutInvoice_itemsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutInvoice_itemsInputObjectSchema } from './ProductUpdateWithoutInvoice_itemsInput.schema';
import { ProductUncheckedUpdateWithoutInvoice_itemsInputObjectSchema } from './ProductUncheckedUpdateWithoutInvoice_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateOneWithoutInvoice_itemsNestedInput> =
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
      upsert: z
        .lazy(() => ProductUpsertWithoutInvoice_itemsInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithoutInvoice_itemsInputObjectSchema),
          z.lazy(
            () => ProductUncheckedUpdateWithoutInvoice_itemsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ProductUpdateOneWithoutInvoice_itemsNestedInputObjectSchema =
  Schema;
