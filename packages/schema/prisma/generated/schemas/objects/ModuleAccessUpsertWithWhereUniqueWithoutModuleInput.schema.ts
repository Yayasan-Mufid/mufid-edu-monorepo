import { z } from 'zod';
import { ModuleAccessWhereUniqueInputObjectSchema } from './ModuleAccessWhereUniqueInput.schema';
import { ModuleAccessUpdateWithoutModuleInputObjectSchema } from './ModuleAccessUpdateWithoutModuleInput.schema';
import { ModuleAccessUncheckedUpdateWithoutModuleInputObjectSchema } from './ModuleAccessUncheckedUpdateWithoutModuleInput.schema';
import { ModuleAccessCreateWithoutModuleInputObjectSchema } from './ModuleAccessCreateWithoutModuleInput.schema';
import { ModuleAccessUncheckedCreateWithoutModuleInputObjectSchema } from './ModuleAccessUncheckedCreateWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessUpsertWithWhereUniqueWithoutModuleInput> =
  z
    .object({
      where: z.lazy(() => ModuleAccessWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ModuleAccessUpdateWithoutModuleInputObjectSchema),
        z.lazy(() => ModuleAccessUncheckedUpdateWithoutModuleInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ModuleAccessCreateWithoutModuleInputObjectSchema),
        z.lazy(() => ModuleAccessUncheckedCreateWithoutModuleInputObjectSchema),
      ]),
    })
    .strict();

export const ModuleAccessUpsertWithWhereUniqueWithoutModuleInputObjectSchema =
  Schema;
