import { z } from 'zod';
import { ModuleItemAttachmentStatusUncheckedCreateNestedManyWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusUncheckedCreateNestedManyWithoutAttachmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentUncheckedCreateWithoutModule_itemInput> =
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
            ModuleItemAttachmentStatusUncheckedCreateNestedManyWithoutAttachmentInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ModuleItemAttachmentUncheckedCreateWithoutModule_itemInputObjectSchema =
  Schema;
