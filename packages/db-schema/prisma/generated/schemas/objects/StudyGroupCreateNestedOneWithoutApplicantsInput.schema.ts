import { z } from 'zod';
import { StudyGroupCreateWithoutApplicantsInputObjectSchema } from './StudyGroupCreateWithoutApplicantsInput.schema';
import { StudyGroupUncheckedCreateWithoutApplicantsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutApplicantsInput.schema';
import { StudyGroupCreateOrConnectWithoutApplicantsInputObjectSchema } from './StudyGroupCreateOrConnectWithoutApplicantsInput.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCreateNestedOneWithoutApplicantsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StudyGroupCreateWithoutApplicantsInputObjectSchema),
          z.lazy(
            () => StudyGroupUncheckedCreateWithoutApplicantsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StudyGroupCreateOrConnectWithoutApplicantsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const StudyGroupCreateNestedOneWithoutApplicantsInputObjectSchema =
  Schema;
