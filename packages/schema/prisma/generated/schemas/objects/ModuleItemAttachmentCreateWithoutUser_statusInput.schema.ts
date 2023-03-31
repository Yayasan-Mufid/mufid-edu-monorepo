import { z } from 'zod';
import { ModuleItemCreateNestedOneWithoutAttachmentsInputObjectSchema } from './ModuleItemCreateNestedOneWithoutAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentCreateWithoutUser_statusInput> =
  z
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
    })
    .strict();

export const ModuleItemAttachmentCreateWithoutUser_statusInputObjectSchema =
  Schema;
