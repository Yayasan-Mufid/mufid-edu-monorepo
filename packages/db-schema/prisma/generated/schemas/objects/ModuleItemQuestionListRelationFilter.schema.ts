import { z } from 'zod';
import { ModuleItemQuestionWhereInputObjectSchema } from './ModuleItemQuestionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionListRelationFilter> = z
  .object({
    every: z.lazy(() => ModuleItemQuestionWhereInputObjectSchema).optional(),
    some: z.lazy(() => ModuleItemQuestionWhereInputObjectSchema).optional(),
    none: z.lazy(() => ModuleItemQuestionWhereInputObjectSchema).optional(),
  })
  .strict();

export const ModuleItemQuestionListRelationFilterObjectSchema = Schema;
