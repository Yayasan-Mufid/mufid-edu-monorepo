import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProgramUpdateOneWithoutQuestionsNestedInputObjectSchema } from './ProgramUpdateOneWithoutQuestionsNestedInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutCreated_questionsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCreated_questionsNestedInput.schema';
import { UserUpdateOneWithoutValidated_questionsNestedInputObjectSchema } from './UserUpdateOneWithoutValidated_questionsNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { QuestionChoiceUpdateManyWithoutQuestionNestedInputObjectSchema } from './QuestionChoiceUpdateManyWithoutQuestionNestedInput.schema';
import { ExamSectionQuestionUpdateManyWithoutQuestionNestedInputObjectSchema } from './ExamSectionQuestionUpdateManyWithoutQuestionNestedInput.schema';
import { ExamSheetItemUpdateManyWithoutQuestionNestedInputObjectSchema } from './ExamSheetItemUpdateManyWithoutQuestionNestedInput.schema';
import { ModuleItemQuestionUpdateManyWithoutQuestionNestedInputObjectSchema } from './ModuleItemQuestionUpdateManyWithoutQuestionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpdateWithoutModuleInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    program: z
      .lazy(() => ProgramUpdateOneWithoutQuestionsNestedInputObjectSchema)
      .optional(),
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
    validator_note: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    created_by: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutCreated_questionsNestedInputObjectSchema,
      )
      .optional(),
    validated_by: z
      .lazy(
        () => UserUpdateOneWithoutValidated_questionsNestedInputObjectSchema,
      )
      .optional(),
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
        () => QuestionChoiceUpdateManyWithoutQuestionNestedInputObjectSchema,
      )
      .optional(),
    exam_sections: z
      .lazy(
        () =>
          ExamSectionQuestionUpdateManyWithoutQuestionNestedInputObjectSchema,
      )
      .optional(),
    exam_items: z
      .lazy(() => ExamSheetItemUpdateManyWithoutQuestionNestedInputObjectSchema)
      .optional(),
    module_item_question: z
      .lazy(
        () =>
          ModuleItemQuestionUpdateManyWithoutQuestionNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const QuestionUpdateWithoutModuleInputObjectSchema = Schema;
