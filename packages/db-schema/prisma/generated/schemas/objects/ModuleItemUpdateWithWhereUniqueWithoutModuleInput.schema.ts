import { z } from 'zod';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';
import { ModuleItemUpdateWithoutModuleInputObjectSchema } from './ModuleItemUpdateWithoutModuleInput.schema';
import { ModuleItemUncheckedUpdateWithoutModuleInputObjectSchema } from './ModuleItemUncheckedUpdateWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUpdateWithWhereUniqueWithoutModuleInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleItemUpdateWithoutModuleInputObjectSchema),
        z.lazy(() => ModuleItemUncheckedUpdateWithoutModuleInputObjectSchema),
      ]),
    })
    .strict();

export const ModuleItemUpdateWithWhereUniqueWithoutModuleInputObjectSchema =
  Schema;
