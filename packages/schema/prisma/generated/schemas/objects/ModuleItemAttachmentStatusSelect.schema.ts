import { z } from 'zod';
import { ModuleItemAttachmentArgsObjectSchema } from './ModuleItemAttachmentArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusSelect> = z
  .object({
    attachment_id: z.boolean().optional(),
    attachment: z
      .union([z.boolean(), z.lazy(() => ModuleItemAttachmentArgsObjectSchema)])
      .optional(),
    user_id: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    status: z.boolean().optional(),
    updated_at: z.boolean().optional(),
  })
  .strict();

export const ModuleItemAttachmentStatusSelectObjectSchema = Schema;
