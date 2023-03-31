import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ProgramRelationFilterObjectSchema } from './ProgramRelationFilter.schema';
import { ProgramWhereInputObjectSchema } from './ProgramWhereInput.schema';
import { ModuleRelationFilterObjectSchema } from './ModuleRelationFilter.schema';
import { ModuleWhereInputObjectSchema } from './ModuleWhereInput.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { QuestionChoiceListRelationFilterObjectSchema } from './QuestionChoiceListRelationFilter.schema';
import { ExamSectionQuestionListRelationFilterObjectSchema } from './ExamSectionQuestionListRelationFilter.schema';
import { ExamSheetItemListRelationFilterObjectSchema } from './ExamSheetItemListRelationFilter.schema';
import { ModuleItemQuestionListRelationFilterObjectSchema } from './ModuleItemQuestionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => QuestionWhereInputObjectSchema),
        z.lazy(() => QuestionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => QuestionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => QuestionWhereInputObjectSchema),
        z.lazy(() => QuestionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    program_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    program: z
      .union([
        z.lazy(() => ProgramRelationFilterObjectSchema),
        z.lazy(() => ProgramWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    module_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    module: z
      .union([
        z.lazy(() => ModuleRelationFilterObjectSchema),
        z.lazy(() => ModuleWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    text: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    grading_hint: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    max_score: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    randomize_choices: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    created_by_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    validated_by_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    validator_note: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    created_by: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    validated_by: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    validated_at: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    choices: z
      .lazy(() => QuestionChoiceListRelationFilterObjectSchema)
      .optional(),
    exam_sections: z
      .lazy(() => ExamSectionQuestionListRelationFilterObjectSchema)
      .optional(),
    exam_items: z
      .lazy(() => ExamSheetItemListRelationFilterObjectSchema)
      .optional(),
    module_item_question: z
      .lazy(() => ModuleItemQuestionListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const QuestionWhereInputObjectSchema = Schema;
