import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    gender: z.literal(true).optional(),
    name: z.literal(true).optional(),
    code: z.literal(true).optional(),
    module_id: z.literal(true).optional(),
    capacity: z.literal(true).optional(),
    enrollment_start: z.literal(true).optional(),
    enrollment_end: z.literal(true).optional(),
    active_start: z.literal(true).optional(),
    active_end: z.literal(true).optional(),
    logo_url: z.literal(true).optional(),
    invoice_amount: z.literal(true).optional(),
    invoice_title: z.literal(true).optional(),
    invoice_account_id: z.literal(true).optional(),
    use_schedule: z.literal(true).optional(),
    application_note: z.literal(true).optional(),
  })
  .strict();

export const StudyGroupMaxAggregateInputObjectSchema = Schema;
