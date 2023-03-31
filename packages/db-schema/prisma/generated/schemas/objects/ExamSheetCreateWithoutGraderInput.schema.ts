import { z } from 'zod';
import { StudyGroupExamCreateNestedOneWithoutSheetsInputObjectSchema } from './StudyGroupExamCreateNestedOneWithoutSheetsInput.schema';
import { UserCreateNestedOneWithoutExam_sheetsInputObjectSchema } from './UserCreateNestedOneWithoutExam_sheetsInput.schema';
import { ExamSheetSectionCreateNestedManyWithoutExam_sheetInputObjectSchema } from './ExamSheetSectionCreateNestedManyWithoutExam_sheetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetCreateWithoutGraderInput> = z
  .object({
    id: z.string().optional(),
    status: z.string().optional(),
    start_time: z.date().optional().nullable(),
    end_time: z.date().optional().nullable(),
    graded_at: z.date().optional().nullable(),
    grader_notes: z.string().optional().nullable(),
    score: z.number().optional().nullable(),
    token_text: z.string().optional().nullable(),
    group_exam: z.lazy(
      () => StudyGroupExamCreateNestedOneWithoutSheetsInputObjectSchema,
    ),
    user: z.lazy(() => UserCreateNestedOneWithoutExam_sheetsInputObjectSchema),
    sections: z
      .lazy(
        () =>
          ExamSheetSectionCreateNestedManyWithoutExam_sheetInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ExamSheetCreateWithoutGraderInputObjectSchema = Schema;