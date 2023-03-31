import { z } from 'zod';
import { StudyGroupUpdateWithoutScheduleInputObjectSchema } from './StudyGroupUpdateWithoutScheduleInput.schema';
import { StudyGroupUncheckedUpdateWithoutScheduleInputObjectSchema } from './StudyGroupUncheckedUpdateWithoutScheduleInput.schema';
import { StudyGroupCreateWithoutScheduleInputObjectSchema } from './StudyGroupCreateWithoutScheduleInput.schema';
import { StudyGroupUncheckedCreateWithoutScheduleInputObjectSchema } from './StudyGroupUncheckedCreateWithoutScheduleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUpsertWithoutScheduleInput> = z
  .object({
    update: z.union([
      z.lazy(() => StudyGroupUpdateWithoutScheduleInputObjectSchema),
      z.lazy(() => StudyGroupUncheckedUpdateWithoutScheduleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StudyGroupCreateWithoutScheduleInputObjectSchema),
      z.lazy(() => StudyGroupUncheckedCreateWithoutScheduleInputObjectSchema),
    ]),
  })
  .strict();

export const StudyGroupUpsertWithoutScheduleInputObjectSchema = Schema;
