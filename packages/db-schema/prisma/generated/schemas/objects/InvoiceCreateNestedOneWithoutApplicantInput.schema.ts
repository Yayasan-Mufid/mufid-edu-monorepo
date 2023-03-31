import { z } from 'zod';
import { InvoiceCreateWithoutApplicantInputObjectSchema } from './InvoiceCreateWithoutApplicantInput.schema';
import { InvoiceUncheckedCreateWithoutApplicantInputObjectSchema } from './InvoiceUncheckedCreateWithoutApplicantInput.schema';
import { InvoiceCreateOrConnectWithoutApplicantInputObjectSchema } from './InvoiceCreateOrConnectWithoutApplicantInput.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateNestedOneWithoutApplicantInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => InvoiceCreateWithoutApplicantInputObjectSchema),
        z.lazy(() => InvoiceUncheckedCreateWithoutApplicantInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => InvoiceCreateOrConnectWithoutApplicantInputObjectSchema)
      .optional(),
    connect: z.lazy(() => InvoiceWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const InvoiceCreateNestedOneWithoutApplicantInputObjectSchema = Schema;
