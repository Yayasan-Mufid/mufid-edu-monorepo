import { z } from 'zod';
import { ExamSheetSectionUncheckedCreateNestedManyWithoutExam_sheetInputObjectSchema } from './ExamSheetSectionUncheckedCreateNestedManyWithoutExam_sheetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetUncheckedCreateWithoutGroup_examInput> =
  z
    .object({
      id: z.string().optional(),
      user_id: z.string(),
      grader_id: z.string().optional().nullable(),
      status: z.string().optional(),
      start_time: z.date().optional().nullable(),
      end_time: z.date().optional().nullable(),
      graded_at: z.date().optional().nullable(),
      grader_notes: z.string().optional().nullable(),
      score: z.number().optional().nullable(),
      sections: z
        .lazy(
          () =>
            ExamSheetSectionUncheckedCreateNestedManyWithoutExam_sheetInputObjectSchema,
        )
        .optional(),
      token_text: z.string().optional().nullable(),
    })
    .strict();

export const ExamSheetUncheckedCreateWithoutGroup_examInputObjectSchema =
  Schema;
