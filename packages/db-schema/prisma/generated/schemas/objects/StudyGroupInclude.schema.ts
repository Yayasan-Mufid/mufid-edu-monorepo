import { z } from 'zod';
import { ModuleArgsObjectSchema } from './ModuleArgs.schema';
import { PaymentAccountArgsObjectSchema } from './PaymentAccountArgs.schema';
import { StudyGroupAdminFindManySchema } from '../findManyStudyGroupAdmin.schema';
import { StudyGroupScheduleFindManySchema } from '../findManyStudyGroupSchedule.schema';
import { StudyGroupApplicantFindManySchema } from '../findManyStudyGroupApplicant.schema';
import { StudyGroupStudentFindManySchema } from '../findManyStudyGroupStudent.schema';
import { StudyGroupExamFindManySchema } from '../findManyStudyGroupExam.schema';
import { StudyGroupAnnouncementFindManySchema } from '../findManyStudyGroupAnnouncement.schema';
import { StudyGroupCountOutputTypeArgsObjectSchema } from './StudyGroupCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupInclude> = z
  .object({
    module: z
      .union([z.boolean(), z.lazy(() => ModuleArgsObjectSchema)])
      .optional(),
    invoice_account: z
      .union([z.boolean(), z.lazy(() => PaymentAccountArgsObjectSchema)])
      .optional(),
    admins: z
      .union([z.boolean(), z.lazy(() => StudyGroupAdminFindManySchema)])
      .optional(),
    schedule: z
      .union([z.boolean(), z.lazy(() => StudyGroupScheduleFindManySchema)])
      .optional(),
    applicants: z
      .union([z.boolean(), z.lazy(() => StudyGroupApplicantFindManySchema)])
      .optional(),
    students: z
      .union([z.boolean(), z.lazy(() => StudyGroupStudentFindManySchema)])
      .optional(),
    exams: z
      .union([z.boolean(), z.lazy(() => StudyGroupExamFindManySchema)])
      .optional(),
    announcements: z
      .union([z.boolean(), z.lazy(() => StudyGroupAnnouncementFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => StudyGroupCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const StudyGroupIncludeObjectSchema = Schema;
