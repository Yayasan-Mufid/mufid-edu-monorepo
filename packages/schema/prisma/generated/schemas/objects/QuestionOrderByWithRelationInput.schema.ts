import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProgramOrderByWithRelationInputObjectSchema } from './ProgramOrderByWithRelationInput.schema';
import { ModuleOrderByWithRelationInputObjectSchema } from './ModuleOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { QuestionChoiceOrderByRelationAggregateInputObjectSchema } from './QuestionChoiceOrderByRelationAggregateInput.schema';
import { ExamSectionQuestionOrderByRelationAggregateInputObjectSchema } from './ExamSectionQuestionOrderByRelationAggregateInput.schema';
import { ExamSheetItemOrderByRelationAggregateInputObjectSchema } from './ExamSheetItemOrderByRelationAggregateInput.schema';
import { ModuleItemQuestionOrderByRelationAggregateInputObjectSchema } from './ModuleItemQuestionOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    program_id: z.lazy(() => SortOrderSchema).optional(),
    program: z
      .lazy(() => ProgramOrderByWithRelationInputObjectSchema)
      .optional(),
    module_id: z.lazy(() => SortOrderSchema).optional(),
    module: z.lazy(() => ModuleOrderByWithRelationInputObjectSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    grading_hint: z.lazy(() => SortOrderSchema).optional(),
    max_score: z.lazy(() => SortOrderSchema).optional(),
    randomize_choices: z.lazy(() => SortOrderSchema).optional(),
    created_by_id: z.lazy(() => SortOrderSchema).optional(),
    validated_by_id: z.lazy(() => SortOrderSchema).optional(),
    validator_note: z.lazy(() => SortOrderSchema).optional(),
    created_by: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    validated_by: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    validated_at: z.lazy(() => SortOrderSchema).optional(),
    choices: z
      .lazy(() => QuestionChoiceOrderByRelationAggregateInputObjectSchema)
      .optional(),
    exam_sections: z
      .lazy(() => ExamSectionQuestionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    exam_items: z
      .lazy(() => ExamSheetItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
    module_item_question: z
      .lazy(() => ModuleItemQuestionOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const QuestionOrderByWithRelationInputObjectSchema = Schema;
