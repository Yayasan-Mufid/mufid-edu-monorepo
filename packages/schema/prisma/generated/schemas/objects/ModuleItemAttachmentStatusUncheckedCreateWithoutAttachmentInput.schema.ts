import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusUncheckedCreateWithoutAttachmentInput> =
  z
    .object({
      user_id: z.string(),
      status: z.string().optional(),
      updated_at: z.date().optional(),
    })
    .strict();

export const ModuleItemAttachmentStatusUncheckedCreateWithoutAttachmentInputObjectSchema =
  Schema;
