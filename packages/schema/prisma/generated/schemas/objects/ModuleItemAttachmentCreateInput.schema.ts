import { z } from 'zod';
import { ModuleItemCreateNestedOneWithoutAttachmentsInputObjectSchema } from './ModuleItemCreateNestedOneWithoutAttachmentsInput.schema';
import { ModuleItemAttachmentStatusCreateNestedManyWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusCreateNestedManyWithoutAttachmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentCreateInput> = z
  .object({
    id: z.string().optional(),
    module_item: z.lazy(
      () => ModuleItemCreateNestedOneWithoutAttachmentsInputObjectSchema,
    ),
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

export const ModuleItemAttachmentCreateInputObjectSchema = Schema;
