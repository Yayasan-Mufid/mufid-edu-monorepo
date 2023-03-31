import { z } from 'zod';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';
import { ModuleCreateWithoutItemsInputObjectSchema } from './ModuleCreateWithoutItemsInput.schema';
import { ModuleUncheckedCreateWithoutItemsInputObjectSchema } from './ModuleUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleCreateOrConnectWithoutItemsInput> = z
  .object({
    where: z.lazy(() => ModuleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ModuleCreateWithoutItemsInputObjectSchema),
      z.lazy(() => ModuleUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleCreateOrConnectWithoutItemsInputObjectSchema = Schema;
