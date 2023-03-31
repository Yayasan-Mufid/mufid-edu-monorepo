import { z } from 'zod';
import { StudyGroupApplicantWhereUniqueInputObjectSchema } from './StudyGroupApplicantWhereUniqueInput.schema';
import { StudyGroupApplicantUpdateWithoutUserInputObjectSchema } from './StudyGroupApplicantUpdateWithoutUserInput.schema';
import { StudyGroupApplicantUncheckedUpdateWithoutUserInputObjectSchema } from './StudyGroupApplicantUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupApplicantUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => StudyGroupApplicantUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupApplicantUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
