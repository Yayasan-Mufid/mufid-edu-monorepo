import { z } from 'zod';
import { ModuleItemAttachmentStatusSelectObjectSchema } from './ModuleItemAttachmentStatusSelect.schema';
import { ModuleItemAttachmentStatusIncludeObjectSchema } from './ModuleItemAttachmentStatusInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusArgs> = z
  .object({
    select: z
      .lazy(() => ModuleItemAttachmentStatusSelectObjectSchema)
      .optional(),
    include: z
      .lazy(() => ModuleItemAttachmentStatusIncludeObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleItemAttachmentStatusArgsObjectSchema = Schema;
