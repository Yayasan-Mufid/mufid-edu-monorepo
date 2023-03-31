import { z } from 'zod';
import { ModuleItemQuestionWhereInputObjectSchema } from './ModuleItemQuestionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionRelationFilter> = z
  .object({
    is: z.lazy(() => ModuleItemQuestionWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => ModuleItemQuestionWhereInputObjectSchema).optional(),
  })
  .strict();

export const ModuleItemQuestionRelationFilterObjectSchema = Schema;
