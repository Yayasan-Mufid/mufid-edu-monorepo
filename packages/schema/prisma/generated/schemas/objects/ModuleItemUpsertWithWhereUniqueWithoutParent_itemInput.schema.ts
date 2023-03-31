import { z } from 'zod';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';
import { ModuleItemUpdateWithoutParent_itemInputObjectSchema } from './ModuleItemUpdateWithoutParent_itemInput.schema';
import { ModuleItemUncheckedUpdateWithoutParent_itemInputObjectSchema } from './ModuleItemUncheckedUpdateWithoutParent_itemInput.schema';
import { ModuleItemCreateWithoutParent_itemInputObjectSchema } from './ModuleItemCreateWithoutParent_itemInput.schema';
import { ModuleItemUncheckedCreateWithoutParent_itemInputObjectSchema } from './ModuleItemUncheckedCreateWithoutParent_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUpsertWithWhereUniqueWithoutParent_itemInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ModuleItemUpdateWithoutParent_itemInputObjectSchema),
        z.lazy(
          () => ModuleItemUncheckedUpdateWithoutParent_itemInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ModuleItemCreateWithoutParent_itemInputObjectSchema),
        z.lazy(
          () => ModuleItemUncheckedCreateWithoutParent_itemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemUpsertWithWhereUniqueWithoutParent_itemInputObjectSchema =
  Schema;
