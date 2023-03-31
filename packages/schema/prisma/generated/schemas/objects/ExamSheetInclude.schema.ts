import { z } from 'zod';
import { StudyGroupExamArgsObjectSchema } from './StudyGroupExamArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ExamSheetSectionFindManySchema } from '../findManyExamSheetSection.schema';
import { ExamSheetCountOutputTypeArgsObjectSchema } from './ExamSheetCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetInclude> = z
  .object({
    group_exam: z
      .union([z.boolean(), z.lazy(() => StudyGroupExamArgsObjectSchema)])
      .optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    grader: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    sections: z
      .union([z.boolean(), z.lazy(() => ExamSheetSectionFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ExamSheetCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ExamSheetIncludeObjectSchema = Schema;
