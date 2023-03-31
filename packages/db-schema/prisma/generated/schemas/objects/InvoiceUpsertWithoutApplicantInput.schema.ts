import { z } from 'zod';
import { InvoiceUpdateWithoutApplicantInputObjectSchema } from './InvoiceUpdateWithoutApplicantInput.schema';
import { InvoiceUncheckedUpdateWithoutApplicantInputObjectSchema } from './InvoiceUncheckedUpdateWithoutApplicantInput.schema';
import { InvoiceCreateWithoutApplicantInputObjectSchema } from './InvoiceCreateWithoutApplicantInput.schema';
import { InvoiceUncheckedCreateWithoutApplicantInputObjectSchema } from './InvoiceUncheckedCreateWithoutApplicantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpsertWithoutApplicantInput> = z
  .object({
    update: z.union([
      z.lazy(() => InvoiceUpdateWithoutApplicantInputObjectSchema),
      z.lazy(() => InvoiceUncheckedUpdateWithoutApplicantInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => InvoiceCreateWithoutApplicantInputObjectSchema),
      z.lazy(() => InvoiceUncheckedCreateWithoutApplicantInputObjectSchema),
    ]),
  })
  .strict();

export const InvoiceUpsertWithoutApplicantInputObjectSchema = Schema;
