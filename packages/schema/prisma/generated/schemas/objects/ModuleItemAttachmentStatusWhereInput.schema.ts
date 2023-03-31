import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ModuleItemAttachmentRelationFilterObjectSchema } from './ModuleItemAttachmentRelationFilter.schema';
import { ModuleItemAttachmentWhereInputObjectSchema } from './ModuleItemAttachmentWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ModuleItemAttachmentStatusWhereInputObjectSchema),
        z.lazy(() => ModuleItemAttachmentStatusWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ModuleItemAttachmentStatusWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ModuleItemAttachmentStatusWhereInputObjectSchema),
        z.lazy(() => ModuleItemAttachmentStatusWhereInputObjectSchema).array(),
      ])
      .optional(),
    attachment_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    attachment: z
      .union([
        z.lazy(() => ModuleItemAttachmentRelationFilterObjectSchema),
        z.lazy(() => ModuleItemAttachmentWhereInputObjectSchema),
      ])
      .optional(),
    user_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    updated_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const ModuleItemAttachmentStatusWhereInputObjectSchema = Schema;
