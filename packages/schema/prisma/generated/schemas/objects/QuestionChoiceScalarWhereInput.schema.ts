import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionChoiceScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => QuestionChoiceScalarWhereInputObjectSchema),
        z.lazy(() => QuestionChoiceScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => QuestionChoiceScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => QuestionChoiceScalarWhereInputObjectSchema),
        z.lazy(() => QuestionChoiceScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    question_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
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

export const QuestionChoiceScalarWhereInputObjectSchema = Schema;
