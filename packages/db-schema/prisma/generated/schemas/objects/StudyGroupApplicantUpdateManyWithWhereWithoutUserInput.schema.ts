import { z } from 'zod';
import { StudyGroupApplicantScalarWhereInputObjectSchema } from './StudyGroupApplicantScalarWhereInput.schema';
import { StudyGroupApplicantUpdateManyMutationInputObjectSchema } from './StudyGroupApplicantUpdateManyMutationInput.schema';
import { StudyGroupApplicantUncheckedUpdateManyWithoutApplied_groupsInputObjectSchema } from './StudyGroupApplicantUncheckedUpdateManyWithoutApplied_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupApplicantScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupApplicantUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupApplicantUncheckedUpdateManyWithoutApplied_groupsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupApplicantUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
