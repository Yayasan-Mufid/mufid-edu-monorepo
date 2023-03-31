import { z } from 'zod';
import { StudyGroupCreateWithoutScheduleInputObjectSchema } from './StudyGroupCreateWithoutScheduleInput.schema';
import { StudyGroupUncheckedCreateWithoutScheduleInputObjectSchema } from './StudyGroupUncheckedCreateWithoutScheduleInput.schema';
import { StudyGroupCreateOrConnectWithoutScheduleInputObjectSchema } from './StudyGroupCreateOrConnectWithoutScheduleInput.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCreateNestedOneWithoutScheduleInput> =
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
      connect: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const StudyGroupCreateNestedOneWithoutScheduleInputObjectSchema = Schema;
