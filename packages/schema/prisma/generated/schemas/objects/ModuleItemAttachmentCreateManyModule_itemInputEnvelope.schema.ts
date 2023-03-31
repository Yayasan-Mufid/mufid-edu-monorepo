import { z } from 'zod';
import { ModuleItemAttachmentCreateManyModule_itemInputObjectSchema } from './ModuleItemAttachmentCreateManyModule_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentCreateManyModule_itemInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => ModuleItemAttachmentCreateManyModule_itemInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ModuleItemAttachmentCreateManyModule_itemInputEnvelopeObjectSchema =
  Schema;
