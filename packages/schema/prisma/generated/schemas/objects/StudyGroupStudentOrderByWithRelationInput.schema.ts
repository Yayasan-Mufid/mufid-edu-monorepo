import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StudyGroupOrderByWithRelationInputObjectSchema } from './StudyGroupOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentOrderByWithRelationInput> = z
  .object({
    study_group_id: z.lazy(() => SortOrderSchema).optional(),
    study_group: z
      .lazy(() => StudyGroupOrderByWithRelationInputObjectSchema)
      .optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const StudyGroupStudentOrderByWithRelationInputObjectSchema = Schema;
