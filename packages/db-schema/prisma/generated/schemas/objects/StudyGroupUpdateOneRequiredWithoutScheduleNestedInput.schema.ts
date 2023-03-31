import { z } from 'zod';
import { StudyGroupCreateWithoutScheduleInputObjectSchema } from './StudyGroupCreateWithoutScheduleInput.schema';
import { StudyGroupUncheckedCreateWithoutScheduleInputObjectSchema } from './StudyGroupUncheckedCreateWithoutScheduleInput.schema';
import { StudyGroupCreateOrConnectWithoutScheduleInputObjectSchema } from './StudyGroupCreateOrConnectWithoutScheduleInput.schema';
import { StudyGroupUpsertWithoutScheduleInputObjectSchema } from './StudyGroupUpsertWithoutScheduleInput.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupUpdateWithoutScheduleInputObjectSchema } from './StudyGroupUpdateWithoutScheduleInput.schema';
import { StudyGroupUncheckedUpdateWithoutScheduleInputObjectSchema } from './StudyGroupUncheckedUpdateWithoutScheduleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUpdateOneRequiredWithoutScheduleNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StudyGroupCreateWithoutScheduleInputObjectSchema),
          z.lazy(
            () => StudyGroupUncheckedCreateWithoutScheduleInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StudyGroupCreateOrConnectWithoutScheduleInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => StudyGroupUpsertWithoutScheduleInputObjectSchema)
        .optional(),
      connect: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => StudyGroupUpdateWithoutScheduleInputObjectSchema),
          z.lazy(
            () => StudyGroupUncheckedUpdateWithoutScheduleInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupUpdateOneRequiredWithoutScheduleNestedInputObjectSchema =
  Schema;
