import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ProgramOrderByWithRelationInputObjectSchema } from './ProgramOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    program_id: z.lazy(() => SortOrderSchema).optional(),
    program: z
      .lazy(() => ProgramOrderByWithRelationInputObjectSchema)
      .optional(),
    assigned_at: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProgramAdminOrderByWithRelationInputObjectSchema = Schema;
