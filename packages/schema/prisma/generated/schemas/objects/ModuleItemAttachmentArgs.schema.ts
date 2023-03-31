import { z } from 'zod';
import { ModuleItemAttachmentSelectObjectSchema } from './ModuleItemAttachmentSelect.schema';
import { ModuleItemAttachmentIncludeObjectSchema } from './ModuleItemAttachmentInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentArgs> = z
  .object({
    select: z.lazy(() => ModuleItemAttachmentSelectObjectSchema).optional(),
    include: z.lazy(() => ModuleItemAttachmentIncludeObjectSchema).optional(),
  })
  .strict();

export const ModuleItemAttachmentArgsObjectSchema = Schema;
