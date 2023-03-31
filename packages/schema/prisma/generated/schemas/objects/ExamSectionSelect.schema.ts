import { z } from 'zod';
import { ExamArgsObjectSchema } from './ExamArgs.schema';
import { ExamSectionQuestionFindManySchema } from '../findManyExamSectionQuestion.schema';
import { ExamSheetSectionFindManySchema } from '../findManyExamSheetSection.schema';
import { ExamSectionCountOutputTypeArgsObjectSchema } from './ExamSectionCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionSelect> = z
  .object({
    id: z.boolean().optional(),
    exam_id: z.boolean().optional(),
    exam: z.union([z.boolean(), z.lazy(() => ExamArgsObjectSchema)]).optional(),
    title: z.boolean().optional(),
    text: z.boolean().optional(),
    randomize_questions: z.boolean().optional(),
    nb_of_questions: z.boolean().optional(),
    seq: z.boolean().optional(),
    default_point: z.boolean().optional(),
    weight: z.boolean().optional(),
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

export const ExamSectionSelectObjectSchema = Schema;
