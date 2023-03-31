import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ModuleItemRelationFilterObjectSchema } from './ModuleItemRelationFilter.schema';
import { ModuleItemWhereInputObjectSchema } from './ModuleItemWhereInput.schema';
import { QuestionRelationFilterObjectSchema } from './QuestionRelationFilter.schema';
import { QuestionWhereInputObjectSchema } from './QuestionWhereInput.schema';
import { ModuleItemQuestionStatusListRelationFilterObjectSchema } from './ModuleItemQuestionStatusListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ModuleItemQuestionWhereInputObjectSchema),
        z.lazy(() => ModuleItemQuestionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ModuleItemQuestionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ModuleItemQuestionWhereInputObjectSchema),
        z.lazy(() => ModuleItemQuestionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    module_item_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    module_item: z
      .union([
        z.lazy(() => ModuleItemRelationFilterObjectSchema),
        z.lazy(() => ModuleItemWhereInputObjectSchema),
      ])
      .optional(),
    question_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    question: z
      .union([
        z.lazy(() => QuestionRelationFilterObjectSchema),
        z.lazy(() => QuestionWhereInputObjectSchema),
      ])
      .optional(),
    user_status: z
      .lazy(() => ModuleItemQuestionStatusListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleItemQuestionWhereInputObjectSchema = Schema;
