import { z } from 'zod';
import { ExamArgsObjectSchema } from './ExamArgs.schema';
import { ExamSectionQuestionFindManySchema } from '../findManyExamSectionQuestion.schema';
import { ExamSheetSectionFindManySchema } from '../findManyExamSheetSection.schema';
import { ExamSectionCountOutputTypeArgsObjectSchema } from './ExamSectionCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionInclude> = z
  .object({
    exam: z.union([z.boolean(), z.lazy(() => ExamArgsObjectSchema)]).optional(),
    questions: z
      .union([z.boolean(), z.lazy(() => ExamSectionQuestionFindManySchema)])
      .optional(),
    sheet_sections: z
      .union([z.boolean(), z.lazy(() => ExamSheetSectionFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ExamSectionCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ExamSectionIncludeObjectSchema = Schema;
