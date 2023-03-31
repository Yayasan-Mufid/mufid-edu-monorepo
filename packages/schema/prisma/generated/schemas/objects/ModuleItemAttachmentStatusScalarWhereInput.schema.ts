import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ModuleItemAttachmentStatusScalarWhereInputObjectSchema),
        z
          .lazy(() => ModuleItemAttachmentStatusScalarWhereInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ModuleItemAttachmentStatusScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ModuleItemAttachmentStatusScalarWhereInputObjectSchema),
        z
          .lazy(() => ModuleItemAttachmentStatusScalarWhereInputObjectSchema)
          .array(),
      ])
      .optional(),
    attachment_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    status: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    updated_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const ModuleItemAttachmentStatusScalarWhereInputObjectSchema = Schema;
