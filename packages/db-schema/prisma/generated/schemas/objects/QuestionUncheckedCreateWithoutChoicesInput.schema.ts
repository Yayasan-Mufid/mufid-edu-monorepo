import { z } from 'zod';
import { ExamSectionQuestionUncheckedCreateNestedManyWithoutQuestionInputObjectSchema } from './ExamSectionQuestionUncheckedCreateNestedManyWithoutQuestionInput.schema';
import { ExamSheetItemUncheckedCreateNestedManyWithoutQuestionInputObjectSchema } from './ExamSheetItemUncheckedCreateNestedManyWithoutQuestionInput.schema';
import { ModuleItemQuestionUncheckedCreateNestedManyWithoutQuestionInputObjectSchema } from './ModuleItemQuestionUncheckedCreateNestedManyWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUncheckedCreateWithoutChoicesInput> = z
  .object({
    id: z.string().optional(),
    program_id: z.string().optional().nullable(),
    module_id: z.string().optional().nullable(),
    text: z.string(),
    type: z.string(),
    grading_hint: z.string().optional().nullable(),
    max_score: z.number(),
    randomize_choices: z.boolean().optional(),
    created_by_id: z.string(),
    validated_by_id: z.string().optional().nullable(),
    validator_note: z.string().optional().nullable(),
    created_at: z.date().optional(),
    validated_at: z.date().optional().nullable(),
    exam_sections: z
      .lazy(
        () =>
          ExamSectionQuestionUncheckedCreateNestedManyWithoutQuestionInputObjectSchema,
      )
      .optional(),
    exam_items: z
      .lazy(
        () =>
          ExamSheetItemUncheckedCreateNestedManyWithoutQuestionInputObjectSchema,
      )
      .optional(),
    module_item_question: z
      .lazy(
        () =>
          ModuleItemQuestionUncheckedCreateNestedManyWithoutQuestionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const QuestionUncheckedCreateWithoutChoicesInputObjectSchema = Schema;
