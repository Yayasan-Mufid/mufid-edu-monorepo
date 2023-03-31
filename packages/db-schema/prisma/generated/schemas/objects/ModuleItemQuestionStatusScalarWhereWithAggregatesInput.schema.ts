import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () =>
              ModuleItemQuestionStatusScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionStatusScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () =>
            ModuleItemQuestionStatusScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () =>
              ModuleItemQuestionStatusScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionStatusScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      question_id: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      user_id: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      status: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemQuestionStatusScalarWhereWithAggregatesInputObjectSchema =
  Schema;
