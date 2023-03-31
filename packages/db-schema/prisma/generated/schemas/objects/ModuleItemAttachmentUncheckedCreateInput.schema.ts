import { z } from 'zod';
import { ModuleItemAttachmentStatusUncheckedCreateNestedManyWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusUncheckedCreateNestedManyWithoutAttachmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    module_item_id: z.string(),
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

export const ModuleItemAttachmentUncheckedCreateInputObjectSchema = Schema;
