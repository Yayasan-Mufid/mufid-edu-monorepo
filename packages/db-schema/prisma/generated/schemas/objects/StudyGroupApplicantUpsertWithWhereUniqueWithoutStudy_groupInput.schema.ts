import { z } from 'zod';
import { StudyGroupApplicantWhereUniqueInputObjectSchema } from './StudyGroupApplicantWhereUniqueInput.schema';
import { StudyGroupApplicantUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupApplicantUpdateWithoutStudy_groupInput.schema';
import { StudyGroupApplicantUncheckedUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupApplicantUncheckedUpdateWithoutStudy_groupInput.schema';
import { StudyGroupApplicantCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupApplicantCreateWithoutStudy_groupInput.schema';
import { StudyGroupApplicantUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupApplicantUncheckedCreateWithoutStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantUpsertWithWhereUniqueWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => StudyGroupApplicantUpdateWithoutStudy_groupInputObjectSchema,
        ),
        z.lazy(
          () =>
            StudyGroupApplicantUncheckedUpdateWithoutStudy_groupInputObjectSchema,
        ),
      ]),
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

export const StudyGroupApplicantUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema =
  Schema;
