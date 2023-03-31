import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StudyGroupOrderByWithRelationInputObjectSchema } from './StudyGroupOrderByWithRelationInput.schema';
import { ModuleItemOrderByWithRelationInputObjectSchema } from './ModuleItemOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleOrderByWithRelationInput> = z
  .object({
    study_group_id: z.lazy(() => SortOrderSchema).optional(),
    study_group: z
      .lazy(() => StudyGroupOrderByWithRelationInputObjectSchema)
      .optional(),
    module_item_id: z.lazy(() => SortOrderSchema).optional(),
    module_item: z
      .lazy(() => ModuleItemOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const StudyGroupScheduleOrderByWithRelationInputObjectSchema = Schema;
