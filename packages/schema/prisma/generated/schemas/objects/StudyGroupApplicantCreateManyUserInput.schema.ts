import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantCreateManyUserInput> = z
  .object({
    study_group_id: z.string(),
    invoice_id: z.string().optional().nullable(),
    created_at: z.date().optional(),
  })
  .strict();

export const StudyGroupApplicantCreateManyUserInputObjectSchema = Schema;
