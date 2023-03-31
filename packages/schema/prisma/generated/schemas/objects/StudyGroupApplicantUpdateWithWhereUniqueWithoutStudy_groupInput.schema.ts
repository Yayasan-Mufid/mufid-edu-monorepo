import { z } from 'zod';
import { StudyGroupApplicantWhereUniqueInputObjectSchema } from './StudyGroupApplicantWhereUniqueInput.schema';
import { StudyGroupApplicantUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupApplicantUpdateWithoutStudy_groupInput.schema';
import { StudyGroupApplicantUncheckedUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupApplicantUncheckedUpdateWithoutStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantUpdateWithWhereUniqueWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => StudyGroupApplicantUpdateWithoutStudy_groupInputObjectSchema,
        ),
        z.lazy(
          () =>
            StudyGroupApplicantUncheckedUpdateWithoutStudy_groupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupApplicantUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema =
  Schema;
