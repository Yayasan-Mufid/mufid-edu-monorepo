import { z } from 'zod';
import { StudyGroupArgsObjectSchema } from './StudyGroupArgs.schema';
import { ModuleItemArgsObjectSchema } from './ModuleItemArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleSelect> = z
  .object({
    study_group_id: z.boolean().optional(),
    study_group: z
      .union([z.boolean(), z.lazy(() => StudyGroupArgsObjectSchema)])
      .optional(),
    module_item_id: z.boolean().optional(),
    module_item: z
      .union([z.boolean(), z.lazy(() => ModuleItemArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const StudyGroupScheduleSelectObjectSchema = Schema;
