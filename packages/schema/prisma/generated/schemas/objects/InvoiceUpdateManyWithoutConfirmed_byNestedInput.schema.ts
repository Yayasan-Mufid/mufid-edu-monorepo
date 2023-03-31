import { z } from 'zod';
import { InvoiceCreateWithoutConfirmed_byInputObjectSchema } from './InvoiceCreateWithoutConfirmed_byInput.schema';
import { InvoiceUncheckedCreateWithoutConfirmed_byInputObjectSchema } from './InvoiceUncheckedCreateWithoutConfirmed_byInput.schema';
import { InvoiceCreateOrConnectWithoutConfirmed_byInputObjectSchema } from './InvoiceCreateOrConnectWithoutConfirmed_byInput.schema';
import { InvoiceUpsertWithWhereUniqueWithoutConfirmed_byInputObjectSchema } from './InvoiceUpsertWithWhereUniqueWithoutConfirmed_byInput.schema';
import { InvoiceCreateManyConfirmed_byInputEnvelopeObjectSchema } from './InvoiceCreateManyConfirmed_byInputEnvelope.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithWhereUniqueWithoutConfirmed_byInputObjectSchema } from './InvoiceUpdateWithWhereUniqueWithoutConfirmed_byInput.schema';
import { InvoiceUpdateManyWithWhereWithoutConfirmed_byInputObjectSchema } from './InvoiceUpdateManyWithWhereWithoutConfirmed_byInput.schema';
import { InvoiceScalarWhereInputObjectSchema } from './InvoiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpdateManyWithoutConfirmed_byNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InvoiceCreateWithoutConfirmed_byInputObjectSchema),
          z
            .lazy(() => InvoiceCreateWithoutConfirmed_byInputObjectSchema)
            .array(),
          z.lazy(
            () => InvoiceUncheckedCreateWithoutConfirmed_byInputObjectSchema,
          ),
          z
            .lazy(
              () => InvoiceUncheckedCreateWithoutConfirmed_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => InvoiceCreateOrConnectWithoutConfirmed_byInputObjectSchema,
          ),
          z
            .lazy(
              () => InvoiceCreateOrConnectWithoutConfirmed_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              InvoiceUpsertWithWhereUniqueWithoutConfirmed_byInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InvoiceUpsertWithWhereUniqueWithoutConfirmed_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => InvoiceCreateManyConfirmed_byInputEnvelopeObjectSchema)
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
            () =>
              InvoiceUpdateWithWhereUniqueWithoutConfirmed_byInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InvoiceUpdateWithWhereUniqueWithoutConfirmed_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              InvoiceUpdateManyWithWhereWithoutConfirmed_byInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InvoiceUpdateManyWithWhereWithoutConfirmed_byInputObjectSchema,
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

export const InvoiceUpdateManyWithoutConfirmed_byNestedInputObjectSchema =
  Schema;
