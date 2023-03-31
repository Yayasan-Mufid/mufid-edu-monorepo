import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StudyGroupScalarWhereInputObjectSchema),
        z.lazy(() => StudyGroupScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StudyGroupScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StudyGroupScalarWhereInputObjectSchema),
        z.lazy(() => StudyGroupScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    gender: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    code: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    module_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    capacity: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    enrollment_start: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    enrollment_end: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    active_start: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    active_end: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    logo_url: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    invoice_amount: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    invoice_title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    invoice_account_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    use_schedule: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    application_note: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const StudyGroupScalarWhereInputObjectSchema = Schema;
