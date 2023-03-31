import { z } from 'zod';
import { ModuleItemAttachmentCountOutputTypeSelectObjectSchema } from './ModuleItemAttachmentCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => ModuleItemAttachmentCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleItemAttachmentCountOutputTypeArgsObjectSchema = Schema;
