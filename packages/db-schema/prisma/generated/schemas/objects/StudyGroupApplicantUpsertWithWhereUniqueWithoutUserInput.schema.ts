import { z } from 'zod';
import { StudyGroupApplicantWhereUniqueInputObjectSchema } from './StudyGroupApplicantWhereUniqueInput.schema';
import { StudyGroupApplicantUpdateWithoutUserInputObjectSchema } from './StudyGroupApplicantUpdateWithoutUserInput.schema';
import { StudyGroupApplicantUncheckedUpdateWithoutUserInputObjectSchema } from './StudyGroupApplicantUncheckedUpdateWithoutUserInput.schema';
import { StudyGroupApplicantCreateWithoutUserInputObjectSchema } from './StudyGroupApplicantCreateWithoutUserInput.schema';
import { StudyGroupApplicantUncheckedCreateWithoutUserInputObjectSchema } from './StudyGroupApplicantUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => StudyGroupApplicantUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => StudyGroupApplicantUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => StudyGroupApplicantCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => StudyGroupApplicantUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupApplicantUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
