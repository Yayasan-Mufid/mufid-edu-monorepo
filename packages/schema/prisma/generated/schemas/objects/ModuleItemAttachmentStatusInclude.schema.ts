import { z } from 'zod';
import { ModuleItemAttachmentArgsObjectSchema } from './ModuleItemAttachmentArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusInclude> = z
  .object({
    attachment: z
      .union([z.boolean(), z.lazy(() => ModuleItemAttachmentArgsObjectSchema)])
      .optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  })
  .strict();

export const ModuleItemAttachmentStatusIncludeObjectSchema = Schema;
