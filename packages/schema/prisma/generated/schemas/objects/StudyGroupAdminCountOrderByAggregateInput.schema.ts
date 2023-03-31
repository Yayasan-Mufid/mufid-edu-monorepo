import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminCountOrderByAggregateInput> = z
  .object({
    study_group_id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const StudyGroupAdminCountOrderByAggregateInputObjectSchema = Schema;
