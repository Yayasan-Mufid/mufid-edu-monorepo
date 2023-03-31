import { z } from 'zod';
import { StudyGroupArgsObjectSchema } from './StudyGroupArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { InvoiceArgsObjectSchema } from './InvoiceArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantSelect> = z
  .object({
    study_group_id: z.boolean().optional(),
    study_group: z
      .union([z.boolean(), z.lazy(() => StudyGroupArgsObjectSchema)])
      .optional(),
    user_id: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    invoice_id: z.boolean().optional(),
    invoice: z
      .union([z.boolean(), z.lazy(() => InvoiceArgsObjectSchema)])
      .optional(),
    created_at: z.boolean().optional(),
  })
  .strict();

export const StudyGroupApplicantSelectObjectSchema = Schema;
