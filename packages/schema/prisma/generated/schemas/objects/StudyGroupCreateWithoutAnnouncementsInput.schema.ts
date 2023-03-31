import { z } from 'zod';
import { ModuleCreateNestedOneWithoutStudy_groupsInputObjectSchema } from './ModuleCreateNestedOneWithoutStudy_groupsInput.schema';
import { PaymentAccountCreateNestedOneWithoutStudy_groupsInputObjectSchema } from './PaymentAccountCreateNestedOneWithoutStudy_groupsInput.schema';
import { StudyGroupAdminCreateNestedManyWithoutStudy_groupInputObjectSchema } from './StudyGroupAdminCreateNestedManyWithoutStudy_groupInput.schema';
import { StudyGroupScheduleCreateNestedManyWithoutStudy_groupInputObjectSchema } from './StudyGroupScheduleCreateNestedManyWithoutStudy_groupInput.schema';
import { StudyGroupApplicantCreateNestedManyWithoutStudy_groupInputObjectSchema } from './StudyGroupApplicantCreateNestedManyWithoutStudy_groupInput.schema';
import { StudyGroupStudentCreateNestedManyWithoutStudy_groupInputObjectSchema } from './StudyGroupStudentCreateNestedManyWithoutStudy_groupInput.schema';
import { StudyGroupExamCreateNestedManyWithoutGroupInputObjectSchema } from './StudyGroupExamCreateNestedManyWithoutGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCreateWithoutAnnouncementsInput> = z
  .object({
    id: z.string().optional(),
    gender: z.string(),
    name: z.string(),
    code: z.string(),
    module: z.lazy(
      () => ModuleCreateNestedOneWithoutStudy_groupsInputObjectSchema,
    ),
    capacity: z.number(),
    enrollment_start: z.date(),
    enrollment_end: z.date(),
    active_start: z.date(),
    active_end: z.date(),
    logo_url: z.string(),
    invoice_amount: z.number(),
    invoice_title: z.string(),
    invoice_account: z.lazy(
      () => PaymentAccountCreateNestedOneWithoutStudy_groupsInputObjectSchema,
    ),
    use_schedule: z.boolean().optional().nullable(),
    application_note: z.string().optional().nullable(),
    admins: z
      .lazy(
        () =>
          StudyGroupAdminCreateNestedManyWithoutStudy_groupInputObjectSchema,
      )
      .optional(),
    schedule: z
      .lazy(
        () =>
          StudyGroupScheduleCreateNestedManyWithoutStudy_groupInputObjectSchema,
      )
      .optional(),
    applicants: z
      .lazy(
        () =>
          StudyGroupApplicantCreateNestedManyWithoutStudy_groupInputObjectSchema,
      )
      .optional(),
    students: z
      .lazy(
        () =>
          StudyGroupStudentCreateNestedManyWithoutStudy_groupInputObjectSchema,
      )
      .optional(),
    exams: z
      .lazy(() => StudyGroupExamCreateNestedManyWithoutGroupInputObjectSchema)
      .optional(),
  })
  .strict();

export const StudyGroupCreateWithoutAnnouncementsInputObjectSchema = Schema;
