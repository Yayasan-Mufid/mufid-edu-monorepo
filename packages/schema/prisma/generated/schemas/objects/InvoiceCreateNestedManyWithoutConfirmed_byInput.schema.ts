import { z } from 'zod';
import { InvoiceCreateWithoutConfirmed_byInputObjectSchema } from './InvoiceCreateWithoutConfirmed_byInput.schema';
import { InvoiceUncheckedCreateWithoutConfirmed_byInputObjectSchema } from './InvoiceUncheckedCreateWithoutConfirmed_byInput.schema';
import { InvoiceCreateOrConnectWithoutConfirmed_byInputObjectSchema } from './InvoiceCreateOrConnectWithoutConfirmed_byInput.schema';
import { InvoiceCreateManyConfirmed_byInputEnvelopeObjectSchema } from './InvoiceCreateManyConfirmed_byInputEnvelope.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateNestedManyWithoutConfirmed_byInput> =
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
      createMany: z
        .lazy(() => InvoiceCreateManyConfirmed_byInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const InvoiceCreateNestedManyWithoutConfirmed_byInputObjectSchema =
  Schema;
