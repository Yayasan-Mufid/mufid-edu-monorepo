import { z } from 'zod';
import { StudyGroupAdminUncheckedCreateNestedManyWithoutStudy_groupInputObjectSchema } from './StudyGroupAdminUncheckedCreateNestedManyWithoutStudy_groupInput.schema';
import { StudyGroupScheduleUncheckedCreateNestedManyWithoutStudy_groupInputObjectSchema } from './StudyGroupScheduleUncheckedCreateNestedManyWithoutStudy_groupInput.schema';
import { StudyGroupApplicantUncheckedCreateNestedManyWithoutStudy_groupInputObjectSchema } from './StudyGroupApplicantUncheckedCreateNestedManyWithoutStudy_groupInput.schema';
import { StudyGroupStudentUncheckedCreateNestedManyWithoutStudy_groupInputObjectSchema } from './StudyGroupStudentUncheckedCreateNestedManyWithoutStudy_groupInput.schema';
import { StudyGroupExamUncheckedCreateNestedManyWithoutGroupInputObjectSchema } from './StudyGroupExamUncheckedCreateNestedManyWithoutGroupInput.schema';
import { StudyGroupAnnouncementUncheckedCreateNestedManyWithoutStudy_groupInputObjectSchema } from './StudyGroupAnnouncementUncheckedCreateNestedManyWithoutStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    gender: z.string(),
    name: z.string(),
    code: z.string(),
    module_id: z.string(),
    capacity: z.number(),
    enrollment_start: z.date(),
    enrollment_end: z.date(),
    active_start: z.date(),
    active_end: z.date(),
    logo_url: z.string(),
    invoice_amount: z.number(),
    invoice_title: z.string(),
    invoice_account_id: z.string(),
    use_schedule: z.boolean().optional().nullable(),
    application_note: z.string().optional().nullable(),
    admins: z
      .lazy(
        () =>
          StudyGroupAdminUncheckedCreateNestedManyWithoutStudy_groupInputObjectSchema,
      )
      .optional(),
    schedule: z
      .lazy(
        () =>
          StudyGroupScheduleUncheckedCreateNestedManyWithoutStudy_groupInputObjectSchema,
      )
      .optional(),
    applicants: z
      .lazy(
        () =>
          StudyGroupApplicantUncheckedCreateNestedManyWithoutStudy_groupInputObjectSchema,
      )
      .optional(),
    students: z
      .lazy(
        () =>
          StudyGroupStudentUncheckedCreateNestedManyWithoutStudy_groupInputObjectSchema,
      )
      .optional(),
    exams: z
      .lazy(
        () =>
          StudyGroupExamUncheckedCreateNestedManyWithoutGroupInputObjectSchema,
      )
      .optional(),
    announcements: z
      .lazy(
        () =>
          StudyGroupAnnouncementUncheckedCreateNestedManyWithoutStudy_groupInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const StudyGroupUncheckedCreateInputObjectSchema = Schema;
