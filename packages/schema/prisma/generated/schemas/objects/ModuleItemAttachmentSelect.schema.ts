import { z } from 'zod';
import { ModuleItemArgsObjectSchema } from './ModuleItemArgs.schema';
import { ModuleItemAttachmentStatusFindManySchema } from '../findManyModuleItemAttachmentStatus.schema';
import { ModuleItemAttachmentCountOutputTypeArgsObjectSchema } from './ModuleItemAttachmentCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentSelect> = z
  .object({
    id: z.boolean().optional(),
    module_item_id: z.boolean().optional(),
    module_item: z
      .union([z.boolean(), z.lazy(() => ModuleItemArgsObjectSchema)])
      .optional(),
    description: z.boolean().optional(),
    type: z.boolean().optional(),
    url: z.boolean().optional(),
    seq: z.boolean().optional(),
    mandatory: z.boolean().optional(),
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

export const ModuleItemAttachmentSelectObjectSchema = Schema;
