import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadedFileMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    path: z.lazy(() => SortOrderSchema).optional(),
    uploader_id: z.lazy(() => SortOrderSchema).optional(),
    uploaded_at: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UploadedFileMaxOrderByAggregateInputObjectSchema = Schema;
