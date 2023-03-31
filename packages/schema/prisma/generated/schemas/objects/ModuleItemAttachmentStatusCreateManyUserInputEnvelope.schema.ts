import { z } from 'zod';
import { ModuleItemAttachmentStatusCreateManyUserInputObjectSchema } from './ModuleItemAttachmentStatusCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusCreateManyUserInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => ModuleItemAttachmentStatusCreateManyUserInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ModuleItemAttachmentStatusCreateManyUserInputEnvelopeObjectSchema =
  Schema;
