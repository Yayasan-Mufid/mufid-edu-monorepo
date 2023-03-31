import { z } from 'zod';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupCreateWithoutApplicantsInputObjectSchema } from './StudyGroupCreateWithoutApplicantsInput.schema';
import { StudyGroupUncheckedCreateWithoutApplicantsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutApplicantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCreateOrConnectWithoutApplicantsInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => StudyGroupCreateWithoutApplicantsInputObjectSchema),
        z.lazy(
          () => StudyGroupUncheckedCreateWithoutApplicantsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupCreateOrConnectWithoutApplicantsInputObjectSchema =
  Schema;
