import { z } from 'zod';
import { StudyGroupApplicantWhereUniqueInputObjectSchema } from './StudyGroupApplicantWhereUniqueInput.schema';
import { StudyGroupApplicantCreateWithoutUserInputObjectSchema } from './StudyGroupApplicantCreateWithoutUserInput.schema';
import { StudyGroupApplicantUncheckedCreateWithoutUserInputObjectSchema } from './StudyGroupApplicantUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => StudyGroupApplicantCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => StudyGroupApplicantUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupApplicantCreateOrConnectWithoutUserInputObjectSchema =
  Schema;
