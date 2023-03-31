import { z } from 'zod';
import { StudyGroupApplicantWhereUniqueInputObjectSchema } from './StudyGroupApplicantWhereUniqueInput.schema';
import { StudyGroupApplicantCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupApplicantCreateWithoutStudy_groupInput.schema';
import { StudyGroupApplicantUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupApplicantUncheckedCreateWithoutStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantCreateOrConnectWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => StudyGroupApplicantCreateWithoutStudy_groupInputObjectSchema,
        ),
        z.lazy(
          () =>
            StudyGroupApplicantUncheckedCreateWithoutStudy_groupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupApplicantCreateOrConnectWithoutStudy_groupInputObjectSchema =
  Schema;
