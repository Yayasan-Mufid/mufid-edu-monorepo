import { z } from 'zod';
import { StudyGroupCreateWithoutStudentsInputObjectSchema } from './StudyGroupCreateWithoutStudentsInput.schema';
import { StudyGroupUncheckedCreateWithoutStudentsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutStudentsInput.schema';
import { StudyGroupCreateOrConnectWithoutStudentsInputObjectSchema } from './StudyGroupCreateOrConnectWithoutStudentsInput.schema';
import { StudyGroupUpsertWithoutStudentsInputObjectSchema } from './StudyGroupUpsertWithoutStudentsInput.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupUpdateWithoutStudentsInputObjectSchema } from './StudyGroupUpdateWithoutStudentsInput.schema';
import { StudyGroupUncheckedUpdateWithoutStudentsInputObjectSchema } from './StudyGroupUncheckedUpdateWithoutStudentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUpdateOneRequiredWithoutStudentsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StudyGroupCreateWithoutStudentsInputObjectSchema),
          z.lazy(
            () => StudyGroupUncheckedCreateWithoutStudentsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StudyGroupCreateOrConnectWithoutStudentsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => StudyGroupUpsertWithoutStudentsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => StudyGroupUpdateWithoutStudentsInputObjectSchema),
          z.lazy(
            () => StudyGroupUncheckedUpdateWithoutStudentsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupUpdateOneRequiredWithoutStudentsNestedInputObjectSchema =
  Schema;
