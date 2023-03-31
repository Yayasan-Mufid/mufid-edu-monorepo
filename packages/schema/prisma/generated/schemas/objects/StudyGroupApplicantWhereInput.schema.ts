import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StudyGroupRelationFilterObjectSchema } from './StudyGroupRelationFilter.schema';
import { StudyGroupWhereInputObjectSchema } from './StudyGroupWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { InvoiceRelationFilterObjectSchema } from './InvoiceRelationFilter.schema';
import { InvoiceWhereInputObjectSchema } from './InvoiceWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StudyGroupApplicantWhereInputObjectSchema),
        z.lazy(() => StudyGroupApplicantWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StudyGroupApplicantWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StudyGroupApplicantWhereInputObjectSchema),
        z.lazy(() => StudyGroupApplicantWhereInputObjectSchema).array(),
      ])
      .optional(),
    study_group_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    study_group: z
      .union([
        z.lazy(() => StudyGroupRelationFilterObjectSchema),
        z.lazy(() => StudyGroupWhereInputObjectSchema),
      ])
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
    invoice_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    invoice: z
      .union([
        z.lazy(() => InvoiceRelationFilterObjectSchema),
        z.lazy(() => InvoiceWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const StudyGroupApplicantWhereInputObjectSchema = Schema;
