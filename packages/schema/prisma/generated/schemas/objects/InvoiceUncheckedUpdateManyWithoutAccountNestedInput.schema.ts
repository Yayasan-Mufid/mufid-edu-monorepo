import { z } from 'zod';
import { InvoiceCreateWithoutAccountInputObjectSchema } from './InvoiceCreateWithoutAccountInput.schema';
import { InvoiceUncheckedCreateWithoutAccountInputObjectSchema } from './InvoiceUncheckedCreateWithoutAccountInput.schema';
import { InvoiceCreateOrConnectWithoutAccountInputObjectSchema } from './InvoiceCreateOrConnectWithoutAccountInput.schema';
import { InvoiceUpsertWithWhereUniqueWithoutAccountInputObjectSchema } from './InvoiceUpsertWithWhereUniqueWithoutAccountInput.schema';
import { InvoiceCreateManyAccountInputEnvelopeObjectSchema } from './InvoiceCreateManyAccountInputEnvelope.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithWhereUniqueWithoutAccountInputObjectSchema } from './InvoiceUpdateWithWhereUniqueWithoutAccountInput.schema';
import { InvoiceUpdateManyWithWhereWithoutAccountInputObjectSchema } from './InvoiceUpdateManyWithWhereWithoutAccountInput.schema';
import { InvoiceScalarWhereInputObjectSchema } from './InvoiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUncheckedUpdateManyWithoutAccountNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InvoiceCreateWithoutAccountInputObjectSchema),
          z.lazy(() => InvoiceCreateWithoutAccountInputObjectSchema).array(),
          z.lazy(() => InvoiceUncheckedCreateWithoutAccountInputObjectSchema),
          z
            .lazy(() => InvoiceUncheckedCreateWithoutAccountInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => InvoiceCreateOrConnectWithoutAccountInputObjectSchema),
          z
            .lazy(() => InvoiceCreateOrConnectWithoutAccountInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => InvoiceUpsertWithWhereUniqueWithoutAccountInputObjectSchema,
          ),
          z
            .lazy(
              () => InvoiceUpsertWithWhereUniqueWithoutAccountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => InvoiceCreateManyAccountInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => InvoiceUpdateWithWhereUniqueWithoutAccountInputObjectSchema,
          ),
          z
            .lazy(
              () => InvoiceUpdateWithWhereUniqueWithoutAccountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => InvoiceUpdateManyWithWhereWithoutAccountInputObjectSchema,
          ),
          z
            .lazy(
              () => InvoiceUpdateManyWithWhereWithoutAccountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => InvoiceScalarWhereInputObjectSchema),
          z.lazy(() => InvoiceScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const InvoiceUncheckedUpdateManyWithoutAccountNestedInputObjectSchema =
  Schema;
