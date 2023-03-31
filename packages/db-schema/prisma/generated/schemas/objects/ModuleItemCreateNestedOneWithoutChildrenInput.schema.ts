import { z } from 'zod';
import { ModuleItemCreateWithoutChildrenInputObjectSchema } from './ModuleItemCreateWithoutChildrenInput.schema';
import { ModuleItemUncheckedCreateWithoutChildrenInputObjectSchema } from './ModuleItemUncheckedCreateWithoutChildrenInput.schema';
import { ModuleItemCreateOrConnectWithoutChildrenInputObjectSchema } from './ModuleItemCreateOrConnectWithoutChildrenInput.schema';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCreateNestedOneWithoutChildrenInput> =
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
      connect: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ModuleItemCreateNestedOneWithoutChildrenInputObjectSchema = Schema;
