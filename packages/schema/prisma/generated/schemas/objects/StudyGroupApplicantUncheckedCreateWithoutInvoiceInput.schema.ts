import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantUncheckedCreateWithoutInvoiceInput> =
  z
    .object({
      study_group_id: z.string(),
      user_id: z.string(),
      created_at: z.date().optional(),
    })
    .strict();

export const StudyGroupApplicantUncheckedCreateWithoutInvoiceInputObjectSchema =
  Schema;
