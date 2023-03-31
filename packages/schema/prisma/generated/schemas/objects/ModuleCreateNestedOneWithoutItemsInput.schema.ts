import { z } from 'zod';
import { ModuleCreateWithoutItemsInputObjectSchema } from './ModuleCreateWithoutItemsInput.schema';
import { ModuleUncheckedCreateWithoutItemsInputObjectSchema } from './ModuleUncheckedCreateWithoutItemsInput.schema';
import { ModuleCreateOrConnectWithoutItemsInputObjectSchema } from './ModuleCreateOrConnectWithoutItemsInput.schema';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleCreateNestedOneWithoutItemsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ModuleCreateWithoutItemsInputObjectSchema),
        z.lazy(() => ModuleUncheckedCreateWithoutItemsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ModuleCreateOrConnectWithoutItemsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ModuleWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ModuleCreateNestedOneWithoutItemsInputObjectSchema = Schema;
