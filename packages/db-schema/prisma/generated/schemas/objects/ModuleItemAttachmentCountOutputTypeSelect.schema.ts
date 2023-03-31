import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentCountOutputTypeSelect> = z
  .object({
    user_status: z.boolean().optional(),
  })
  .strict();

export const ModuleItemAttachmentCountOutputTypeSelectObjectSchema = Schema;
