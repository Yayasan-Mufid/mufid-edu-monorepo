import { z } from 'zod';
import { StudyGroupCreateWithoutApplicantsInputObjectSchema } from './StudyGroupCreateWithoutApplicantsInput.schema';
import { StudyGroupUncheckedCreateWithoutApplicantsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutApplicantsInput.schema';
import { StudyGroupCreateOrConnectWithoutApplicantsInputObjectSchema } from './StudyGroupCreateOrConnectWithoutApplicantsInput.schema';
import { StudyGroupUpsertWithoutApplicantsInputObjectSchema } from './StudyGroupUpsertWithoutApplicantsInput.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupUpdateWithoutApplicantsInputObjectSchema } from './StudyGroupUpdateWithoutApplicantsInput.schema';
import { StudyGroupUncheckedUpdateWithoutApplicantsInputObjectSchema } from './StudyGroupUncheckedUpdateWithoutApplicantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUpdateOneRequiredWithoutApplicantsNestedInput> =
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
      upsert: z
        .lazy(() => StudyGroupUpsertWithoutApplicantsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => StudyGroupUpdateWithoutApplicantsInputObjectSchema),
          z.lazy(
            () => StudyGroupUncheckedUpdateWithoutApplicantsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupUpdateOneRequiredWithoutApplicantsNestedInputObjectSchema =
  Schema;
