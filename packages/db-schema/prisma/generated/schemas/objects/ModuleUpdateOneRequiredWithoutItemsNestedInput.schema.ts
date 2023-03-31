import { z } from 'zod';
import { ModuleCreateWithoutItemsInputObjectSchema } from './ModuleCreateWithoutItemsInput.schema';
import { ModuleUncheckedCreateWithoutItemsInputObjectSchema } from './ModuleUncheckedCreateWithoutItemsInput.schema';
import { ModuleCreateOrConnectWithoutItemsInputObjectSchema } from './ModuleCreateOrConnectWithoutItemsInput.schema';
import { ModuleUpsertWithoutItemsInputObjectSchema } from './ModuleUpsertWithoutItemsInput.schema';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';
import { ModuleUpdateWithoutItemsInputObjectSchema } from './ModuleUpdateWithoutItemsInput.schema';
import { ModuleUncheckedUpdateWithoutItemsInputObjectSchema } from './ModuleUncheckedUpdateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUpdateOneRequiredWithoutItemsNestedInput> =
  z
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
      upsert: z
        .lazy(() => ModuleUpsertWithoutItemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ModuleWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ModuleUpdateWithoutItemsInputObjectSchema),
          z.lazy(() => ModuleUncheckedUpdateWithoutItemsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ModuleUpdateOneRequiredWithoutItemsNestedInputObjectSchema =
  Schema;
