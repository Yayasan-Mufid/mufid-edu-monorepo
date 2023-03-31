import { z } from 'zod';
import { ModuleItemAttachmentCreateNestedOneWithoutUser_statusInputObjectSchema } from './ModuleItemAttachmentCreateNestedOneWithoutUser_statusInput.schema';
import { UserCreateNestedOneWithoutModule_item_attachment_statusInputObjectSchema } from './UserCreateNestedOneWithoutModule_item_attachment_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusCreateInput> = z
  .object({
    attachment: z.lazy(
      () =>
        ModuleItemAttachmentCreateNestedOneWithoutUser_statusInputObjectSchema,
    ),
    user: z.lazy(
      () =>
        UserCreateNestedOneWithoutModule_item_attachment_statusInputObjectSchema,
    ),
    status: z.string().optional(),
    updated_at: z.date().optional(),
  })
  .strict();

export const ModuleItemAttachmentStatusCreateInputObjectSchema = Schema;
