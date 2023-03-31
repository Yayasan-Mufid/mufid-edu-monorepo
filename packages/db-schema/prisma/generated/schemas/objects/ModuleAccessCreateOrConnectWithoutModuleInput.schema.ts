import { z } from 'zod';
import { ModuleAccessWhereUniqueInputObjectSchema } from './ModuleAccessWhereUniqueInput.schema';
import { ModuleAccessCreateWithoutModuleInputObjectSchema } from './ModuleAccessCreateWithoutModuleInput.schema';
import { ModuleAccessUncheckedCreateWithoutModuleInputObjectSchema } from './ModuleAccessUncheckedCreateWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessCreateOrConnectWithoutModuleInput> =
  z
    .object({
      where: z.lazy(() => ModuleAccessWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ModuleAccessCreateWithoutModuleInputObjectSchema),
        z.lazy(() => ModuleAccessUncheckedCreateWithoutModuleInputObjectSchema),
      ]),
    })
    .strict();

export const ModuleAccessCreateOrConnectWithoutModuleInputObjectSchema = Schema;
