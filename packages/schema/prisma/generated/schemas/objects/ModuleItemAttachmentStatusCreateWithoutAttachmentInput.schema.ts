import { z } from 'zod';
import { UserCreateNestedOneWithoutModule_item_attachment_statusInputObjectSchema } from './UserCreateNestedOneWithoutModule_item_attachment_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusCreateWithoutAttachmentInput> =
  z
    .object({
      user: z.lazy(
        () =>
          UserCreateNestedOneWithoutModule_item_attachment_statusInputObjectSchema,
      ),
      status: z.string().optional(),
      updated_at: z.date().optional(),
    })
    .strict();

export const ModuleItemAttachmentStatusCreateWithoutAttachmentInputObjectSchema =
  Schema;
