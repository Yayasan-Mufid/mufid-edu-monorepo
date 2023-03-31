import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ModuleItemQuestionStatusScalarWhereInputObjectSchema),
        z
          .lazy(() => ModuleItemQuestionStatusScalarWhereInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ModuleItemQuestionStatusScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ModuleItemQuestionStatusScalarWhereInputObjectSchema),
        z
          .lazy(() => ModuleItemQuestionStatusScalarWhereInputObjectSchema)
          .array(),
      ])
      .optional(),
    question_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    status: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const ModuleItemQuestionStatusScalarWhereInputObjectSchema = Schema;
