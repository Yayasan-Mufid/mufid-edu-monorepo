import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { QuestionRelationFilterObjectSchema } from './QuestionRelationFilter.schema';
import { QuestionWhereInputObjectSchema } from './QuestionWhereInput.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionChoiceWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => QuestionChoiceWhereInputObjectSchema),
        z.lazy(() => QuestionChoiceWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => QuestionChoiceWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => QuestionChoiceWhereInputObjectSchema),
        z.lazy(() => QuestionChoiceWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
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
    text: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    answer_key: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    seq: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
  })
  .strict();

export const QuestionChoiceWhereInputObjectSchema = Schema;
