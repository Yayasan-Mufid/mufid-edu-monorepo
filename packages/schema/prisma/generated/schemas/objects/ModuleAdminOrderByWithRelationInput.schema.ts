import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleOrderByWithRelationInputObjectSchema } from './ModuleOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    module_id: z.lazy(() => SortOrderSchema).optional(),
    module: z.lazy(() => ModuleOrderByWithRelationInputObjectSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    assigned_at: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ModuleAdminOrderByWithRelationInputObjectSchema = Schema;
