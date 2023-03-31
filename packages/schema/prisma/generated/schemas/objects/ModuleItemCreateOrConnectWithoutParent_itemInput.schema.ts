import { z } from 'zod';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';
import { ModuleItemCreateWithoutParent_itemInputObjectSchema } from './ModuleItemCreateWithoutParent_itemInput.schema';
import { ModuleItemUncheckedCreateWithoutParent_itemInputObjectSchema } from './ModuleItemUncheckedCreateWithoutParent_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCreateOrConnectWithoutParent_itemInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ModuleItemCreateWithoutParent_itemInputObjectSchema),
        z.lazy(
          () => ModuleItemUncheckedCreateWithoutParent_itemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemCreateOrConnectWithoutParent_itemInputObjectSchema =
  Schema;
