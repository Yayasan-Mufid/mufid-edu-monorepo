import { z } from 'zod';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceCreateWithoutApplicantInputObjectSchema } from './InvoiceCreateWithoutApplicantInput.schema';
import { InvoiceUncheckedCreateWithoutApplicantInputObjectSchema } from './InvoiceUncheckedCreateWithoutApplicantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutApplicantInput> = z
  .object({
    where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => InvoiceCreateWithoutApplicantInputObjectSchema),
      z.lazy(() => InvoiceUncheckedCreateWithoutApplicantInputObjectSchema),
    ]),
  })
  .strict();

export const InvoiceCreateOrConnectWithoutApplicantInputObjectSchema = Schema;
