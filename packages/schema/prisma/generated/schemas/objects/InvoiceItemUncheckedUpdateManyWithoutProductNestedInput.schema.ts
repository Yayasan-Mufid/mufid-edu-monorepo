import { z } from 'zod';
import { InvoiceItemCreateWithoutProductInputObjectSchema } from './InvoiceItemCreateWithoutProductInput.schema';
import { InvoiceItemUncheckedCreateWithoutProductInputObjectSchema } from './InvoiceItemUncheckedCreateWithoutProductInput.schema';
import { InvoiceItemCreateOrConnectWithoutProductInputObjectSchema } from './InvoiceItemCreateOrConnectWithoutProductInput.schema';
import { InvoiceItemUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './InvoiceItemUpsertWithWhereUniqueWithoutProductInput.schema';
import { InvoiceItemCreateManyProductInputEnvelopeObjectSchema } from './InvoiceItemCreateManyProductInputEnvelope.schema';
import { InvoiceItemWhereUniqueInputObjectSchema } from './InvoiceItemWhereUniqueInput.schema';
import { InvoiceItemUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './InvoiceItemUpdateWithWhereUniqueWithoutProductInput.schema';
import { InvoiceItemUpdateManyWithWhereWithoutProductInputObjectSchema } from './InvoiceItemUpdateManyWithWhereWithoutProductInput.schema';
import { InvoiceItemScalarWhereInputObjectSchema } from './InvoiceItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemUncheckedUpdateManyWithoutProductNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              InvoiceItemUpsertWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InvoiceItemUpsertWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => InvoiceItemCreateManyProductInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              InvoiceItemUpdateWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InvoiceItemUpdateWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => InvoiceItemUpdateManyWithWhereWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InvoiceItemUpdateManyWithWhereWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => InvoiceItemScalarWhereInputObjectSchema),
          z.lazy(() => InvoiceItemScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const InvoiceItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema =
  Schema;
