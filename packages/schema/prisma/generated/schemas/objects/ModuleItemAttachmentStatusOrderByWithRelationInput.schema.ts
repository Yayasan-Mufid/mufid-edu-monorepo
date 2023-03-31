import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleItemAttachmentOrderByWithRelationInputObjectSchema } from './ModuleItemAttachmentOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusOrderByWithRelationInput> =
  z
    .object({
      attachment_id: z.lazy(() => SortOrderSchema).optional(),
      attachment: z
        .lazy(() => ModuleItemAttachmentOrderByWithRelationInputObjectSchema)
        .optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      updated_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ModuleItemAttachmentStatusOrderByWithRelationInputObjectSchema =
  Schema;
