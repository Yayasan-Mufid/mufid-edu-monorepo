import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleOrderByWithRelationInputObjectSchema } from './ModuleOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    module_id: z.lazy(() => SortOrderSchema).optional(),
    module: z.lazy(() => ModuleOrderByWithRelationInputObjectSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    granted_on: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ModuleAccessOrderByWithRelationInputObjectSchema = Schema;
