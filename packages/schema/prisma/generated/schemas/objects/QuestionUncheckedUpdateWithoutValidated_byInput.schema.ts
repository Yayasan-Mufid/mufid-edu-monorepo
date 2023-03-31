import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { QuestionChoiceUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema } from './QuestionChoiceUncheckedUpdateManyWithoutQuestionNestedInput.schema';
import { ExamSectionQuestionUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema } from './ExamSectionQuestionUncheckedUpdateManyWithoutQuestionNestedInput.schema';
import { ExamSheetItemUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema } from './ExamSheetItemUncheckedUpdateManyWithoutQuestionNestedInput.schema';
import { ModuleItemQuestionUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema } from './ModuleItemQuestionUncheckedUpdateManyWithoutQuestionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUncheckedUpdateWithoutValidated_byInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      program_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      module_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      text: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      grading_hint: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      max_score: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      randomize_choices: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      created_by_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      validator_note: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      created_at: z
        .union([
          z.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      validated_at: z
        .union([
          z.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      choices: z
        .lazy(
          () =>
            QuestionChoiceUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema,
        )
        .optional(),
      exam_sections: z
        .lazy(
          () =>
            ExamSectionQuestionUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema,
        )
        .optional(),
      exam_items: z
        .lazy(
          () =>
            ExamSheetItemUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema,
        )
        .optional(),
      module_item_question: z
        .lazy(
          () =>
            ModuleItemQuestionUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const QuestionUncheckedUpdateWithoutValidated_byInputObjectSchema =
  Schema;
