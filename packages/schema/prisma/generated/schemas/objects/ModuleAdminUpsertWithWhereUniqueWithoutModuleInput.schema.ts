import { z } from 'zod';
import { ModuleAdminWhereUniqueInputObjectSchema } from './ModuleAdminWhereUniqueInput.schema';
import { ModuleAdminUpdateWithoutModuleInputObjectSchema } from './ModuleAdminUpdateWithoutModuleInput.schema';
import { ModuleAdminUncheckedUpdateWithoutModuleInputObjectSchema } from './ModuleAdminUncheckedUpdateWithoutModuleInput.schema';
import { ModuleAdminCreateWithoutModuleInputObjectSchema } from './ModuleAdminCreateWithoutModuleInput.schema';
import { ModuleAdminUncheckedCreateWithoutModuleInputObjectSchema } from './ModuleAdminUncheckedCreateWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminUpsertWithWhereUniqueWithoutModuleInput> =
  z
    .object({
      where: z.lazy(() => ModuleAdminWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ModuleAdminUpdateWithoutModuleInputObjectSchema),
        z.lazy(() => ModuleAdminUncheckedUpdateWithoutModuleInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ModuleAdminCreateWithoutModuleInputObjectSchema),
        z.lazy(() => ModuleAdminUncheckedCreateWithoutModuleInputObjectSchema),
      ]),
    })
    .strict();

export const ModuleAdminUpsertWithWhereUniqueWithoutModuleInputObjectSchema =
  Schema;
