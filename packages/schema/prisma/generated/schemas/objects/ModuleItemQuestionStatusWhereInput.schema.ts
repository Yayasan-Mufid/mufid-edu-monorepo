import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ModuleItemQuestionRelationFilterObjectSchema } from './ModuleItemQuestionRelationFilter.schema';
import { ModuleItemQuestionWhereInputObjectSchema } from './ModuleItemQuestionWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ModuleItemQuestionStatusWhereInputObjectSchema),
        z.lazy(() => ModuleItemQuestionStatusWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ModuleItemQuestionStatusWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ModuleItemQuestionStatusWhereInputObjectSchema),
        z.lazy(() => ModuleItemQuestionStatusWhereInputObjectSchema).array(),
      ])
      .optional(),
    question_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    question: z
      .union([
        z.lazy(() => ModuleItemQuestionRelationFilterObjectSchema),
        z.lazy(() => ModuleItemQuestionWhereInputObjectSchema),
      ])
      .optional(),
    user_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const ModuleItemQuestionStatusWhereInputObjectSchema = Schema;
