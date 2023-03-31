import { z } from 'zod';
import { ModuleItemArgsObjectSchema } from './ModuleItemArgs.schema';
import { QuestionArgsObjectSchema } from './QuestionArgs.schema';
import { ModuleItemQuestionStatusFindManySchema } from '../findManyModuleItemQuestionStatus.schema';
import { ModuleItemQuestionCountOutputTypeArgsObjectSchema } from './ModuleItemQuestionCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionSelect> = z
  .object({
    id: z.boolean().optional(),
    module_item_id: z.boolean().optional(),
    module_item: z
      .union([z.boolean(), z.lazy(() => ModuleItemArgsObjectSchema)])
      .optional(),
    question_id: z.boolean().optional(),
    question: z
      .union([z.boolean(), z.lazy(() => QuestionArgsObjectSchema)])
      .optional(),
    user_status: z
      .union([
        z.boolean(),
        z.lazy(() => ModuleItemQuestionStatusFindManySchema),
      ])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ModuleItemQuestionCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ModuleItemQuestionSelectObjectSchema = Schema;
