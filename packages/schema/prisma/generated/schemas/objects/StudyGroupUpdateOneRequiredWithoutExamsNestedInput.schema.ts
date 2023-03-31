import { z } from 'zod';
import { StudyGroupCreateWithoutExamsInputObjectSchema } from './StudyGroupCreateWithoutExamsInput.schema';
import { StudyGroupUncheckedCreateWithoutExamsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutExamsInput.schema';
import { StudyGroupCreateOrConnectWithoutExamsInputObjectSchema } from './StudyGroupCreateOrConnectWithoutExamsInput.schema';
import { StudyGroupUpsertWithoutExamsInputObjectSchema } from './StudyGroupUpsertWithoutExamsInput.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupUpdateWithoutExamsInputObjectSchema } from './StudyGroupUpdateWithoutExamsInput.schema';
import { StudyGroupUncheckedUpdateWithoutExamsInputObjectSchema } from './StudyGroupUncheckedUpdateWithoutExamsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUpdateOneRequiredWithoutExamsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StudyGroupCreateWithoutExamsInputObjectSchema),
          z.lazy(() => StudyGroupUncheckedCreateWithoutExamsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StudyGroupCreateOrConnectWithoutExamsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => StudyGroupUpsertWithoutExamsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => StudyGroupUpdateWithoutExamsInputObjectSchema),
          z.lazy(() => StudyGroupUncheckedUpdateWithoutExamsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupUpdateOneRequiredWithoutExamsNestedInputObjectSchema =
  Schema;
