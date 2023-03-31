import { z } from 'zod';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';
import { ModuleItemCreateWithoutChildrenInputObjectSchema } from './ModuleItemCreateWithoutChildrenInput.schema';
import { ModuleItemUncheckedCreateWithoutChildrenInputObjectSchema } from './ModuleItemUncheckedCreateWithoutChildrenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCreateOrConnectWithoutChildrenInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ModuleItemCreateWithoutChildrenInputObjectSchema),
        z.lazy(() => ModuleItemUncheckedCreateWithoutChildrenInputObjectSchema),
      ]),
    })
    .strict();

export const ModuleItemCreateOrConnectWithoutChildrenInputObjectSchema = Schema;
