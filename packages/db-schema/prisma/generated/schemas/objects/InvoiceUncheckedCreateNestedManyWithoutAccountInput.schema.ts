import { z } from 'zod';
import { InvoiceCreateWithoutAccountInputObjectSchema } from './InvoiceCreateWithoutAccountInput.schema';
import { InvoiceUncheckedCreateWithoutAccountInputObjectSchema } from './InvoiceUncheckedCreateWithoutAccountInput.schema';
import { InvoiceCreateOrConnectWithoutAccountInputObjectSchema } from './InvoiceCreateOrConnectWithoutAccountInput.schema';
import { InvoiceCreateManyAccountInputEnvelopeObjectSchema } from './InvoiceCreateManyAccountInputEnvelope.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUncheckedCreateNestedManyWithoutAccountInput> =
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
      createMany: z
        .lazy(() => InvoiceCreateManyAccountInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const InvoiceUncheckedCreateNestedManyWithoutAccountInputObjectSchema =
  Schema;
