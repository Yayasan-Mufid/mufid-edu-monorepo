import { z } from 'zod';
import { StudyGroupScheduleSelectObjectSchema } from './StudyGroupScheduleSelect.schema';
import { StudyGroupScheduleIncludeObjectSchema } from './StudyGroupScheduleInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleArgs> = z
  .object({
    select: z.lazy(() => StudyGroupScheduleSelectObjectSchema).optional(),
    include: z.lazy(() => StudyGroupScheduleIncludeObjectSchema).optional(),
  })
  .strict();

export const StudyGroupScheduleArgsObjectSchema = Schema;
