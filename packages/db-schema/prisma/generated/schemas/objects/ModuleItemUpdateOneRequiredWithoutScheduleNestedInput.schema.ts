import { z } from 'zod';
import { ModuleItemCreateWithoutScheduleInputObjectSchema } from './ModuleItemCreateWithoutScheduleInput.schema';
import { ModuleItemUncheckedCreateWithoutScheduleInputObjectSchema } from './ModuleItemUncheckedCreateWithoutScheduleInput.schema';
import { ModuleItemCreateOrConnectWithoutScheduleInputObjectSchema } from './ModuleItemCreateOrConnectWithoutScheduleInput.schema';
import { ModuleItemUpsertWithoutScheduleInputObjectSchema } from './ModuleItemUpsertWithoutScheduleInput.schema';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';
import { ModuleItemUpdateWithoutScheduleInputObjectSchema } from './ModuleItemUpdateWithoutScheduleInput.schema';
import { ModuleItemUncheckedUpdateWithoutScheduleInputObjectSchema } from './ModuleItemUncheckedUpdateWithoutScheduleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUpdateOneRequiredWithoutScheduleNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ModuleItemCreateWithoutScheduleInputObjectSchema),
          z.lazy(
            () => ModuleItemUncheckedCreateWithoutScheduleInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ModuleItemCreateOrConnectWithoutScheduleInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ModuleItemUpsertWithoutScheduleInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ModuleItemUpdateWithoutScheduleInputObjectSchema),
          z.lazy(
            () => ModuleItemUncheckedUpdateWithoutScheduleInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemUpdateOneRequiredWithoutScheduleNestedInputObjectSchema =
  Schema;
