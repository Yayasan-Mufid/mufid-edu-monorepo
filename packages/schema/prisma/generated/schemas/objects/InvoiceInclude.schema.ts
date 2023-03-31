import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { PaymentAccountArgsObjectSchema } from './PaymentAccountArgs.schema';
import { InvoiceItemFindManySchema } from '../findManyInvoiceItem.schema';
import { StudyGroupApplicantArgsObjectSchema } from './StudyGroupApplicantArgs.schema';
import { InvoiceCountOutputTypeArgsObjectSchema } from './InvoiceCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    account: z
      .union([z.boolean(), z.lazy(() => PaymentAccountArgsObjectSchema)])
      .optional(),
    confirmed_by: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    items: z
      .union([z.boolean(), z.lazy(() => InvoiceItemFindManySchema)])
      .optional(),
    applicant: z
      .union([z.boolean(), z.lazy(() => StudyGroupApplicantArgsObjectSchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => InvoiceCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const InvoiceIncludeObjectSchema = Schema;
