import { z } from 'zod';
import { StudyGroupExamArgsObjectSchema } from './StudyGroupExamArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ExamSheetSectionFindManySchema } from '../findManyExamSheetSection.schema';
import { ExamSheetCountOutputTypeArgsObjectSchema } from './ExamSheetCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSelect> = z
  .object({
    id: z.boolean().optional(),
    group_exam_id: z.boolean().optional(),
    group_exam: z
      .union([z.boolean(), z.lazy(() => StudyGroupExamArgsObjectSchema)])
      .optional(),
    user_id: z.boolean().optional(),
    grader_id: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    grader: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    status: z.boolean().optional(),
    start_time: z.boolean().optional(),
    end_time: z.boolean().optional(),
    graded_at: z.boolean().optional(),
    grader_notes: z.boolean().optional(),
    score: z.boolean().optional(),
    sections: z
      .union([z.boolean(), z.lazy(() => ExamSheetSectionFindManySchema)])
      .optional(),
    token_text: z.boolean().optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ExamSheetCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ExamSheetSelectObjectSchema = Schema;
