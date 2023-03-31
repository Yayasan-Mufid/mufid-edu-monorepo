import { z } from 'zod';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupCreateWithoutScheduleInputObjectSchema } from './StudyGroupCreateWithoutScheduleInput.schema';
import { StudyGroupUncheckedCreateWithoutScheduleInputObjectSchema } from './StudyGroupUncheckedCreateWithoutScheduleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCreateOrConnectWithoutScheduleInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => StudyGroupCreateWithoutScheduleInputObjectSchema),
        z.lazy(() => StudyGroupUncheckedCreateWithoutScheduleInputObjectSchema),
      ]),
    })
    .strict();

export const StudyGroupCreateOrConnectWithoutScheduleInputObjectSchema = Schema;
