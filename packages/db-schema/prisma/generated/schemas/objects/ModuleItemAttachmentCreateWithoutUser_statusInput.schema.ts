import { z } from 'zod';
import { ModuleItemCreateNestedOneWithoutAttachmentsInputObjectSchema } from './ModuleItemCreateNestedOneWithoutAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentCreateWithoutUser_statusInput> =
  z
    .object({
      id: z.string().optional(),
      description: z.string(),
      type: z.string(),
      url: z.string(),
      seq: z.number(),
      mandatory: z.boolean().optional(),
      module_item: z.lazy(
        () => ModuleItemCreateNestedOneWithoutAttachmentsInputObjectSchema,
      ),
    })
    .strict();

export const ModuleItemAttachmentCreateWithoutUser_statusInputObjectSchema =
  Schema;
