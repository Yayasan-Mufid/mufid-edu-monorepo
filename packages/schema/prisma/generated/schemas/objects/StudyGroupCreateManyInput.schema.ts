import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCreateManyInput> = z
  .object({
    id: z.string().optional(),
    gender: z.string(),
    name: z.string(),
    code: z.string(),
    module_id: z.string(),
    capacity: z.number(),
    enrollment_start: z.date(),
    enrollment_end: z.date(),
    active_start: z.date(),
    active_end: z.date(),
    logo_url: z.string(),
    invoice_amount: z.number(),
    invoice_title: z.string(),
    invoice_account_id: z.string(),
    use_schedule: z.boolean().optional().nullable(),
    application_note: z.string().optional().nullable(),
  })
  .strict();

export const StudyGroupCreateManyInputObjectSchema = Schema;
