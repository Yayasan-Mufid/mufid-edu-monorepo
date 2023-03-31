import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StudyGroupApplicantCountOrderByAggregateInputObjectSchema } from './StudyGroupApplicantCountOrderByAggregateInput.schema';
import { StudyGroupApplicantMaxOrderByAggregateInputObjectSchema } from './StudyGroupApplicantMaxOrderByAggregateInput.schema';
import { StudyGroupApplicantMinOrderByAggregateInputObjectSchema } from './StudyGroupApplicantMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantOrderByWithAggregationInput> =
  z
    .object({
      study_group_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      invoice_id: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => StudyGroupApplicantCountOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => StudyGroupApplicantMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => StudyGroupApplicantMinOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const StudyGroupApplicantOrderByWithAggregationInputObjectSchema =
  Schema;
