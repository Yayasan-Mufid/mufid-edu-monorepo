import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentUncheckedCreateWithoutUser_statusInput> =
  z
    .object({
      id: z.string().optional(),
      module_item_id: z.string(),
      description: z.string(),
      type: z.string(),
      url: z.string(),
      seq: z.number(),
      mandatory: z.boolean().optional(),
    })
    .strict();

export const ModuleItemAttachmentUncheckedCreateWithoutUser_statusInputObjectSchema =
  Schema;
