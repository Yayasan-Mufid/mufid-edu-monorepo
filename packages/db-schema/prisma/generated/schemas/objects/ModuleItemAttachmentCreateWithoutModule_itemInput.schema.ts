import { z } from 'zod';
import { ModuleItemAttachmentStatusCreateNestedManyWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusCreateNestedManyWithoutAttachmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentCreateWithoutModule_itemInput> =
  z
    .object({
      id: z.string().optional(),
      description: z.string(),
      type: z.string(),
      url: z.string(),
      seq: z.number(),
      mandatory: z.boolean().optional(),
      user_status: z
        .lazy(
          () =>
            ModuleItemAttachmentStatusCreateNestedManyWithoutAttachmentInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ModuleItemAttachmentCreateWithoutModule_itemInputObjectSchema =
  Schema;
