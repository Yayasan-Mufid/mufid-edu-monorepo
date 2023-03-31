import { z } from 'zod';
import { ModuleItemUpdateWithoutScheduleInputObjectSchema } from './ModuleItemUpdateWithoutScheduleInput.schema';
import { ModuleItemUncheckedUpdateWithoutScheduleInputObjectSchema } from './ModuleItemUncheckedUpdateWithoutScheduleInput.schema';
import { ModuleItemCreateWithoutScheduleInputObjectSchema } from './ModuleItemCreateWithoutScheduleInput.schema';
import { ModuleItemUncheckedCreateWithoutScheduleInputObjectSchema } from './ModuleItemUncheckedCreateWithoutScheduleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUpsertWithoutScheduleInput> = z
  .object({
    update: z.union([
      z.lazy(() => ModuleItemUpdateWithoutScheduleInputObjectSchema),
      z.lazy(() => ModuleItemUncheckedUpdateWithoutScheduleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ModuleItemCreateWithoutScheduleInputObjectSchema),
      z.lazy(() => ModuleItemUncheckedCreateWithoutScheduleInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleItemUpsertWithoutScheduleInputObjectSchema = Schema;
