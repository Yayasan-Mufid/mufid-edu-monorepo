import { z } from 'zod';
import { ExamArgsObjectSchema } from './ExamArgs.schema';
import { StudyGroupArgsObjectSchema } from './StudyGroupArgs.schema';
import { ExamSheetFindManySchema } from '../findManyExamSheet.schema';
import { StudyGroupExamCountOutputTypeArgsObjectSchema } from './StudyGroupExamCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamInclude> = z
  .object({
    exam: z.union([z.boolean(), z.lazy(() => ExamArgsObjectSchema)]).optional(),
    group: z
      .union([z.boolean(), z.lazy(() => StudyGroupArgsObjectSchema)])
      .optional(),
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

export const StudyGroupExamIncludeObjectSchema = Schema;
