import { z } from 'zod';
import { ModuleAdminWhereUniqueInputObjectSchema } from './ModuleAdminWhereUniqueInput.schema';
import { ModuleAdminUpdateWithoutModuleInputObjectSchema } from './ModuleAdminUpdateWithoutModuleInput.schema';
import { ModuleAdminUncheckedUpdateWithoutModuleInputObjectSchema } from './ModuleAdminUncheckedUpdateWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminUpdateWithWhereUniqueWithoutModuleInput> =
  z
    .object({
      where: z.lazy(() => ModuleAdminWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleAdminUpdateWithoutModuleInputObjectSchema),
        z.lazy(() => ModuleAdminUncheckedUpdateWithoutModuleInputObjectSchema),
      ]),
    })
    .strict();

export const ModuleAdminUpdateWithWhereUniqueWithoutModuleInputObjectSchema =
  Schema;
