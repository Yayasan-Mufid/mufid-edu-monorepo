import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentCreateManyModule_itemInput> =
  z
    .object({
      id: z.string().optional(),
      description: z.string(),
      type: z.string(),
      url: z.string(),
      seq: z.number(),
      mandatory: z.boolean().optional(),
    })
    .strict();

export const ModuleItemAttachmentCreateManyModule_itemInputObjectSchema =
  Schema;
