import { z } from 'zod';
import { ModuleUpdateWithoutItemsInputObjectSchema } from './ModuleUpdateWithoutItemsInput.schema';
import { ModuleUncheckedUpdateWithoutItemsInputObjectSchema } from './ModuleUncheckedUpdateWithoutItemsInput.schema';
import { ModuleCreateWithoutItemsInputObjectSchema } from './ModuleCreateWithoutItemsInput.schema';
import { ModuleUncheckedCreateWithoutItemsInputObjectSchema } from './ModuleUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUpsertWithoutItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ModuleUpdateWithoutItemsInputObjectSchema),
      z.lazy(() => ModuleUncheckedUpdateWithoutItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ModuleCreateWithoutItemsInputObjectSchema),
      z.lazy(() => ModuleUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleUpsertWithoutItemsInputObjectSchema = Schema;
