import { z } from 'zod';
import { ModuleAdminWhereUniqueInputObjectSchema } from './ModuleAdminWhereUniqueInput.schema';
import { ModuleAdminCreateWithoutModuleInputObjectSchema } from './ModuleAdminCreateWithoutModuleInput.schema';
import { ModuleAdminUncheckedCreateWithoutModuleInputObjectSchema } from './ModuleAdminUncheckedCreateWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminCreateOrConnectWithoutModuleInput> = z
  .object({
    where: z.lazy(() => ModuleAdminWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ModuleAdminCreateWithoutModuleInputObjectSchema),
      z.lazy(() => ModuleAdminUncheckedCreateWithoutModuleInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleAdminCreateOrConnectWithoutModuleInputObjectSchema = Schema;
