import { z } from 'zod';
import { ModuleItemQuestionStatusWhereInputObjectSchema } from './ModuleItemQuestionStatusWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusListRelationFilter> = z
  .object({
    every: z
      .lazy(() => ModuleItemQuestionStatusWhereInputObjectSchema)
      .optional(),
    some: z
      .lazy(() => ModuleItemQuestionStatusWhereInputObjectSchema)
      .optional(),
    none: z
      .lazy(() => ModuleItemQuestionStatusWhereInputObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleItemQuestionStatusListRelationFilterObjectSchema = Schema;
