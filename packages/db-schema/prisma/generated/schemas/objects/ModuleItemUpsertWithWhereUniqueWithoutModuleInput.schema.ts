import { z } from 'zod';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';
import { ModuleItemUpdateWithoutModuleInputObjectSchema } from './ModuleItemUpdateWithoutModuleInput.schema';
import { ModuleItemUncheckedUpdateWithoutModuleInputObjectSchema } from './ModuleItemUncheckedUpdateWithoutModuleInput.schema';
import { ModuleItemCreateWithoutModuleInputObjectSchema } from './ModuleItemCreateWithoutModuleInput.schema';
import { ModuleItemUncheckedCreateWithoutModuleInputObjectSchema } from './ModuleItemUncheckedCreateWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUpsertWithWhereUniqueWithoutModuleInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ModuleItemUpdateWithoutModuleInputObjectSchema),
        z.lazy(() => ModuleItemUncheckedUpdateWithoutModuleInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ModuleItemCreateWithoutModuleInputObjectSchema),
        z.lazy(() => ModuleItemUncheckedCreateWithoutModuleInputObjectSchema),
      ]),
    })
    .strict();

export const ModuleItemUpsertWithWhereUniqueWithoutModuleInputObjectSchema =
  Schema;
