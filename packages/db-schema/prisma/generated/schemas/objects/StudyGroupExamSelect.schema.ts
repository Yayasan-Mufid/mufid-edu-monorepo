import { z } from 'zod';
import { ExamArgsObjectSchema } from './ExamArgs.schema';
import { StudyGroupArgsObjectSchema } from './StudyGroupArgs.schema';
import { ExamSheetFindManySchema } from '../findManyExamSheet.schema';
import { StudyGroupExamCountOutputTypeArgsObjectSchema } from './StudyGroupExamCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamSelect> = z
  .object({
    id: z.boolean().optional(),
    exam_id: z.boolean().optional(),
    exam: z.union([z.boolean(), z.lazy(() => ExamArgsObjectSchema)]).optional(),
    group_id: z.boolean().optional(),
    group: z
      .union([z.boolean(), z.lazy(() => StudyGroupArgsObjectSchema)])
      .optional(),
    start_time: z.boolean().optional(),
    end_time: z.boolean().optional(),
    duration_hour: z.boolean().optional(),
    weight: z.boolean().optional(),
    sheets: z
      .union([z.boolean(), z.lazy(() => ExamSheetFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => StudyGroupExamCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const StudyGroupExamSelectObjectSchema = Schema;
