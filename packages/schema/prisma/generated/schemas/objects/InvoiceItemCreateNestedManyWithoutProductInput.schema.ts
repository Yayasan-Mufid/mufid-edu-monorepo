import { z } from 'zod';
import { InvoiceItemCreateWithoutProductInputObjectSchema } from './InvoiceItemCreateWithoutProductInput.schema';
import { InvoiceItemUncheckedCreateWithoutProductInputObjectSchema } from './InvoiceItemUncheckedCreateWithoutProductInput.schema';
import { InvoiceItemCreateOrConnectWithoutProductInputObjectSchema } from './InvoiceItemCreateOrConnectWithoutProductInput.schema';
import { InvoiceItemCreateManyProductInputEnvelopeObjectSchema } from './InvoiceItemCreateManyProductInputEnvelope.schema';
import { InvoiceItemWhereUniqueInputObjectSchema } from './InvoiceItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemCreateNestedManyWithoutProductInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InvoiceItemCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => InvoiceItemCreateWithoutProductInputObjectSchema)
            .array(),
          z.lazy(
            () => InvoiceItemUncheckedCreateWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => InvoiceItemUncheckedCreateWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => InvoiceItemCreateOrConnectWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => InvoiceItemCreateOrConnectWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => InvoiceItemCreateManyProductInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const InvoiceItemCreateNestedManyWithoutProductInputObjectSchema =
  Schema;
