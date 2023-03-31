import { z } from 'zod';
import { ModuleItemCreateWithoutChildrenInputObjectSchema } from './ModuleItemCreateWithoutChildrenInput.schema';
import { ModuleItemUncheckedCreateWithoutChildrenInputObjectSchema } from './ModuleItemUncheckedCreateWithoutChildrenInput.schema';
import { ModuleItemCreateOrConnectWithoutChildrenInputObjectSchema } from './ModuleItemCreateOrConnectWithoutChildrenInput.schema';
import { ModuleItemUpsertWithoutChildrenInputObjectSchema } from './ModuleItemUpsertWithoutChildrenInput.schema';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';
import { ModuleItemUpdateWithoutChildrenInputObjectSchema } from './ModuleItemUpdateWithoutChildrenInput.schema';
import { ModuleItemUncheckedUpdateWithoutChildrenInputObjectSchema } from './ModuleItemUncheckedUpdateWithoutChildrenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUpdateOneWithoutChildrenNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ModuleItemCreateWithoutChildrenInputObjectSchema),
          z.lazy(
            () => ModuleItemUncheckedCreateWithoutChildrenInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ModuleItemCreateOrConnectWithoutChildrenInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ModuleItemUpsertWithoutChildrenInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ModuleItemUpdateWithoutChildrenInputObjectSchema),
          z.lazy(
            () => ModuleItemUncheckedUpdateWithoutChildrenInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemUpdateOneWithoutChildrenNestedInputObjectSchema = Schema;
