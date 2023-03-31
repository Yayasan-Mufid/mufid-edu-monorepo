import { z } from 'zod';
import { ModuleItemArgsObjectSchema } from './ModuleItemArgs.schema';
import { ModuleItemAttachmentStatusFindManySchema } from '../findManyModuleItemAttachmentStatus.schema';
import { ModuleItemAttachmentCountOutputTypeArgsObjectSchema } from './ModuleItemAttachmentCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentInclude> = z
  .object({
    module_item: z
      .union([z.boolean(), z.lazy(() => ModuleItemArgsObjectSchema)])
      .optional(),
    user_status: z
      .union([
        z.boolean(),
        z.lazy(() => ModuleItemAttachmentStatusFindManySchema),
      ])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ModuleItemAttachmentCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ModuleItemAttachmentIncludeObjectSchema = Schema;
