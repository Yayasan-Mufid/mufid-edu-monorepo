import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StudyGroupOrderByWithRelationInputObjectSchema } from './StudyGroupOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { InvoiceOrderByWithRelationInputObjectSchema } from './InvoiceOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantOrderByWithRelationInput> = z
  .object({
    study_group_id: z.lazy(() => SortOrderSchema).optional(),
    study_group: z
      .lazy(() => StudyGroupOrderByWithRelationInputObjectSchema)
      .optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    invoice_id: z.lazy(() => SortOrderSchema).optional(),
    invoice: z
      .lazy(() => InvoiceOrderByWithRelationInputObjectSchema)
      .optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const StudyGroupApplicantOrderByWithRelationInputObjectSchema = Schema;
