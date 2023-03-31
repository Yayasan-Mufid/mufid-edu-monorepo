import { z } from 'zod';
import { UserCreateNestedOneWithoutApplied_groupsInputObjectSchema } from './UserCreateNestedOneWithoutApplied_groupsInput.schema';
import { InvoiceCreateNestedOneWithoutApplicantInputObjectSchema } from './InvoiceCreateNestedOneWithoutApplicantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantCreateWithoutStudy_groupInput> =
  z
    .object({
      user: z.lazy(
        () => UserCreateNestedOneWithoutApplied_groupsInputObjectSchema,
      ),
      invoice: z
        .lazy(() => InvoiceCreateNestedOneWithoutApplicantInputObjectSchema)
        .optional(),
      created_at: z.date().optional(),
    })
    .strict();

export const StudyGroupApplicantCreateWithoutStudy_groupInputObjectSchema =
  Schema;
