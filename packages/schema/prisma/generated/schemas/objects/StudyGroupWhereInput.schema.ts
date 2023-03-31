import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ModuleRelationFilterObjectSchema } from './ModuleRelationFilter.schema';
import { ModuleWhereInputObjectSchema } from './ModuleWhereInput.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { PaymentAccountRelationFilterObjectSchema } from './PaymentAccountRelationFilter.schema';
import { PaymentAccountWhereInputObjectSchema } from './PaymentAccountWhereInput.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StudyGroupAdminListRelationFilterObjectSchema } from './StudyGroupAdminListRelationFilter.schema';
import { StudyGroupScheduleListRelationFilterObjectSchema } from './StudyGroupScheduleListRelationFilter.schema';
import { StudyGroupApplicantListRelationFilterObjectSchema } from './StudyGroupApplicantListRelationFilter.schema';
import { StudyGroupStudentListRelationFilterObjectSchema } from './StudyGroupStudentListRelationFilter.schema';
import { StudyGroupExamListRelationFilterObjectSchema } from './StudyGroupExamListRelationFilter.schema';
import { StudyGroupAnnouncementListRelationFilterObjectSchema } from './StudyGroupAnnouncementListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StudyGroupWhereInputObjectSchema),
        z.lazy(() => StudyGroupWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StudyGroupWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StudyGroupWhereInputObjectSchema),
        z.lazy(() => StudyGroupWhereInputObjectSchema).array(),
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
    module: z
      .union([
        z.lazy(() => ModuleRelationFilterObjectSchema),
        z.lazy(() => ModuleWhereInputObjectSchema),
      ])
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
    invoice_account: z
      .union([
        z.lazy(() => PaymentAccountRelationFilterObjectSchema),
        z.lazy(() => PaymentAccountWhereInputObjectSchema),
      ])
      .optional(),
    use_schedule: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    application_note: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    admins: z
      .lazy(() => StudyGroupAdminListRelationFilterObjectSchema)
      .optional(),
    schedule: z
      .lazy(() => StudyGroupScheduleListRelationFilterObjectSchema)
      .optional(),
    applicants: z
      .lazy(() => StudyGroupApplicantListRelationFilterObjectSchema)
      .optional(),
    students: z
      .lazy(() => StudyGroupStudentListRelationFilterObjectSchema)
      .optional(),
    exams: z
      .lazy(() => StudyGroupExamListRelationFilterObjectSchema)
      .optional(),
    announcements: z
      .lazy(() => StudyGroupAnnouncementListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const StudyGroupWhereInputObjectSchema = Schema;
