import { z } from 'zod';
import { ModuleAccessWhereUniqueInputObjectSchema } from './ModuleAccessWhereUniqueInput.schema';
import { ModuleAccessUpdateWithoutModuleInputObjectSchema } from './ModuleAccessUpdateWithoutModuleInput.schema';
import { ModuleAccessUncheckedUpdateWithoutModuleInputObjectSchema } from './ModuleAccessUncheckedUpdateWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessUpdateWithWhereUniqueWithoutModuleInput> =
  z
    .object({
      where: z.lazy(() => ModuleAccessWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleAccessUpdateWithoutModuleInputObjectSchema),
        z.lazy(() => ModuleAccessUncheckedUpdateWithoutModuleInputObjectSchema),
      ]),
    })
    .strict();

export const ModuleAccessUpdateWithWhereUniqueWithoutModuleInputObjectSchema =
  Schema;
