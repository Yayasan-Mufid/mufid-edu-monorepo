import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleOrderByWithRelationInputObjectSchema } from './ModuleOrderByWithRelationInput.schema';
import { PaymentAccountOrderByWithRelationInputObjectSchema } from './PaymentAccountOrderByWithRelationInput.schema';
import { StudyGroupAdminOrderByRelationAggregateInputObjectSchema } from './StudyGroupAdminOrderByRelationAggregateInput.schema';
import { StudyGroupScheduleOrderByRelationAggregateInputObjectSchema } from './StudyGroupScheduleOrderByRelationAggregateInput.schema';
import { StudyGroupApplicantOrderByRelationAggregateInputObjectSchema } from './StudyGroupApplicantOrderByRelationAggregateInput.schema';
import { StudyGroupStudentOrderByRelationAggregateInputObjectSchema } from './StudyGroupStudentOrderByRelationAggregateInput.schema';
import { StudyGroupExamOrderByRelationAggregateInputObjectSchema } from './StudyGroupExamOrderByRelationAggregateInput.schema';
import { StudyGroupAnnouncementOrderByRelationAggregateInputObjectSchema } from './StudyGroupAnnouncementOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    gender: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    module_id: z.lazy(() => SortOrderSchema).optional(),
    module: z.lazy(() => ModuleOrderByWithRelationInputObjectSchema).optional(),
    capacity: z.lazy(() => SortOrderSchema).optional(),
    enrollment_start: z.lazy(() => SortOrderSchema).optional(),
    enrollment_end: z.lazy(() => SortOrderSchema).optional(),
    active_start: z.lazy(() => SortOrderSchema).optional(),
    active_end: z.lazy(() => SortOrderSchema).optional(),
    logo_url: z.lazy(() => SortOrderSchema).optional(),
    invoice_amount: z.lazy(() => SortOrderSchema).optional(),
    invoice_title: z.lazy(() => SortOrderSchema).optional(),
    invoice_account_id: z.lazy(() => SortOrderSchema).optional(),
    invoice_account: z
      .lazy(() => PaymentAccountOrderByWithRelationInputObjectSchema)
      .optional(),
    use_schedule: z.lazy(() => SortOrderSchema).optional(),
    application_note: z.lazy(() => SortOrderSchema).optional(),
    admins: z
      .lazy(() => StudyGroupAdminOrderByRelationAggregateInputObjectSchema)
      .optional(),
    schedule: z
      .lazy(() => StudyGroupScheduleOrderByRelationAggregateInputObjectSchema)
      .optional(),
    applicants: z
      .lazy(() => StudyGroupApplicantOrderByRelationAggregateInputObjectSchema)
      .optional(),
    students: z
      .lazy(() => StudyGroupStudentOrderByRelationAggregateInputObjectSchema)
      .optional(),
    exams: z
      .lazy(() => StudyGroupExamOrderByRelationAggregateInputObjectSchema)
      .optional(),
    announcements: z
      .lazy(
        () => StudyGroupAnnouncementOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const StudyGroupOrderByWithRelationInputObjectSchema = Schema;
