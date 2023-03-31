import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () =>
              ModuleItemAttachmentStatusScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentStatusScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () =>
            ModuleItemAttachmentStatusScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () =>
              ModuleItemAttachmentStatusScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentStatusScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      attachment_id: z
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
      updated_at: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.date(),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemAttachmentStatusScalarWhereWithAggregatesInputObjectSchema =
  Schema;
