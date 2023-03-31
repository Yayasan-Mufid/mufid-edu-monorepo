import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { PaymentAccountRelationFilterObjectSchema } from './PaymentAccountRelationFilter.schema';
import { PaymentAccountWhereInputObjectSchema } from './PaymentAccountWhereInput.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { InvoiceItemListRelationFilterObjectSchema } from './InvoiceItemListRelationFilter.schema';
import { StudyGroupApplicantRelationFilterObjectSchema } from './StudyGroupApplicantRelationFilter.schema';
import { StudyGroupApplicantWhereInputObjectSchema } from './StudyGroupApplicantWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => InvoiceWhereInputObjectSchema),
        z.lazy(() => InvoiceWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => InvoiceWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => InvoiceWhereInputObjectSchema),
        z.lazy(() => InvoiceWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    amount: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    payment_method: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    payment_account_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    account: z
      .union([
        z.lazy(() => PaymentAccountRelationFilterObjectSchema),
        z.lazy(() => PaymentAccountWhereInputObjectSchema),
      ])
      .optional(),
    paid_amount: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    mismatch: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    paid_at: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    payment_receipt_url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    confirmer: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    confirmed_by: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    confirmed_at: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    status: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    deadline: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    items: z.lazy(() => InvoiceItemListRelationFilterObjectSchema).optional(),
    applicant: z
      .union([
        z.lazy(() => StudyGroupApplicantRelationFilterObjectSchema),
        z.lazy(() => StudyGroupApplicantWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const InvoiceWhereInputObjectSchema = Schema;
