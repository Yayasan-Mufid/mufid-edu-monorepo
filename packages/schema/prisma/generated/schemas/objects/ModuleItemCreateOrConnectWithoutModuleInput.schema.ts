import { z } from 'zod';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';
import { ModuleItemCreateWithoutModuleInputObjectSchema } from './ModuleItemCreateWithoutModuleInput.schema';
import { ModuleItemUncheckedCreateWithoutModuleInputObjectSchema } from './ModuleItemUncheckedCreateWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCreateOrConnectWithoutModuleInput> = z
  .object({
    where: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ModuleItemCreateWithoutModuleInputObjectSchema),
      z.lazy(() => ModuleItemUncheckedCreateWithoutModuleInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleItemCreateOrConnectWithoutModuleInputObjectSchema = Schema;
