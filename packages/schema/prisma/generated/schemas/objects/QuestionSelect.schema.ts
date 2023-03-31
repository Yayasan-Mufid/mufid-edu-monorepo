import { z } from 'zod';
import { ProgramArgsObjectSchema } from './ProgramArgs.schema';
import { ModuleArgsObjectSchema } from './ModuleArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { QuestionChoiceFindManySchema } from '../findManyQuestionChoice.schema';
import { ExamSectionQuestionFindManySchema } from '../findManyExamSectionQuestion.schema';
import { ExamSheetItemFindManySchema } from '../findManyExamSheetItem.schema';
import { ModuleItemQuestionFindManySchema } from '../findManyModuleItemQuestion.schema';
import { QuestionCountOutputTypeArgsObjectSchema } from './QuestionCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionSelect> = z
  .object({
    id: z.boolean().optional(),
    program_id: z.boolean().optional(),
    program: z
      .union([z.boolean(), z.lazy(() => ProgramArgsObjectSchema)])
      .optional(),
    module_id: z.boolean().optional(),
    module: z
      .union([z.boolean(), z.lazy(() => ModuleArgsObjectSchema)])
      .optional(),
    text: z.boolean().optional(),
    type: z.boolean().optional(),
    grading_hint: z.boolean().optional(),
    max_score: z.boolean().optional(),
    randomize_choices: z.boolean().optional(),
    created_by_id: z.boolean().optional(),
    validated_by_id: z.boolean().optional(),
    validator_note: z.boolean().optional(),
    created_by: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    validated_by: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    created_at: z.boolean().optional(),
    validated_at: z.boolean().optional(),
    choices: z
      .union([z.boolean(), z.lazy(() => QuestionChoiceFindManySchema)])
      .optional(),
    exam_sections: z
      .union([z.boolean(), z.lazy(() => ExamSectionQuestionFindManySchema)])
      .optional(),
    exam_items: z
      .union([z.boolean(), z.lazy(() => ExamSheetItemFindManySchema)])
      .optional(),
    module_item_question: z
      .union([z.boolean(), z.lazy(() => ModuleItemQuestionFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => QuestionCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const QuestionSelectObjectSchema = Schema;
