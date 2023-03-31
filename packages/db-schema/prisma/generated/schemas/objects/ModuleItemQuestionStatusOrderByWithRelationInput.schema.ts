import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleItemQuestionOrderByWithRelationInputObjectSchema } from './ModuleItemQuestionOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusOrderByWithRelationInput> =
  z
    .object({
      question_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      question: z
        .lazy(() => ModuleItemQuestionOrderByWithRelationInputObjectSchema)
        .optional(),
      user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    })
    .strict();

export const ModuleItemQuestionStatusOrderByWithRelationInputObjectSchema =
  Schema;
