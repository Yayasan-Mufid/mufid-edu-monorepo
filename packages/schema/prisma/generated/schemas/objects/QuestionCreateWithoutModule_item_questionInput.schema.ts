import { z } from 'zod';
import { ProgramCreateNestedOneWithoutQuestionsInputObjectSchema } from './ProgramCreateNestedOneWithoutQuestionsInput.schema';
import { ModuleCreateNestedOneWithoutQuestionsInputObjectSchema } from './ModuleCreateNestedOneWithoutQuestionsInput.schema';
import { UserCreateNestedOneWithoutCreated_questionsInputObjectSchema } from './UserCreateNestedOneWithoutCreated_questionsInput.schema';
import { UserCreateNestedOneWithoutValidated_questionsInputObjectSchema } from './UserCreateNestedOneWithoutValidated_questionsInput.schema';
import { QuestionChoiceCreateNestedManyWithoutQuestionInputObjectSchema } from './QuestionChoiceCreateNestedManyWithoutQuestionInput.schema';
import { ExamSectionQuestionCreateNestedManyWithoutQuestionInputObjectSchema } from './ExamSectionQuestionCreateNestedManyWithoutQuestionInput.schema';
import { ExamSheetItemCreateNestedManyWithoutQuestionInputObjectSchema } from './ExamSheetItemCreateNestedManyWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateWithoutModule_item_questionInput> =
  z
    .object({
      id: z.string().optional(),
      program: z
        .lazy(() => ProgramCreateNestedOneWithoutQuestionsInputObjectSchema)
        .optional(),
      module: z
        .lazy(() => ModuleCreateNestedOneWithoutQuestionsInputObjectSchema)
        .optional(),
      text: z.string(),
      type: z.string(),
      grading_hint: z.string().optional().nullable(),
      max_score: z.number(),
      randomize_choices: z.boolean().optional(),
      validator_note: z.string().optional().nullable(),
      created_by: z.lazy(
        () => UserCreateNestedOneWithoutCreated_questionsInputObjectSchema,
      ),
      validated_by: z
        .lazy(
          () => UserCreateNestedOneWithoutValidated_questionsInputObjectSchema,
        )
        .optional(),
      created_at: z.date().optional(),
      validated_at: z.date().optional().nullable(),
      choices: z
        .lazy(
          () => QuestionChoiceCreateNestedManyWithoutQuestionInputObjectSchema,
        )
        .optional(),
      exam_sections: z
        .lazy(
          () =>
            ExamSectionQuestionCreateNestedManyWithoutQuestionInputObjectSchema,
        )
        .optional(),
      exam_items: z
        .lazy(
          () => ExamSheetItemCreateNestedManyWithoutQuestionInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const QuestionCreateWithoutModule_item_questionInputObjectSchema =
  Schema;
