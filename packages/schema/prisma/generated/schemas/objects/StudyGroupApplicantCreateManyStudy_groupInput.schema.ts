import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantCreateManyStudy_groupInput> =
  z
    .object({
      user_id: z.string(),
      invoice_id: z.string().optional().nullable(),
      created_at: z.date().optional(),
    })
    .strict();

export const StudyGroupApplicantCreateManyStudy_groupInputObjectSchema = Schema;
