import { z } from 'zod';
import { ModuleItemCreateWithoutScheduleInputObjectSchema } from './ModuleItemCreateWithoutScheduleInput.schema';
import { ModuleItemUncheckedCreateWithoutScheduleInputObjectSchema } from './ModuleItemUncheckedCreateWithoutScheduleInput.schema';
import { ModuleItemCreateOrConnectWithoutScheduleInputObjectSchema } from './ModuleItemCreateOrConnectWithoutScheduleInput.schema';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCreateNestedOneWithoutScheduleInput> =
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
      connect: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ModuleItemCreateNestedOneWithoutScheduleInputObjectSchema = Schema;
