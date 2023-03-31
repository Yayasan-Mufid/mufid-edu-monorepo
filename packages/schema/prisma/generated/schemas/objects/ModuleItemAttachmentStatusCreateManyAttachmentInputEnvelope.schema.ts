import { z } from 'zod';
import { ModuleItemAttachmentStatusCreateManyAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusCreateManyAttachmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusCreateManyAttachmentInputEnvelope> =
  z
    .object({
      data: z
        .lazy(
          () => ModuleItemAttachmentStatusCreateManyAttachmentInputObjectSchema,
        )
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ModuleItemAttachmentStatusCreateManyAttachmentInputEnvelopeObjectSchema =
  Schema;
