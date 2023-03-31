import { z } from 'zod';
import { QuestionChoiceWhereInputObjectSchema } from './QuestionChoiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionChoiceListRelationFilter> = z
  .object({
    every: z.lazy(() => QuestionChoiceWhereInputObjectSchema).optional(),
    some: z.lazy(() => QuestionChoiceWhereInputObjectSchema).optional(),
    none: z.lazy(() => QuestionChoiceWhereInputObjectSchema).optional(),
  })
  .strict();

export const QuestionChoiceListRelationFilterObjectSchema = Schema;
