import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    gender: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    module_id: z.lazy(() => SortOrderSchema).optional(),
    capacity: z.lazy(() => SortOrderSchema).optional(),
    enrollment_start: z.lazy(() => SortOrderSchema).optional(),
    enrollment_end: z.lazy(() => SortOrderSchema).optional(),
    active_start: z.lazy(() => SortOrderSchema).optional(),
    active_end: z.lazy(() => SortOrderSchema).optional(),
    logo_url: z.lazy(() => SortOrderSchema).optional(),
    invoice_amount: z.lazy(() => SortOrderSchema).optional(),
    invoice_title: z.lazy(() => SortOrderSchema).optional(),
    invoice_account_id: z.lazy(() => SortOrderSchema).optional(),
    use_schedule: z.lazy(() => SortOrderSchema).optional(),
    application_note: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const StudyGroupMaxOrderByAggregateInputObjectSchema = Schema;
