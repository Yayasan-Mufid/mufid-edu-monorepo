import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { StudyGroupExamUpdateOneRequiredWithoutSheetsNestedInputObjectSchema } from './StudyGroupExamUpdateOneRequiredWithoutSheetsNestedInput.schema';
import { UserUpdateOneWithoutGraded_exam_sheetsNestedInputObjectSchema } from './UserUpdateOneWithoutGraded_exam_sheetsNestedInput.schema';
import { ExamSheetSectionUpdateManyWithoutExam_sheetNestedInputObjectSchema } from './ExamSheetSectionUpdateManyWithoutExam_sheetNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetUpdateWithoutUserInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    start_time: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    end_time: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    graded_at: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    grader_notes: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    score: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    token_text: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    group_exam: z
      .lazy(
        () =>
          StudyGroupExamUpdateOneRequiredWithoutSheetsNestedInputObjectSchema,
      )
      .optional(),
    grader: z
      .lazy(() => UserUpdateOneWithoutGraded_exam_sheetsNestedInputObjectSchema)
      .optional(),
    sections: z
      .lazy(
        () =>
          ExamSheetSectionUpdateManyWithoutExam_sheetNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ExamSheetUpdateWithoutUserInputObjectSchema = Schema;