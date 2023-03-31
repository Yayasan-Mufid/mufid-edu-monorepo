import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ModuleItemAttachmentRelationFilterObjectSchema } from './ModuleItemAttachmentRelationFilter.schema';
import { ModuleItemAttachmentWhereInputObjectSchema } from './ModuleItemAttachmentWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

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
    user_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    status: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    updated_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    attachment: z
      .union([
        z.lazy(() => ModuleItemAttachmentRelationFilterObjectSchema),
        z.lazy(() => ModuleItemAttachmentWhereInputObjectSchema),
      ])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ModuleItemAttachmentStatusWhereInputObjectSchema = Schema;
