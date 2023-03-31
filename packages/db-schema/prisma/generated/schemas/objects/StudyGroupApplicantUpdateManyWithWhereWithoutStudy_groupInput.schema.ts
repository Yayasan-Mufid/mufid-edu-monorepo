import { z } from 'zod';
import { StudyGroupApplicantScalarWhereInputObjectSchema } from './StudyGroupApplicantScalarWhereInput.schema';
import { StudyGroupApplicantUpdateManyMutationInputObjectSchema } from './StudyGroupApplicantUpdateManyMutationInput.schema';
import { StudyGroupApplicantUncheckedUpdateManyWithoutApplicantsInputObjectSchema } from './StudyGroupApplicantUncheckedUpdateManyWithoutApplicantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantUpdateManyWithWhereWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupApplicantScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupApplicantUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupApplicantUncheckedUpdateManyWithoutApplicantsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupApplicantUpdateManyWithWhereWithoutStudy_groupInputObjectSchema =
  Schema;
