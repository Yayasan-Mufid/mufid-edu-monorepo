import { z } from 'zod';
import { StudyGroupCreateNestedOneWithoutApplicantsInputObjectSchema } from './StudyGroupCreateNestedOneWithoutApplicantsInput.schema';
import { UserCreateNestedOneWithoutApplied_groupsInputObjectSchema } from './UserCreateNestedOneWithoutApplied_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantCreateWithoutInvoiceInput> = z
  .object({
    study_group: z.lazy(
      () => StudyGroupCreateNestedOneWithoutApplicantsInputObjectSchema,
    ),
    user: z.lazy(
      () => UserCreateNestedOneWithoutApplied_groupsInputObjectSchema,
    ),
    created_at: z.date().optional(),
  })
  .strict();

export const StudyGroupApplicantCreateWithoutInvoiceInputObjectSchema = Schema;
