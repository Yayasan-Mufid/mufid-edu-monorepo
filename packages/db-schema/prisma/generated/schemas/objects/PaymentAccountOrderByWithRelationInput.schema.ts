import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { InvoiceOrderByRelationAggregateInputObjectSchema } from './InvoiceOrderByRelationAggregateInput.schema';
import { StudyGroupOrderByRelationAggregateInputObjectSchema } from './StudyGroupOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    account_identifier: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    logo_url: z.lazy(() => SortOrderSchema).optional(),
    invoices: z
      .lazy(() => InvoiceOrderByRelationAggregateInputObjectSchema)
      .optional(),
    study_groups: z
      .lazy(() => StudyGroupOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PaymentAccountOrderByWithRelationInputObjectSchema = Schema;
