import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    cover_img_url: z.lazy(() => SortOrderSchema).optional(),
    bg_img_url: z.lazy(() => SortOrderSchema).optional(),
    published: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProgramMaxOrderByAggregateInputObjectSchema = Schema;
