import { z } from 'zod';
import { ExamSheetSectionArgsObjectSchema } from './ExamSheetSectionArgs.schema';
import { QuestionArgsObjectSchema } from './QuestionArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemInclude> = z
  .object({
    section: z
      .union([z.boolean(), z.lazy(() => ExamSheetSectionArgsObjectSchema)])
      .optional(),
    question: z
      .union([z.boolean(), z.lazy(() => QuestionArgsObjectSchema)])
      .optional(),
    graded_by: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ExamSheetItemIncludeObjectSchema = Schema;
