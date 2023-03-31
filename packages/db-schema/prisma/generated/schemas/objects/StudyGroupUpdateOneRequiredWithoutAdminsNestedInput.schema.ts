import { z } from 'zod';
import { StudyGroupCreateWithoutAdminsInputObjectSchema } from './StudyGroupCreateWithoutAdminsInput.schema';
import { StudyGroupUncheckedCreateWithoutAdminsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutAdminsInput.schema';
import { StudyGroupCreateOrConnectWithoutAdminsInputObjectSchema } from './StudyGroupCreateOrConnectWithoutAdminsInput.schema';
import { StudyGroupUpsertWithoutAdminsInputObjectSchema } from './StudyGroupUpsertWithoutAdminsInput.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupUpdateWithoutAdminsInputObjectSchema } from './StudyGroupUpdateWithoutAdminsInput.schema';
import { StudyGroupUncheckedUpdateWithoutAdminsInputObjectSchema } from './StudyGroupUncheckedUpdateWithoutAdminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUpdateOneRequiredWithoutAdminsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StudyGroupCreateWithoutAdminsInputObjectSchema),
          z.lazy(() => StudyGroupUncheckedCreateWithoutAdminsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StudyGroupCreateOrConnectWithoutAdminsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => StudyGroupUpsertWithoutAdminsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => StudyGroupUpdateWithoutAdminsInputObjectSchema),
          z.lazy(() => StudyGroupUncheckedUpdateWithoutAdminsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupUpdateOneRequiredWithoutAdminsNestedInputObjectSchema =
  Schema;
