import { z } from 'zod';
import { InvoiceCreateWithoutApplicantInputObjectSchema } from './InvoiceCreateWithoutApplicantInput.schema';
import { InvoiceUncheckedCreateWithoutApplicantInputObjectSchema } from './InvoiceUncheckedCreateWithoutApplicantInput.schema';
import { InvoiceCreateOrConnectWithoutApplicantInputObjectSchema } from './InvoiceCreateOrConnectWithoutApplicantInput.schema';
import { InvoiceUpsertWithoutApplicantInputObjectSchema } from './InvoiceUpsertWithoutApplicantInput.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithoutApplicantInputObjectSchema } from './InvoiceUpdateWithoutApplicantInput.schema';
import { InvoiceUncheckedUpdateWithoutApplicantInputObjectSchema } from './InvoiceUncheckedUpdateWithoutApplicantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpdateOneWithoutApplicantNestedInput> = z
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
    upsert: z
      .lazy(() => InvoiceUpsertWithoutApplicantInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => InvoiceWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => InvoiceUpdateWithoutApplicantInputObjectSchema),
        z.lazy(() => InvoiceUncheckedUpdateWithoutApplicantInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const InvoiceUpdateOneWithoutApplicantNestedInputObjectSchema = Schema;
