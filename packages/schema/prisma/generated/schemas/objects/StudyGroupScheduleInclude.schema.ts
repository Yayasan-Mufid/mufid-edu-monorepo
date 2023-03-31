import { z } from 'zod';
import { StudyGroupArgsObjectSchema } from './StudyGroupArgs.schema';
import { ModuleItemArgsObjectSchema } from './ModuleItemArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleInclude> = z
  .object({
    study_group: z
      .union([z.boolean(), z.lazy(() => StudyGroupArgsObjectSchema)])
      .optional(),
    module_item: z
      .union([z.boolean(), z.lazy(() => ModuleItemArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const StudyGroupScheduleIncludeObjectSchema = Schema;
