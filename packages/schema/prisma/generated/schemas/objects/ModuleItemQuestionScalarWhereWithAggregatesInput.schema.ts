import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => ModuleItemQuestionScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () => ModuleItemQuestionScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => ModuleItemQuestionScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      id: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      module_item_id: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      question_id: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemQuestionScalarWhereWithAggregatesInputObjectSchema =
  Schema;
