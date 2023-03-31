import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusUncheckedCreateInput> =
  z
    .object({
      attachment_id: z.string(),
      user_id: z.string(),
      status: z.string().optional(),
      updated_at: z.date().optional(),
    })
    .strict();

export const ModuleItemAttachmentStatusUncheckedCreateInputObjectSchema =
  Schema;
