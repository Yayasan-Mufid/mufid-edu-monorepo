import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { InvoiceListRelationFilterObjectSchema } from './InvoiceListRelationFilter.schema';
import { StudyGroupListRelationFilterObjectSchema } from './StudyGroupListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PaymentAccountWhereInputObjectSchema),
        z.lazy(() => PaymentAccountWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PaymentAccountWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PaymentAccountWhereInputObjectSchema),
        z.lazy(() => PaymentAccountWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    account_identifier: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    logo_url: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    invoices: z.lazy(() => InvoiceListRelationFilterObjectSchema).optional(),
    study_groups: z
      .lazy(() => StudyGroupListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const PaymentAccountWhereInputObjectSchema = Schema;
